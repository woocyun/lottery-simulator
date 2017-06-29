import template from './ticket.html';

const TicketComponent = {
  bindings: {
    activeLottery: '<',
    onLineAdd: '&',
    picks: '<'
  },
  templateUrl: template,
  controller: class TicketController {
    /*@ngInject*/
    constructor() {
    }

    $onInit() {
      
    }
  }
};

export default TicketComponent;
