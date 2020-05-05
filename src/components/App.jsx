import React, { Component } from "react";
import axios from "axios";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import BookCard from "../containers/BookCard";
import Filter from "../containers/Filter";
import Menu from "../containers/Menu";

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
        <Filter />
        <Grid
          id="items-container"
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
          spacing={10}
        >
          {!isReady
            ? "Загрузка"
            : books.map((book, i) => (
                <Grid key={i} item xs={3}>
                  <BookCard {...book} />
                </Grid>
              ))}
        </Grid>
      </Container>
    );
  }
}

export default App;
