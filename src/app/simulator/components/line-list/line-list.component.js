import template from './line-list.html';

const LineListComponent = {
  bindings: {
    lines: '<'
  },
  templateUrl: template,
  controller: class LineListController {
    constructor() {

    }
  }
};

export default LineListComponent;
