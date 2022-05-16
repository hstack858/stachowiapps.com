const convertPixelsToRem = (px: number) =>
  px /
  parseFloat(
    getComputedStyle(document.documentElement).fontSize.replace("px", "")
  );
export default convertPixelsToRem;
