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

    lineAdded(picks) {
      const commonPicks = extractNumbersFromChoices(picks.commonChoices);
      const specialPicks = extractNumbersFromChoices(picks.specialChoices);

      console.log(commonPicks, specialPicks);

      function extractNumbersFromChoices(choices) {
        return choices
          .filter(choice => choice.checked)
          .map(choice => choice.number);
      }
    }
  }
};

export default SimulatorPageComponent;
