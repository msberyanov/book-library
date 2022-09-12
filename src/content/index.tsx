import "./index.css"
import React, { useEffect, useMemo } from "react";
import { Card } from "./card";
import { NavType, NavTypes } from "../theme";
import { useBookLibraryContext } from "../book-library";
import { useLocation } from "react-router-dom";
import { useServices } from "../hooks/service/use-services";
import { Loading } from "./loading";

interface ContentProps {
  type: NavType;
}

export const Content: React.FC<ContentProps> = ({
  type
}) => {
  const {books, loading} = useBookLibraryContext();

  const location = useLocation();

  const {
    getBooks,
    getFavouriteBooks,
    getFinishBooks,
    getCurrentBooks,
    getWishBooks,
  } = useServices();

  useEffect(() => {
    const navType = location.pathname.slice(1) as NavType;

    document.documentElement.style.setProperty("--background-color", NavTypes[navType].backgroundColor)
    document.documentElement.style.setProperty("--main-color", NavTypes[navType].color)
  }, [location.pathname]);

  useEffect(() => {
    const navType = location.pathname.slice(1) as NavType;

    switch (navType)  {
      case "my-books":
        getBooks();
        break;
      case "favourites":
        getFavouriteBooks();
        break;
      case "finishes":
        getFinishBooks();
        break;
      case "currents":
        getCurrentBooks();
        break;
      case "wishes":
        getWishBooks();
        break;
      case "quotes":
        break;
      case "reviews":
        break;
      case "rates":
        break;
      case "authors":
        break;
    }
  }, [getBooks, getCurrentBooks, getFavouriteBooks, getFinishBooks, getWishBooks, location.pathname]);

  const cards = useMemo(() => {
    return books?.map(book =>
      <Card
        key={book.id + type}
        id={book.id}
        title={book.title}
        author={book.author}
        status={book.status}
        cover={book.cover}
        type={type}
        date={book.date}
        rate={book.rate}
      />
    )
  }, [books, type]);

  const addBookCard = useMemo(() => {
    return (
      <div className="add-book">
        +
      </div>
    );
  }, []);

  return (
    <div className="content-area">
      <div className="content">
        {loading ?
          <Loading/> :
          <>
            {cards}
            {type === "my-books" ? addBookCard: null}
          </>}
      </div>
    </div>
  )
}
