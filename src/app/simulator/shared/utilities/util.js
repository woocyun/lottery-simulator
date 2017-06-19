class UtilService {
  constructor() {

  }

  getArrayOfConsecutiveNumbers(n) {
    return [...Array(n).keys()].map(num => num + 1);
  }
}

export default UtilService;
