import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import { setSearchQuery } from "../actions/filter";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <div>
    <List component="nav" aria-label="main mailbox folders">
      <ListItem
        button
        selected={filterBy === "All"}
        onClick={setFilter.bind(this, "All")}
      >
        Все
      </ListItem>
      <ListItem
        button
        selected={filterBy === "Price_high"}
        onClick={setFilter.bind(this, "Price_high")}
      >
        Цена (дорогие)
      </ListItem>
      <ListItem
        button
        selected={filterBy === "Price_low"}
        onClick={setFilter.bind(this, "Price_low")}
      >
        Цена (дешевые)
      </ListItem>
      <ListItem
        button
        selected={filterBy === "Author"}
        onClick={setFilter.bind(this, "Author")}
      >
        Автор
      </ListItem>
      <ListItem>
        <TextField
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          id="outlined-basic"
          label="Поиск..."
          variant="outlined"
        />
      </ListItem>
    </List>
  </div>
);

export default Filter;
