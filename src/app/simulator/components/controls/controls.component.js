import template from './controls.html';

const ControlsComponent = {
  bindings: {
    onSimulatorRun: '&'
  },
  templateUrl: template,
  controller: class ControlsController {
    constructor() {

    }

    $onInit() {

    }
  }
};

export default ControlsComponent;
