import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const Menu = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography className="menu-logo" variant="h5">Магазин книг</Typography>
      <Typography className="menu-counter">
        Итого: <b>0</b> руб.
      </Typography>
      <Button className="curt" color="inherit">
        Корзина
      </Button>
    </Toolbar>
  </AppBar>
);

export default Menu;
