import template from './results.html';

const ResultsComponent = {
  bindings: {
    numberOfPlays: '<',
    prizes: '<',
    pricePerPlay: '<',
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
