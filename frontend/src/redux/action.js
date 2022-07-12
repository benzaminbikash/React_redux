export const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: "ADD_TO_CART",
    data: data,
  };
};
export const removeToCart = () => {
  console.log("action remove called");
  return {
    type: "REMOVE_TO_CART",
    data: "item1",
  };
};
export const emptyToCart = () => {
  console.log("emptyToCart called");
  return {
    type: "EMPTY_TO_CART",
    data: "delete item",
  };
};
