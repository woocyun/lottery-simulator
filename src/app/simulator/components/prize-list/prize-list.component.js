import template from './prize-list.html';

const PrizeListComponent = {
  bindings: {
    numberOfPlays: '<',
    prizes: '<'
  },
  templateUrl: template,
  controller: class PrizeListController {
    constructor() {

    }

    $onChanges(changes) {

    }
  }
};

export default PrizeListComponent;
