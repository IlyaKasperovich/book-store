import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as bookActions from "../actions/books";
import App from "../components/App.jsx";
import orderBy from "lodash/orderBy";

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case "All":
      return books;
    case "Price_high":
      return orderBy(books, "price", "desc");
    case "Price_low":
      return orderBy(books, "price", "asc");
    case "Author":
      return orderBy(books, "author", "asc");
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) =>
  books.filter(
    (o) =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

const searchBooks = (books, searchQuery, filterBy) => {
  return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapStateToProps = ({ books, filter }) => ({
  books:
    books.items &&
    searchBooks(books.items, filter.searchQuery, filter.filterBy),
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(bookActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
