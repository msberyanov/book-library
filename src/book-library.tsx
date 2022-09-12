import React, { useEffect, useState } from 'react';
import { Header } from "./header";
import { Content } from "./content";
import { Navigate, Route, Routes, } from "react-router-dom";
import { IBookDto } from "./interface/IBookDto";

interface BookLibraryContextProps {
  books: IBookDto[];
  setBooks: React.Dispatch<React.SetStateAction<IBookDto[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  headerMinified: boolean;
  setHeaderMinified: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BookLibraryContext = React.createContext<BookLibraryContextProps>({} as BookLibraryContextProps);

export const useBookLibraryContext = () => React.useContext(BookLibraryContext);

export const BookLibrary: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [headerMinified, setHeaderMinified] = useState(false);
  const [books, setBooks] = useState<IBookDto[]>([] as IBookDto[]);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        if (!document.getElementById("header")?.classList.contains("header-min")) {
          document.getElementById("header")?.classList.add("header-min");
          setHeaderMinified(true);
        }
      } else {
        if (document.getElementById("header")?.classList.contains("header-min")) {
          document.getElementById("header")?.classList.remove("header-min");
          setHeaderMinified(false);
        }
      }
    };
  }, []);

  return (
    <BookLibraryContext.Provider
      value={{
        books,
        setBooks,
        loading,
        setLoading,
        headerMinified,
        setHeaderMinified
      }}>
      <Header/>

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/my-books"/>}
        />

        <Route
          path="/my-books"
          element={<Content type="my-books"/>}
        />

        <Route
          path="/favourites"
          element={<Content type="favourites"/>}
        />

        <Route
          path="/finishes"
          element={<Content type="finishes"/>}
        />

        <Route
          path="/currents"
          element={<Content type="currents"/>}
        />

        <Route
          path="/wishes"
          element={<Content type="wishes"/>}
        />

        <Route
          path="/quotes"
          element={<Content type="quotes"/>}
        />

        <Route
          path="/reviews"
          element={<Content type="reviews"/>}
        />

        <Route
          path="/rates"
          element={<Content type="rates"/>}
        />

        <Route
          path="/authors"
          element={<Content type="authors"/>}
        />
      </Routes>
    </BookLibraryContext.Provider>
  );
}
