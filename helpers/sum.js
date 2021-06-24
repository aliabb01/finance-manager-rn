export default sum = (items, prop) => {
    return items.reduce((a, b) => {
      return a + b[prop];
    }, 0);
}