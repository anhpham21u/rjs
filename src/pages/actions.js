const SHOW_POPUP = "show_popup";
const HIDE_POPUP = "hide_popup";

const showPopup = (product) => ({
  type: SHOW_POPUP,
  payload: product,
});

const hidePopup = () => ({
  type: HIDE_POPUP,
});

export { SHOW_POPUP, HIDE_POPUP, showPopup, hidePopup };
