import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { data } from "./books";
import Book from "./Book"
//Component must start with capital letter in order for react to recognize it as a component
function Booklist() {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return (
          <Book key={book.id} {...book}>
            <p>Lorem ipsum dolor sit amet, consect</p>
            <div>{book.id}</div>
          </Book>
        );
      })}
    </section>
  );
}
ReactDom.render(<Booklist />, document.getElementById("root"));
