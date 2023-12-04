const capsImg = require('../../img/page/caps-left.png');
const winkImg = require('../../img/page/wink-left.png');
const smartphone30Img = require('../../img/page/smartphone-left.png');
const smartphone30iImg = require('../../img/page/smartphone30i-left.png');

const devicesData = [
  {
    id: 1,
    type: 'smartphone',
    name: 'Infinix NOTE 30 8/256Gb Interstellar Blue',
    imageSrc: smartphone30Img,
    discountsArray: [500, 1000, 1500, 2000, 3000, 4000],
    maxDiscount: 4000,
    defaultDiscount: 2000,
    basePrice: 16990,
    eventContext: 'hot',
    link: 'https://tele2.ru/shop/devices/smartphones?sortingType=pop&pageParams=page1&promo=spec9300004',
  },

  {
    id: 2,
    type: 'device',
    name: 'VK&nbsp;Капсула мини с&nbsp;Марусей',
    imageSrc: capsImg,
    discountsArray: [500, 1000],
    maxDiscount: 1000,
    basePrice: 7990,
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
    basePrice: 6490,
    eventContext: 'wink',
    link: 'https://tele2.ru/shop/devices/gadgets?sortingType=pop',
  },

  {
    id: 5,
    type: 'smartphone',
    name: 'Infinix NOTE 30i 8/256',
    imageSrc: smartphone30iImg,
    discountsArray: [500, 1000, 1500, 2000, 3000],
    maxDiscount: 3000,
    defaultDiscount: 2000,
    basePrice: 15990,
    eventContext: 'note',
    link: 'https://tele2.ru/shop/devices/smartphones?sortingType=pop&pageParams=page1&promo=spec9300004',
  },
];

export default devicesData;
