import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import UtilService from './shared/utilities/util.js';
import SimulatorPageComponent from './containers/simulator-page/simulator-page.component';
import LotteryHeaderComponent from './components/lottery-header/lottery-header.component';
import LotteryListComponent from './components/lottery-list/lottery-list.component';
import LotteryItemComponent from './components/lottery-item/lottery-item.component';
import TicketComponent from './components/ticket/ticket.component';
import ToggleableLineFormComponent from './components/toggleable-line-form/toggleable-line-form.component';
import LineFormComponent from './components/line-form/line-form.component';

const SimulatorModule = angular
  .module('components.simulator', [
    uiRouter,
    uiBootstrap
  ])
  .config(/*@ngInject*/ ($stateProvider) => {
    $stateProvider
      .state('simulator', {
        url: '',
        component: 'simulatorPage'
      });
  })
  .service('UtilService', UtilService)
  .component('simulatorPage', SimulatorPageComponent)
  .component('lotteryHeader', LotteryHeaderComponent)
  .component('lotteryList', LotteryListComponent)
  .component('lotteryItem', LotteryItemComponent)
  .component('toggleableLineForm', ToggleableLineFormComponent)
  .component('lineForm', LineFormComponent)
  .component('ticket', TicketComponent);

export default SimulatorModule;
