const fontWeight = {
  thin: "100",
  light: "300",
  regular: "400",
  medium: "500",
  bold: "700",
  black: "900",
};
const colors = {
  main_backgroundColor: "white",
  sidebar_backgroundColor: "#222132",
  description_fontColor: "black",
  title_fonyColor: "#c1c0ce",
  accent_fonyColor: "#b300ff",
  lineColor: "#dbdbdb",
  airbnbPink: "#ff385c",
  airbnbHotPink: "#d4225a",
  buttonHoveredColor: "#f5f5f5",
  inputBorderLineColor: "#919191",
};

const device = {
  mobileS: `only screen and (max-width: 290px)`,
  mobile: `only screen and (max-width: 450px)`,
  tablet: `only screen and (max-width: 768px)`,
  tabletL: `only screen and (max-width: 1024px)`,
};
const stlyeSet = {
  border: "0.01rem solid #484752",
  boxShadow_light:
    "0 0px 10px rgba(0, 0, 0, 0.12), 0 0px 0px rgba(0, 0, 0, 0.14)",
  boxShadow_bold:
    "0 1px 5px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.24)",
  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
};
const theme = {
  fontWeight,
  colors,
  device,
  stlyeSet,
};

export default theme;
