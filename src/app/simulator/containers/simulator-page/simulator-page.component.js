import template from './simulator-page.html';

import {
  getAllLotteries,
  getCurrentLottery
} from '../../shared/lotteries/lotteries.selectors';
import { selectLottery } from '../../shared/lotteries/lotteries.actions';

import { getAllPicks } from '../../shared/picks/picks.selectors';
import { addPick } from '../../shared/picks/picks.actions';

const SimulatorPageComponent = {
  bindings: {},
  templateUrl: template,
  controller: class SimulatorPageController {
    /* @ngInject */
    constructor($ngRedux, $uibModal, UtilService) {
      this.$ngRedux = $ngRedux;
      this.$uibModal = $uibModal;
      this.UtilService = UtilService;
      this.unsubscribe = $ngRedux.connect(this.mapStateToThis, {})(this);
    }

    $onDestroy() {
      this.unsubscribe();
    }

    mapStateToThis(state) {
      return {
        lotteries: getAllLotteries(state),
        activeLottery: getCurrentLottery(state),
        picks: getAllPicks(state)
      };
    }

    lotterySelected(lottery) {
      this.$ngRedux.dispatch(selectLottery(lottery));
    }

    lineAdded({ commonChoices, specialChoices }) {
      const common = extractNumbersFromChoices(commonChoices);
      const special = extractNumbersFromChoices(specialChoices);

      this.$ngRedux.dispatch(addPick({
        common,
        special,
        id: this.UtilService.generateUUID()
      }));

      function extractNumbersFromChoices(choices) {
        return choices
          .filter(choice => choice.checked)
          .map(choice => choice.number);
      }
    }
  }
};

export default SimulatorPageComponent;
