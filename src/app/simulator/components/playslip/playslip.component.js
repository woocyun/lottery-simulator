import template from './playslip.html';

const PlayslipComponent = {
  bindings: {
    resolve: '<'
  },
  templateUrl: template,
  controller: class PlayslipController {
    /*@ngInject*/
    constructor(UtilService) {
      this.UtilService = UtilService;
    }

    $onInit() {
      this.activeLottery = this.resolve.activeLottery;

      this.commonNumbers = this.UtilService.getArrayOfConsecutiveNumbers(this.activeLottery.common.qty);
      this.specialNumbers = this.UtilService.getArrayOfConsecutiveNumbers(this.activeLottery.special.qty);
      console.log(this.commonNumbers, this.specialNumbers);
    }
  }
};

export default PlayslipComponent;
