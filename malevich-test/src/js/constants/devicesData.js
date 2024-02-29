// const capsImg = require('../../img/page/caps-left.png');
// const winkImg = require('../../img/page/wink-left.png');
// const smartphone30Img = require('../../img/page/smartphone-left.png');
// const smartphone30iImg = require('../../img/page/smartphone30i-left.png');

const capsImg = require('../../img/page/3-left.png');
const winkImg = require('../../img/page/4-left.png');
const smartphoneRedmi = require('../../img/page/2-left.png');
const smartphoneNote = require('../../img/page/1-left.png');

const devicesData = [
  {
    id: 1,
    type: 'smartphone',
    name: 'Xiaomi Redmi Note 12S 8/256Gb',
    imageSrc: smartphoneRedmi,
    discountsArray: [500, 1000, 1500, 2000],
    maxDiscount: 2000,
    defaultDiscount: 1000,
    basePrice: 20990,
    eventContext: 'redmi',
    link: 'https://tele2.ru/shop/devices/smartphones?sortingType=pop&pageParams=page1&promo=spec9300004',
  },

  {
    id: 2,
    type: 'device',
    name: 'VK&nbsp;Капсула мини с&nbsp;Марусей',
    imageSrc: capsImg,
    discountsArray: [500, 1000],
    maxDiscount: 1000,
    basePrice: 6900,
    eventContext: 'capsule',
    link: 'https://tele2.ru/shop/devices/gadgets?sortingType=pop',
  },

  {
    id: 3,
    type: 'device',
    name: 'TV-приставка Wink+',
    imageSrc: winkImg,
    discountsArray: [500, 1000, 2000],
    maxDiscount: 2000,
    basePrice: 5900,
    eventContext: 'wink',
    link: 'https://tele2.ru/shop/devices/gadgets?sortingType=pop',
  },

  {
    id: 4,
    type: 'smartphone',
    name: 'Infinix NOTE 30 Pro 8/256GB',
    imageSrc: smartphoneNote,
    discountsArray: [500, 1000, 1500, 2000, 3000, 4000, 5000],
    maxDiscount: 5000,
    defaultDiscount: 1500,
    basePrice: 20990,
    eventContext: 'note',
    link: 'https://tele2.ru/shop/devices/smartphones?sortingType=pop&pageParams=page1&promo=spec9300004',
  },
];

export default devicesData;
