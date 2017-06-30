import template from './prize-item.html';

const PrizeItemComponent = {
  bindings: {
    numberOfDraws: '<',
    prize: '<'
  },
  templateUrl: template,
  controller: class PrizeItemController {
    constructor() {

    }
  }
};

export default PrizeItemComponent;
