import template from './lottery-list.html';

const LotteryListComponent = {
  bindings: {
    lotteries: '<',
    activeLottery: '<',
    onLotterySelected: '&'
  },
  templateUrl: template,
  controller: class LotteryListController {
    constructor() {

    }
  }
};

export default LotteryListComponent;
