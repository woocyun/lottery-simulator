import template from './lottery-list.html';

const LotteryListComponent = {
  bindings: {
    lotteries: '<',
    active: '<'
  },
  templateUrl: template,
  controller: class LotteryListController {
    constructor() {
      
    }
  }
};

export default LotteryListComponent;
