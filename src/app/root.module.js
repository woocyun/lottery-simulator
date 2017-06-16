import '../sass/styles.scss';
import angular from 'angular';
import ngRedux from 'ng-redux';
import rootReducer from './root.reducer';
import RootComponent from './root.component';
import SimulatorModule from './simulator/simulator.module';

const RootModule = angular
  .module('root', [
    ngRedux,
    SimulatorModule.name
  ])
  .component('root', RootComponent);

  RootModule
    .config(/*@ngInject*/ ($ngReduxProvider) => {
      $ngReduxProvider.createStoreWith(rootReducer, []);
    });

export default RootModule;
