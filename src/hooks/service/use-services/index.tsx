import { useGetBooksService } from "../use-get-books-service";
import { tuple } from "../../../utils/tuple";
import { Status } from "../../../interface/IBookDto";
import { useEffect } from "react";
import { useBookLibraryContext } from "../../../book-library";
import { useChangeBookService } from "../use-change-book-service";

export const useServices = () => {
  const {setBooks} = useBookLibraryContext();

  const [
    getBooks,
    getBooksStatus,
    getBooksData
  ] = useGetBooksService(Status.NEW);

  const [
    getFavouriteBooks,
    getFavouriteBooksStatus,
    getFavouriteBooksData
  ] = useGetBooksService(Status.FAVOURITE);

  const [
    getFinishBooks,
    getFinishBooksStatus,
    getFinishBooksData
  ] = useGetBooksService(Status.FINISH);

  const [
    getCurrentBooks,
    getCurrentBooksStatus,
    getCurrentBooksData
  ] = useGetBooksService(Status.CURRENT);

  const [
    getWishBooks,
    getWishBooksStatus,
    getWishBooksData
  ] = useGetBooksService(Status.WISH);

  useEffect(() => {
    if (getBooksStatus === "success") {
      setBooks(getBooksData ?? []);
    }
  }, [getBooksData, getBooksStatus, setBooks]);

  useEffect(() => {
    if (getFavouriteBooksStatus === "success") {
      setBooks(getFavouriteBooksData ?? []);
    }
  }, [getFavouriteBooksData, getFavouriteBooksStatus, setBooks]);

  useEffect(() => {
    if (getFinishBooksStatus === "success") {
      setBooks(getFinishBooksData ?? []);
    }
  }, [getFinishBooksData, getFinishBooksStatus, setBooks]);

  useEffect(() => {
    if (getCurrentBooksStatus === "success") {
      setBooks(getCurrentBooksData ?? []);
    }
  }, [getCurrentBooksData, getCurrentBooksStatus, setBooks]);

  useEffect(() => {
    if (getWishBooksStatus === "success") {
      setBooks(getWishBooksData ?? []);
    }
  }, [getWishBooksData, getWishBooksStatus, setBooks]);

  const [
    changeBook,
    changeBookStatus,
    changeBookData
  ] = useChangeBookService();

  return {
    getBooks,
    getFavouriteBooks,
    getFinishBooks,
    getCurrentBooks,
    getWishBooks,
    changeBook,
    changeBookStatus
  };
}
