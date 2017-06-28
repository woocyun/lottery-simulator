import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import UtilService from './shared/utilities/util';
import PrependZeroFilter from './shared/utilities/prependZero';

import SimulatorPageComponent from './containers/simulator-page/simulator-page.component';
import LotteryHeaderComponent from './components/lottery-header/lottery-header.component';
import LotteryListComponent from './components/lottery-list/lottery-list.component';
import LotteryItemComponent from './components/lottery-item/lottery-item.component';
import TicketComponent from './components/ticket/ticket.component';
import LineListComponent from './components/line-list/line-list.component';
import LineItemComponent from './components/line-item/line-item.component';
import ToggleableLineFormComponent from './components/toggleable-line-form/toggleable-line-form.component';
import LineFormComponent from './components/line-form/line-form.component';
import ControlsComponent from './components/controls/controls.component';
import ResultsComponent from './components/results/results.component';
import PrizeListComponent from './components/prize-list/prize-list.component';
import PrizeItemComponent from './components/prize-item/prize-item.component';

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
  .filter('prependZero', PrependZeroFilter)
  .component('simulatorPage', SimulatorPageComponent)
  .component('lotteryHeader', LotteryHeaderComponent)
  .component('lotteryList', LotteryListComponent)
  .component('lotteryItem', LotteryItemComponent)
  .component('toggleableLineForm', ToggleableLineFormComponent)
  .component('lineForm', LineFormComponent)
  .component('ticket', TicketComponent)
  .component('lineList', LineListComponent)
  .component('lineItem', LineItemComponent)
  .component('controls', ControlsComponent)
  .component('results', ResultsComponent)
  .component('prizeList', PrizeListComponent)
  .component('prizeItem', PrizeItemComponent);

export default SimulatorModule;
