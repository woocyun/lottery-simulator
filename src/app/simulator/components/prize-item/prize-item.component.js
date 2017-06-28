import template from './prize-item.html';

const PrizeItemComponent = {
  bindings: {
    prize: '<'
  },
  templateUrl: template,
  controller: class PrizeItemController {
    constructor() {

    }
  }
};

export default PrizeItemComponent;
