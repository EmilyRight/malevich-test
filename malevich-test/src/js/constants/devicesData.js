// const capsImg = require('../../img/page/caps-left.png');
// const winkImg = require('../../img/page/wink-left.png');
// const smartphone30Img = require('../../img/page/smartphone-left.png');
// const smartphone30iImg = require('../../img/page/smartphone30i-left.png');

const capsImg = require('../../img/page/3-left.png');
const winkImg = require('../../img/page/4-left.png');
const smartphone1 = require('../../img/page/1-left.png');
const smartphone2 = require('../../img/page/2-left.png');

const smartphonesLink = 'https://msk.tele2.ru/shop/devices/smartphones?promoCampaign=1400013+1400014+1400015+1400011+1400012+1400003+1400005+1400006+1400007+2000002+1400008+2500002&sortingType=pop&pageParams=page1';
const devicesLink = 'https://msk.tele2.ru/shop/devices/gadgets?promoCampaign=1400013+1400014+1400015+1400011+1400012+1400003+1400005+1400006+1400007+2000002+1400008+2500002&sortingType=pop&pageParams=page1';

const devicesData = [
  {
    id: 1,
    type: 'smartphone',
    name: 'Xiaomi Redmi Note 12S 8/256Gb',
    imageSrc: smartphone1,
    discountsArray: [
      {
        id: 1,
        minutes: 500,
        gb: 30,
      },
      {
        id: 2,
        minutes: 1000,
        gb: 60,
      },
      {
        id: 3,
        minutes: 1500,
        gb: 90,
      },
      {
        id: 4,
        minutes: 2000,
        gb: 120,
      },
      {
        id: 5,
        minutes: 3000,
        gb: 180,
      }],
    maxDiscount: 3000,
    defaultDiscount: 1500,
    basePrice: 21990,
    eventContext: 'note',
    link: smartphonesLink,
  },
  {
    id: 2,
    type: 'smartphone',
    name: 'Xiaomi Redmi 12 4/128Gb',
    imageSrc: smartphone2,
    discountsArray: [
      {
        minutes: 500,
        gb: 30,
      },
      {
        minutes: 1000,
        gb: 60,
      },
      {
        minutes: 1500,
        gb: 90,
      },
      {
        minutes: 2000,
        gb: 120,
      },
    ],
    maxDiscount: 2000,
    defaultDiscount: 1500,
    basePrice: 12990,
    eventContext: 'redmi',
    link: smartphonesLink,
  },

  {
    id: 3,
    type: 'device',
    name: 'VK&nbsp;Капсула мини с&nbsp;Марусей',
    imageSrc: capsImg,
    discountsArray: [
      {
        minutes: 500,
        gb: 30,
      },
      {
        minutes: 750,
        gb: 45,
      },
      {
        minutes: 1000,
        gb: 60,
      }],

    maxDiscount: 1000,
    basePrice: 7990,
    eventContext: 'capsule',
    link: devicesLink,
  },

  {
    id: 4,
    type: 'device',
    name: 'TV-приставка Wink+',
    imageSrc: winkImg,
    discountsArray: [
      {
        minutes: 500,
        gb: 30,
      },
      {
        minutes: 750,
        gb: 45,
      },
      {
        minutes: 1000,
        gb: 60,
      },
      {
        minutes: 1500,
        gb: 60,
      },
      {
        minutes: 2000,
        gb: 60,
      }],
    maxDiscount: 2000,
    basePrice: 5900,
    eventContext: 'wink',
    link: devicesLink,
  },

];

export default devicesData;
