import template from './lottery-header.html';

const LotteryHeaderComponent = {
  bindings: {
    activeLottery: '<'
  },
  templateUrl: template,
  controller: class LotteryHeaderController {
    constructor() {
    }
  }
};

export default LotteryHeaderComponent;
