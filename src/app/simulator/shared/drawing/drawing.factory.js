/*@ngInject*/
function Drawing (UtilService) {
  return {
    init(lottery) {
      angular.extend(this, {
        lottery
      });

      return this;
    },
    draw() {
      this.commonDrawn = UtilService.draw(this.lottery.common.picks, this.lottery.common.qty);
      this.specialDrawn = UtilService.draw(this.lottery.special.picks, this.lottery.special.qty);
    }
  };
};

export default Drawing;
