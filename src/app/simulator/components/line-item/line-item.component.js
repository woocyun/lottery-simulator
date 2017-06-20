import template from './line-item.html';

const LineItemComponent = {
  bindings: {
    line: '<'
  },
  templateUrl: template,
  controller: class LineItemController {
    constructor() {

    }
  }
};

export default LineItemComponent;
