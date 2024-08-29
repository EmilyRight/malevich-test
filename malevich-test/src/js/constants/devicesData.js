// const capsImg = require('../../img/page/caps-left.png');
// const winkImg = require('../../img/page/wink-left.png');
// const smartphone30Img = require('../../img/page/smartphone-left.png');
// const smartphone30iImg = require('../../img/page/smartphone30i-left.png');

const capsImg = require('../../img/page/3-left.png');
const winkImg = require('../../img/page/4-left.png');
const smartphoneRedmi = require('../../img/page/xiaomi-left.png');
const smartphoneInfinix = require('../../img/page/infinix-left.png');

const smartphonesLink = 'https://msk.tele2.ru/shop/devices/smartphones?promoCampaign=1400013+1400014+1400015+1400011+1400012+1400003+1400005+1400006+1400007+2000002+1400008+2500002&sortingType=pop&pageParams=page1';
const devicesLink = 'https://msk.tele2.ru/shop/devices/gadgets?promoCampaign=1400013+1400014+1400015+1400011+1400012+1400003+1400005+1400006+1400007+2000002+1400008+2500002&sortingType=pop&pageParams=page1';

const devicesData = [
  {
    id: 1,
    type: 'smartphone',
    name: 'Infinix NOTE 30 Pro 8/256Gb',
    imageSrc: smartphoneInfinix,
    discountsArray: [500, 1000, 1500, 2000, 3000, 4000],
    maxDiscount: 4000,
    defaultDiscount: 3000,
    basePrice: 21990,
    eventContext: 'note',
    link: smartphonesLink,
  },
  {
    id: 2,
    type: 'smartphone',
    name: 'Xiaomi Redmi Note 13 8/256Gb',
    imageSrc: smartphoneRedmi,
    discountsArray: [500, 1000, 1500, 2000],
    maxDiscount: 2000,
    defaultDiscount: 2000,
    basePrice: 20990,
    eventContext: 'redmi',
    link: smartphonesLink,
  },

  {
    id: 3,
    type: 'device',
    name: 'VK&nbsp;Капсула мини с&nbsp;Марусей',
    imageSrc: capsImg,
    discountsArray: [0, 1000],
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
    discountsArray: [500, 750, 1000, 1500, 2000],
    maxDiscount: 2000,
    basePrice: 5900,
    eventContext: 'wink',
    link: devicesLink,
  },

];

export default devicesData;
