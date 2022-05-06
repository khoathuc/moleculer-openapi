import React from 'react'


const Book = function ({ img, title, author, children }) {
  const clickHandler = () => {
    alert("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <div>
        <button type="button" onClick={() => complexExample(author)}>
          {" "}
          more complex example
        </button>
      </div>
      {children}
    </article>
  );
};

export default Book
