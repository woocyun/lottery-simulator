import template from './simulator-page.html';
import {
  getAllLotteries,
  getCurrentLottery
} from '../../shared/lotteries/lotteries.selectors';
import { selectLottery } from '../../shared/lotteries/lotteries.actions';

const SimulatorPageComponent = {
  bindings: {},
  templateUrl: template,
  controller: class SimulatorPageController {
    /* @ngInject */
    constructor($ngRedux, $uibModal) {
      this.$ngRedux = $ngRedux;
      this.$uibModal = $uibModal;
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

    lotterySelected(lottery) {
      this.$ngRedux.dispatch(selectLottery(lottery));
    }

    openPlayslip() {
      this.$uibModal
        .open({
          component: 'playslip',
          resolve: { activeLottery: this.activeLottery }
        });
    }
  }
};

export default SimulatorPageComponent;
