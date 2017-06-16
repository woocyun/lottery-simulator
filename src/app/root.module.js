import '../sass/styles.scss';
import angular from 'angular';
import ngRedux from 'ng-redux';
import rootReducer from './root.reducer';
import RootComponent from './root.component';
import SimulatorModule from './simulator/simulator.module';
import createLogger from 'redux-logger';
import { default as DevTools, runDevTools } from './devTools';

const RootModule = angular
  .module('root', [
    ngRedux,
    SimulatorModule.name
  ])
  .component('root', RootComponent);

if (process.env.NODE_ENV === 'development') {
  RootModule
    .config(/*@ngInject*/ ($ngReduxProvider) => {
      $ngReduxProvider.createStoreWith(rootReducer, []);
      $ngReduxProvider.createStoreWith(rootReducer, [ createLogger() ], [ DevTools.instrument() ]);
    })
    .run(runDevTools);
} else {
  RootModule
    .config(/*@ngInject*/ ($ngReduxProvider) => {
      $ngReduxProvider.createStoreWith(rootReducer, []);
    });
}

export default RootModule;
