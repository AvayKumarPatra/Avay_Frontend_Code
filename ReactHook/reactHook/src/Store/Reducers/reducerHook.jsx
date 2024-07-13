import UseStateHook from "../../Hook/UseStateHook";

export const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, <UseStateHook></UseStateHook>];
      break;
    case "Remove":
      return [...state.slice(0, -1)];
      break;
  }
};
