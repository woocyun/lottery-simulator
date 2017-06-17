import template from './simulator-page.html';
import {
  getAllLotteries,
  getCurrentLottery
} from '../../shared/lotteries/lotteries.selectors';

const SimulatorPageComponent = {
  bindings: {},
  templateUrl: template,
  controller: class SimulatorPageController {
    /* @ngInject */
    constructor($ngRedux) {
      this.$ngRedux = $ngRedux;
      this.unsubscribe = $ngRedux.connect(this.mapStateToThis, {})(this);
    }

    $onDestroy() {
      this.unsubscribe();
    }

    mapStateToThis(state) {
      return {
        lotteries: getAllLotteries(state),
        activeLottery: getCurrentLottery(state)
      };
    }
  }
};

export default SimulatorPageComponent;
