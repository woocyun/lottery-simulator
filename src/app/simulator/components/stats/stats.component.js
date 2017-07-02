import template from './stats.html';

const StatsComponent = {
  bindings: {
    numberOfPlays: '<',
    pricePerPlay: '<',
    prizes: '<'
  },
  templateUrl: template,
  controller: class StatsController {
    /*@ngInject*/
    constructor() {

    }

    $onChanges() {

    }

    $onInit() {

    }

    calculateMoneySpent() {
      return this.pricePerPlay * this.numberOfPlays;
    }

    calculateMoneyWon() {
      return this.prizes
        .map(prize => prize.won * prize.prize)
        .reduce((prev, acc) => prev + acc, 0);
    }

    calculateReturn() {
      return this.numberOfPlays ? (this.calculateMoneyWon() / this.numberOfPlays) : 0;
    }
  }
};

export default StatsComponent;
