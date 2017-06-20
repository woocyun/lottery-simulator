import template from './line-form.html';

const LineFormComponent = {
  bindings: {
    activeLottery: '<',
    commonChoices: '<',
    specialChoices: '<',
    onFormClose: '&',
    onFormOpen: '&',
    onLineAdd: '&'
  },
  templateUrl: template,
  controller: class LineFormController {
    /*@ngInject*/
    constructor($window) {
      this.$window = $window;
    }

    $onInit() {
      this.commonChoices = angular.copy(this.commonChoices, []);
      this.specialChoices = angular.copy(this.specialChoices, []);
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
    }
  }
};

export default LineFormComponent;
