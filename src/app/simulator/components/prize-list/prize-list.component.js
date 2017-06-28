import template from './prize-list.html';

const PrizeListComponent = {
  bindings: {
    prizes: '<'
  },
  templateUrl: template,
  controller: class PrizeListController {
    constructor() {

    }

    $onInit() {
    
    }
  }
};

export default PrizeListComponent;
