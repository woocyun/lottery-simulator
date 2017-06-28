import template from './results.html';

const ResultsComponent = {
  bindings: {
    prizes: '<'
  },
  templateUrl: template,
  controller: class ResultsController {
    /*@ngInject*/
    constructor() {

    }

    $onInit() {
      console.log(this.prizes);
    }
  }
};

export default ResultsComponent;
