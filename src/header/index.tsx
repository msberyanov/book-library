import React, { useEffect, useMemo, useState } from "react";
import "./index.css"
import { NavButton } from "./nav-button";
import { FiActivity, FiAtSign, FiBook, FiBookmark, FiBookOpen, FiMessageCircle, FiStar, FiThumbsUp, FiUser } from "react-icons/fi";
import { Logo } from "./logo";
import { Link, useLocation } from "react-router-dom";
import { useServices } from "../hooks/service/use-services";
import { useWindowSize } from "../hooks/use-window-size";
import { NavButtonMore } from "./nav-button-more";
import { useBookLibraryContext } from "../book-library";
import avatar from'./avatar/avatar.jpg';
import { NavType, NavTypes } from "../theme";

export const Header: React.FC = () => {
  const location = useLocation();

  const {headerMinified} = useBookLibraryContext();

  const {
    getBooks,
    getFavouriteBooks,
    getFinishBooks,
    getCurrentBooks,
    getWishBooks,
  } = useServices();

  const [selectedNav, setSelectedNav] = useState(location.pathname.slice(1) as NavType);

  useEffect(() => {
    setSelectedNav(location.pathname.slice(1) as NavType);
  }, [location.pathname]);

  const [width] = useWindowSize();

  const availableNavButtonsAmount = useMemo(() =>
    (headerMinified ? ((width / 3) - 255) : (width - 320)) / 110, [headerMinified, width]);

  const navButtons = useMemo(() =>
    [
      <Link to={"/my-books"} className="nav-link">
        <NavButton
          type="my-books"
          icon={<FiBookOpen className="nav-icon"/>}
          selected={selectedNav === "my-books"}
          onClick={getBooks}
        />
      </Link>,

      <Link to={"/favourites"} className="nav-link">
        <NavButton
          type="favourites"
          icon={<FiStar className="nav-icon"/>}
          selected={selectedNav === "favourites"}
          onClick={getFavouriteBooks}
        />
      </Link>,

      <Link to={"/finishes"} className="nav-link">
        <NavButton
          type="finishes"
          icon={<FiBook className="nav-icon"/>}
          selected={selectedNav === "finishes"}
          onClick={getFinishBooks}
        />
      </Link>,

      <Link to={"/currents"} className="nav-link">
        <NavButton
          type="currents"
          icon={<FiBookmark className="nav-icon"/>}
          selected={selectedNav === "currents"}
          onClick={getCurrentBooks}
        />
      </Link>,

      <Link to={"/wishes"} className="nav-link">
        <NavButton
          type="wishes"
          icon={<FiActivity className="nav-icon"/>}
          selected={selectedNav === "wishes"}
          onClick={getWishBooks}
        />
      </Link>,

      <Link to={"/quotes"} className="nav-link">
        <NavButton
          type="quotes"
          icon={<FiMessageCircle className="nav-icon"/>}
          selected={selectedNav === "quotes"}
          onClick={getBooks}
        />
      </Link>,

      <Link to={"/reviews"} className="nav-link">
        <NavButton
          type="reviews"
          icon={<FiAtSign className="nav-icon"/>}
          selected={selectedNav === "reviews"}
          onClick={getBooks}
        />
      </Link>,

      <Link to={"/rates"} className="nav-link">
        <NavButton
          type="rates"
          icon={<FiThumbsUp className="nav-icon"/>}
          selected={selectedNav === "rates"}
          onClick={getBooks}
        />
      </Link>,

      <Link to={"/authors"} className="nav-link">
        <NavButton
          type="authors"
          icon={<FiUser className="nav-icon"/>}
          selected={selectedNav === "authors"}
          onClick={getBooks}
        />
      </Link>
    ], [
    getBooks,
    getCurrentBooks,
    getFavouriteBooks,
    getFinishBooks,
    getWishBooks,
    selectedNav
  ]);

  const navMoreButtons = useMemo(() =>
    navButtons
      .slice(availableNavButtonsAmount, navButtons.length)
      .map(navButton =>
        <div className="header-nav-more-item">
          {navButton}
        </div>
      ), [availableNavButtonsAmount, navButtons]);

  return (
    <div className="header-area">
      <header className="header" id="header">
        <Logo/>
        <div className="header-nav">
          {[...navButtons.slice(0, availableNavButtonsAmount)]}
          {availableNavButtonsAmount < (navButtons.length - 1)
            ? <NavButtonMore
              color={NavTypes[selectedNav].index < availableNavButtonsAmount - 1 ? "inherit" : "white"}
              background={NavTypes[selectedNav].index < availableNavButtonsAmount - 1 ? "none" : NavTypes[selectedNav].color}
              navButtons={navMoreButtons}/>
            : null
          }
          <img src={avatar} className="header-avatar"/>
        </div>
      </header>
    </div>
  );
}
