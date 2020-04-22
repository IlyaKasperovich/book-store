const initialState = {
  books: [
    {
      id: 0,
      title: "hello",
    }
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload,
      };
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};
