import template from './results.html';

const ResultsComponent = {
  bindings: {
    numberOfDraws: '<',
    prizes: '<',
    matches: '<'
  },
  templateUrl: template,
  controller: class ResultsController {
    /*@ngInject*/
    constructor() {

    }

    $onChanges(changes) {
      if (changes.matches && Array.isArray(this.matches)) {
        this.matches.forEach(match => {
          const prizeWon = this.prizes.find(prize => match.common === prize.common && match.special === prize.special);
          console.log(prizeWon);
        });
      }
    }

    $onInit() {

    }
  }
};

export default ResultsComponent;
