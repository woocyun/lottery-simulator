import template from './playslip.html';

const PlayslipComponent = {
  bindings: {
    resolve: '<'
  },
  templateUrl: template,
  controller: class PlayslipController {
    /*@ngInject*/
    constructor() {

    }

    $onInit() {
      this.activeLottery = this.resolve.activeLottery;
    }
  }
};

export default PlayslipComponent;
