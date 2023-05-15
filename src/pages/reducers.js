import { SHOW_POPUP, HIDE_POPUP } from "./actions";

const initalState = {
  isOpen: false,
  product: null,
};

function popupReducer(state = initalState, action) {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        isOpen: true,
        product: action.payload,
      };
    case HIDE_POPUP:
      return {
        isOpen: false,
        product: null,
      };
    default:
      return state;
  }
}

export { popupReducer };
