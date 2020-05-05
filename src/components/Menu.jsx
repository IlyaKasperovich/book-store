import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const CartComponent = ({ title, removeFromCart, id }) => (
  <div>
    <span>
      {title}
      <Button onClick={removeFromCart.bind(this, id)}>Удалить</Button>
    </span>
  </div>
);

const Menu = ({ totalPrice, count, items }) => (
  <AppBar id="menu-container" position="static">
    <Toolbar>
      <Typography className="menu-logo" variant="h5">
        Магазин книг
      </Typography>
      <Typography className="menu-counter">
        Итого: <b>{totalPrice}</b>
      </Typography>
      <div>
        <ExpansionPanel id="cart">
          <ExpansionPanelSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Корзина (<b>{count}</b>)
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {items.map((book) => CartComponent(book))}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Toolbar>
  </AppBar>
);

export default Menu;
