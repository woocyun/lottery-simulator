import template from './line-form.html';

const LineFormComponent = {
  bindings: {
    activeLottery: '<',
    onFormClose: '&',
    onFormOpen: '&',
    onLineAdd: '&'
  },
  templateUrl: template,
  controller: class LineFormController {
    /*@ngInject*/
    constructor($window, UtilService) {
      this.$window = $window;
      this.UtilService = UtilService;
    }

    $onInit() {
      this.commonChoices = this.UtilService
        .getArrayOfConsecutiveNumbers(this.activeLottery.common.qty)
        .map(mapNumberToChoice);

      this.specialChoices = this.UtilService
        .getArrayOfConsecutiveNumbers(this.activeLottery.special.qty)
        .map(mapNumberToChoice);

      function mapNumberToChoice(n) {
        return {
          checked: false,
          number: n
        };
      }
    }

    countCheckedCommon() {
      return this.commonChoices.filter(choice => choice.checked).length;
    }

    countCheckedSpecial() {
      return this.specialChoices.filter(choice => choice.checked).length;
    }

    addLine() {
      if (this.countCheckedCommon() !== this.activeLottery.common.picks) {
        this.$window.alert(`Please choose ${ this.activeLottery.common.picks } numbers!`);
        return;
      }

      if (this.countCheckedSpecial() !== this.activeLottery.special.picks) {
        this.$window.alert(`Please choose ${ this.activeLottery.special.picks } ${ this.activeLottery.special.alias } ${ this.activeLottery.special.picks > 1 ? 'numbers' : 'number'}!`);
        return;
      }

      this.onLineAdd({
        $event: {
          commonChoices: this.commonChoices,
          specialChoices: this.specialChoices
        }
      });

      this.onFormClose();
    }
  }
};

export default LineFormComponent;
