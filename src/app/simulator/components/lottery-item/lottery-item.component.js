import template from './lottery-item.html';

const LotteryItemComponent = {
  bindings: {
    lottery: '<',
    activeLottery: '<',
    onLotterySelected: '&'
  },
  templateUrl: template,
  controller: class LotteryItemController {
    constructor() {

    }
  }
};

export default LotteryItemComponent;
