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

    $onInit() {
      this.numberOfDraws = 0;
      this.generatePools();
    }

    mapStateToThis(state) {
      return {
        lotteries: getAllLotteries(state),
        activeLottery: getCurrentLottery(state),
        picks: getAllPicks(state)
      };
    }

    generatePools() {
      this.commonPool = this.UtilService.getArrayOfConsecutiveNumbers(this.activeLottery.common.qty);
      this.specialPool = this.UtilService.getArrayOfConsecutiveNumbers(this.activeLottery.special.qty);
    }

    incrementNumberOfDraws() {
      this.numberOfDraws++;
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

    simulatorRun() {
      this.drawing = {
        common: this.UtilService
          .draw(this.activeLottery.common.picks, this.commonPool)
          .sort(numberSort),
        special: this.UtilService
          .draw(this.activeLottery.special.picks, this.specialPool)
          .sort(numberSort)
      };

      this.matches = this.picks.map(pick => {
        return {
          common: this.UtilService.findNumberOfMatches(this.drawing.common, pick.common),
          special: this.UtilService.findNumberOfMatches(this.drawing.special, pick.special)
        };
      });

      this.incrementNumberOfDraws();

      function numberSort(a, b) {
        return a - b;
      }
    }
  }
};

export default SimulatorPageComponent;
