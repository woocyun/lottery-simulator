export default function () {
  return (num) => {
    const numString = num + '';

    if (numString.length > 1) {
      return numString;
    } else {
      return '0' + numString;
    }
  }
}
