import template from './results.html';

const ResultsComponent = {
  bindings: {
    numberOfDraws: '<',
    prizes: '<'
  },
  templateUrl: template,
  controller: class ResultsController {
    /*@ngInject*/
    constructor() {

    }

    $onChanges() {

    }

    $onInit() {

    }
  }
};

export default ResultsComponent;
