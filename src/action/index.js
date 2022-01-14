// export const incNumber = () => {
//   type: "INCREMENT";
// };
// export const decNumber = () => {
//   type: "DECREMENT";
// };

export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
//payload can be named anything
export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};
