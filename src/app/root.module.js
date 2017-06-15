import '../sass/styles.scss';
import angular from 'angular';
import RootComponent from './root.component';
import SimulatorModule from './simulator/simulator.module';

const RootModule = angular
  .module('root', [
    SimulatorModule.name
  ])
  .component('root', RootComponent);

export default RootModule;
