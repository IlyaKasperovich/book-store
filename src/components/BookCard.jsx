import React from "react";

import Button from "@material-ui/core/Button";

const BookCard = (book) => {
  const { title, author, image, price, addToCart, addedCount } = book;
  return (
    <div className="book-card">
      <img className="book-img" src={image} alt={title}></img>
      <div className="book-title">{title}</div>
      <div className="book-author">{author}</div>
      <div className="book-price">Цена: {price}</div>
      <Button
        onClick={addToCart.bind(this, book)}
        className="book-button"
        variant="contained"
        color="primary"
      >
        Добавить в карзину {addedCount > 0 && `(${addedCount})`}
      </Button>
      
    </div>
  );
};

export default BookCard;
