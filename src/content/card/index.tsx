import "./index.css"
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Title } from "./title";
import { Author } from "./author";
import { Rate } from "./rate";
import { Button } from "./button";
import { NavType } from "../../theme";
import { IBookDto, Status } from "../../interface/IBookDto";
import { useServices } from "../../hooks/service/use-services";
import { useBookLibraryContext } from "../../book-library";

interface CardProps extends Pick<IBookDto, "id" | "title" | "author" | "status" | "cover" | "date" | "rate"> {
  type: NavType;
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  author,
  status,
  cover,
  type,
  date,
  rate
}) => {
  const {
    changeBook,
    changeBookStatus
  } = useServices();

  const {setBooks} = useBookLibraryContext();

  const [newStatus, setNewStatus] = useState<Status>(status);
  const [newRate, setNewRate] = useState<number>(rate);

  useEffect(() => {
    if (changeBookStatus === "success") {
      setBooks(books => books.map(book => {
        if (book.id === id) {
          book.status = newStatus;
          book.rate = newRate;
        }
        return book;
      }));
    }
  }, [changeBookStatus, id, newRate, newStatus, setBooks]);


  const changeStatus = useCallback((changeNewStatus: Status) => {
    let nextStatus = Status.NEW;

    switch (changeNewStatus) {
      case Status.FAVOURITE:
        if (status === Status.FAVOURITE) {
          nextStatus = Status.NEW;
          setNewStatus(Status.NEW);
        } else {
          nextStatus = Status.FAVOURITE;
          setNewStatus(Status.FAVOURITE)
        }
        break;
      case Status.CURRENT:
        if (status === Status.CURRENT) {
          nextStatus = Status.NEW;
          setNewStatus(Status.NEW);
        } else {
          nextStatus = Status.CURRENT;
          setNewStatus(Status.CURRENT)
        }
        break;
      case Status.FINISH:
        if (status === Status.FINISH) {
          nextStatus = Status.NEW;
          setNewStatus(Status.NEW);
        } else {
          nextStatus = Status.FINISH;
          setNewStatus(Status.FINISH)
        }
        break;
      case Status.WISH:
        if (status === Status.WISH) {
          nextStatus = Status.NEW;
          setNewStatus(Status.NEW);
        } else {
          nextStatus = Status.WISH;
          setNewStatus(Status.WISH)
        }
        break;
    }

    changeBook({
      id,
      title,
      author,
      status: nextStatus,
      date: new Date()
    });
  }, [author, changeBook, id, status, title]);

  const changeRate = useCallback((changeRate: number) => {
    setNewRate(changeRate);

    changeBook({
      id,
      title,
      author,
      status,
      date,
      rate: changeRate
    });
  }, [author, changeBook, date, id, status, title]);

  const InFavouritesButton = useMemo(() =>
    <Button
      extended={status === Status.FAVOURITE}
      type="favourites"
      navType={type}
      onClick={() => changeStatus(Status.FAVOURITE)}
      date={date}
    />, [changeStatus, date, status, type]
  );

  const InFinishesButton = useMemo(() =>
    <Button
      extended={status === Status.FINISH}
      type="finishes"
      navType={type}
      onClick={() => changeStatus(Status.FINISH)}
      date={date}
    />, [changeStatus, date, status, type]
  );

  const InCurrentsButton = useMemo(() =>
    <Button
      extended={status === Status.CURRENT}
      type="currents"
      navType={type}
      onClick={() => changeStatus(Status.CURRENT)}
      date={date}
    />, [changeStatus, date, status, type]
  );

  const InWishesButton = useMemo(() =>
    <Button
      extended={status === Status.WISH}
      type="wishes"
      navType={type}
      onClick={() => changeStatus(Status.WISH)}
      date={date}
    />, [changeStatus, date, status, type]
  );

  const defineButtons = useCallback(() => {
    switch (type) {
      case "my-books":
        return (
          <>
            {InFavouritesButton}
            {InCurrentsButton}
            {InFinishesButton}
            {InWishesButton}
          </>
        );
      case "favourites":
        return (
          <>
            {InFavouritesButton}
          </>
        );
      case "finishes":
        return (
          <>
            {InFinishesButton}
          </>
        )
      case "currents":
        return (
          <>
            {InCurrentsButton}
          </>
        );
      case "wishes":
        return (
          <>
            {InWishesButton}
          </>
        );
      case "quotes":
        break;
      case "reviews":
        break;
      case "rates":
        break;
      case "authors":
        break;
    }
  }, [InCurrentsButton, InFavouritesButton, InFinishesButton, InWishesButton, type]);

  return (
    <div
      className="card tinted card-appearance"
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0.25)), url('data:image/png;base64,${cover}')`}}
    >
      <Title title={title}/>
      <Author author={author}/>
      <Rate rate={rate} onClick={changeRate}/>

      <div className="footer">
        <div className="cover">
          {defineButtons()}
        </div>
      </div>
    </div>
  )
}
