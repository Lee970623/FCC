export function getRandomColor() {
  // 0123401234abcabc dark color
  // 5678956789defdef light color
  // 0123456789abcdef all color
  return (
    "#" +
    (function random(color) {
      return (color += "0123401234abcabc"[Math.floor(Math.random() * 16)]) &&
        color.length === 6
        ? color
        : random(color);
    })("")
  );
}

export function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
