import template from './lottery-list.html';

const LotteryListComponent = {
  bindings: {
    lotteries: '<',
    activeLottery: '<'
  },
  templateUrl: template,
  controller: class LotteryListController {
    constructor() {

    }
  }
};

export default LotteryListComponent;
