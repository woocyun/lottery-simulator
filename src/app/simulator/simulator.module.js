import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SimulatorPageComponent from './containers/simulator-page/simulator-page.component';
import LotteryListComponent from './components/lottery-list/lottery-list.component';
import LotteryItemComponent from './components/lottery-item/lottery-item.component';

const SimulatorModule = angular
  .module('components.simulator', [
    uiRouter
  ])
  .config(/*@ngInject*/ ($stateProvider) => {
    $stateProvider
      .state('simulator', {
        url: '',
        component: 'simulatorPage'
      });
  })
  .component('simulatorPage', SimulatorPageComponent)
  .component('lotteryList', LotteryListComponent)
  .component('lotteryItem', LotteryItemComponent);

export default SimulatorModule;
