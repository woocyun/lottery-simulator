import template from './controls.html';

const ControlsComponent = {
  bindings: {
    onSimulatorRun: '&',
    onSimulatorStart: '&',
    onSimulatorStop: '&',
    running: '<',
  },
  templateUrl: template,
  controller: class ControlsController {
    constructor() {

    }

    $onInit() {
      this.speed = 'max';
    }

    startSimulator() {
      let interval;

      switch (this.speed) {
        case 'max':
          interval = 1;
          break;
        case 'fast':
          interval = 100;
          break;
        case 'slow':
          interval = 1000;
          break;
      }

      this.onSimulatorStart({
        $event: interval
      })
    }
  }
};

export default ControlsComponent;
