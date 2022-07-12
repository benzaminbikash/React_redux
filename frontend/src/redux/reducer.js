export const cartData = (data = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log("addToCart called", action);
      return [action.data, ...data];
    case "REMOVE_TO_CART":
      data.length = data.length ? data.length - 1 : [];
      return [...data];
    case "EMPTY_TO_CART":
      console.log("Empty called");
      data = [];
      return data;
    default:
      return data;
  }
};
