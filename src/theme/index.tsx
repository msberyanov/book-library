export type NavType =
  | "my-books"
  | "favourites"
  | "finishes"
  | "currents"
  | "wishes"
  | "quotes"
  | "reviews"
  | "rates"
  | "authors";

type NavTypesProps = {
  [navType in NavType] : {
    index: number;
    title: string;
    color: string;
    backgroundColor: string;
  }
}

export const NavTypes: NavTypesProps = {
  "my-books": {
    index: 0,
    title: "My Books",
    color: "#c9742f",
    backgroundColor: "linear-gradient(270deg, #cebca9, #c29a89)"
  },
  "favourites": {
    index: 1,
    title: "Favourites",
    color: "#b2264c",
    backgroundColor: "linear-gradient(270deg, #cea9b3, #c28998)"
  },
  "finishes": {
    index: 2,
    title: "Finishes",
    color: "#2f89c9",
    backgroundColor: "linear-gradient(270deg, #a7bdcc, #86a7be)"
  },
  "currents": {
    index: 3,
    title: "Currents",
    color: "#303993",
    backgroundColor: "linear-gradient(270deg, #a5a8c9, #8186b7)"
  },
  "wishes": {
    index: 4,
    title: "Wishes",
    color: "#510a9a",
    backgroundColor: "linear-gradient(270deg, #b3a2c5, #977db2)"
  },
  "quotes": {
    index: 5,
    title: "Quotes",
    color: "#af2613",
    backgroundColor: "linear-gradient(270deg, #c4a5a1, #b0827c)"
  },
  "reviews": {
    index: 6,
    title: "Reviews",
    color: "#be8710",
    backgroundColor: "linear-gradient(270deg, #c0b59e, #af9e7a)"
  },
  "rates": {
    index: 7,
    title: "Rates",
    color: "#0e9409",
    backgroundColor: "linear-gradient(270deg, #9dbe9c, #77a975)"
  },
  "authors": {
    index: 8,
    title: "Authors",
    color: "#088572",
    backgroundColor: "linear-gradient(270deg, #99bbb6, #6fa49c)"
  }
}
