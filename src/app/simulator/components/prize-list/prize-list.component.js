import template from './prize-list.html';

const PrizeListComponent = {
  bindings: {
    prizes: '<'
  },
  templateUrl: template,
  controller: class PrizeListController {
    constructor() {

    }

    $onChanges(changes) {
      if (changes.prizes && changes.prizes.currentValue) {
        this.prizes = angular.copy(this.prizes, []);

        this.prizes = this.prizes.map(prize => {
          return Object.assign(prize, {
            stop: false,
            won: 0
          });
        });
      }
    }
  }
};

export default PrizeListComponent;
