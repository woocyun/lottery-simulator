import template from './prize-item.html';

const PrizeItemComponent = {
  bindings: {
    numberOfPlays: '<',
    prize: '<'
  },
  templateUrl: template,
  controller: class PrizeItemController {
    constructor() {

    }
  }
};

export default PrizeItemComponent;
