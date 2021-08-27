let timerId;
export default function debounce(func, delay) {
  clearTimeout(timerId);
  timerId = setTimeout(func, delay);
}
