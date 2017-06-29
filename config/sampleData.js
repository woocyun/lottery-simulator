import UtilService from '../src/app/simulator/shared/utilities/util';
const generateUUID = new UtilService().generateUUID;

import {
  addLottery,
  selectLottery
} from '../src/app/simulator/shared/lotteries/lotteries.actions';

import { addPick } from '../src/app/simulator/shared/picks/picks.actions';

export /*@ngInject*/ function createSampleData($ngRedux) {
  const megaMillions = JSON.parse(`
    {
      "common": {
        "picks": 5,
        "qty": 75
      },
      "name": "Mega Millions",
      "prizes": [
        {
          "common": 0,
          "prize": 1,
          "special": 1,
          "chances": 21
        },
        {
          "common": 1,
          "prize": 2,
          "special": 1,
          "chances": 56
        },
        {
          "common": 2,
          "prize": 5,
          "special": 1,
          "chances": 473
        },
        {
          "common": 3,
          "prize": 5,
          "special": 0,
          "chances": 766
        },
        {
          "common": 3,
          "prize": 50,
          "special": 1,
          "chances": 10720
        },
        {
          "common": 4,
          "prize": 500,
          "special": 0,
          "chances": 52835
        },
        {
          "common": 4,
          "prize": 5000,
          "special": 1,
          "chances": 739688
        },
        {
          "common": 5,
          "prize": 1000000,
          "special": 0,
          "chances": 18492204
        },
        {
          "common": 5,
          "prize": 100000000,
          "special": 1,
          "chances": 258890850
        }
      ],
      "special": {
        "picks": 1,
        "qty": 15,
        "alias": "MegaBall"
      },
      "jackpot": 101000000
    }
  `);

  const powerBall = JSON.parse(`
    {
      "common": {
        "picks": 5,
        "qty": 69
      },
      "name": "Powerball",
      "prizes": [
        {
          "common": 0,
          "prize": 4,
          "special": 1,
          "chances": 38
        },
        {
          "common": 1,
          "prize": 4,
          "special": 1,
          "chances": 92
        },
        {
          "common": 2,
          "prize": 7,
          "special": 1,
          "chances": 701
        },
        {
          "common": 3,
          "prize": 7,
          "special": 0,
          "chances": 580
        },
        {
          "common": 3,
          "prize": 100,
          "special": 1,
          "chances": 14494
        },
        {
          "common": 4,
          "prize": 100,
          "special": 0,
          "chances": 36525
        },
        {
          "common": 4,
          "prize": 50000,
          "special": 1,
          "chances": 913129
        },
        {
          "common": 5,
          "prize": 1000000,
          "special": 0,
          "chances": 11688054
        },
        {
          "common": 5,
          "prize": 60000000,
          "special": 1,
          "chances": 292201338
        }
      ],
      "special": {
        "picks": 1,
        "qty": 26,
        "alias": "PowerBall"
      },
      "jackpot": 40000000
    }
  `);

  const lotteries = [
    megaMillions,
    powerBall
  ];

  const picks = [{
    common: [1, 2, 3, 4, 5],
    special: [1],
    id: generateUUID()
  }];

  [
    ...lotteries.map((lottery) => addLottery(lottery)),
    selectLottery(megaMillions),
    ...picks.map((pick) => addPick(pick)),
  ].map((a) => $ngRedux.dispatch(a));
}
