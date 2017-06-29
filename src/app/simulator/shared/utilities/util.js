class UtilService {
  constructor() {

  }

  getArrayOfConsecutiveNumbers(n) {
    return [...Array(n).keys()].map(num => num + 1);
  }

  // uuid from todomvc
  generateUUID() {
    /*jshint bitwise:false */
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
        .toString(16);
    }

    return uuid;
  }

  draw(picks, pool) {
    const drawn = [];
    pool = pool.slice();

    let i = pool.length;
    const stop = i - picks;

    while (i > stop) {
      drawn.push(pool.splice(Math.floor(Math.random() * i), 1)[0]);
      i--;
    }

    return drawn.sort();
  }
}

export default UtilService;
