import React, { Component } from "react";
import { connect } from "react-redux";
import { setBooks } from "./actions/books";
import axios from "axios";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Menu from "./components/Menu";
import BookCard from "./components/BookCard";

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get("/books.json").then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Grid
          id="items-container"
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={10}
        >
          {!isReady
            ? "Загрузка"
            : books.map((book, i) => (
                <Grid className="item" key={i} item xs={4}>
                  <BookCard {...book} />
                </Grid>
              ))}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: (books) => dispatch(setBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
