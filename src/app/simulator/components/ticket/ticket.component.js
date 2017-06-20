import template from './ticket.html';

const TicketComponent = {
  bindings: {
    activeLottery: '<',
    onLineAdd: '&'
  },
  templateUrl: template,
  controller: class TicketController {
    /*@ngInject*/
    constructor(UtilService) {
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
  }
};

export default TicketComponent;
