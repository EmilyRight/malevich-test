import devicesData from '../constants/devicesData';
import { deviceLinkText, smartphoneLinkText } from '../constants/textContent';
import RangeView from './RangeView';

class Calculator {
  constructor() {
    this.inputBlock = document.querySelector('.calc-grid__input');
    this.devices = document.querySelectorAll('.device');
    this.basePriceHtml = document.querySelector('.price__old-price');
    this.currentPriceHtml = document.querySelector('.price__new-price');
    this.activeDeviceImage = document.querySelector('.calc-grid__image');
    this.activeDeviceName = document.querySelector('.calc-grid__name');
    this.activeDeviceLink = document.querySelector('.calc-grid__link');
    this.contextElements = null;
    this.labels = null;
    this.inputs = null;
    [this.activeDevice] = devicesData;
    this.inputView = new RangeView(this.activeDevice);
    this.activeItem = [...this.devices].find((device) => this.activeDevice.id === +device.id);
    this.currentDiscount = this.activeDevice.averageDiscount;
    this.basePrice = this.activeDevice.basePrice;
    this.currentPrice = this.basePrice - this.currentDiscount;
    this.render();
    this.setActiveListItem();
    this.showDevicePrices();
    this.setLinkHref();
    // this.handleInputbar();
    this.setContext();
  }

  render() {
    this.inputBlock.innerHTML = this.inputView.renderInputLine();
    const inputBg = document.querySelector('.spots-line');
    this.labels = document.querySelectorAll('.input-line__label');
    this.inputs = document.querySelectorAll('.input-line__input');
    this.contextElements = document.querySelectorAll('.device-context-element');
    this.inputView.setInputBar(inputBg);
    this.inputView.addLineGradient();
    this.inputView.inputs = this.inputs;
  }

  removeActiveDevice(device) {
    if (device.classList.contains('active')) {
      device.classList.remove('active');
    }
  }

  setActiveListItem() {
    this.devices.forEach((device) => {
      this.removeActiveDevice(device);
      if (Number(device.id) === this.activeDevice.id) {
        device.classList.add('active');
      }
    });
  }

  showDevicePrices() {
    const { basePrice } = this.activeDevice;
    const basePriceArray = basePrice.toString().split('');
    basePriceArray.splice(-3, 0, ' ');

    const currentPriceArray = (basePrice - this.currentDiscount).toString().split('');
    currentPriceArray.splice(-3, 0, ' ');
    this.basePriceHtml.innerHTML = `${basePriceArray.join('')}&nbsp;₽`;
    this.currentPriceHtml.innerHTML = `${currentPriceArray.join('')}&nbsp;₽`;
  }

  setLinkHref() {
    this.activeDeviceLink.setAttribute('href', this.activeDevice.link);
  }

  setContext() {
    const context = this.activeDevice.eventContext;
    for (let i = 0; i < this.contextElements.length; i += 1) {
      this.contextElements[i].dataset.context = `${context}`;
    }
  }

  /**
 *
 * @param {DeviceObject} item
 */
  setActiveDevice(item) {
    this.activeDevice = devicesData.find((device) => device.id === Number(item.id));
    this.setActiveListItem();
    this.inputView = new RangeView(this.activeDevice);
    this.currentDiscount = this.activeDevice.averageDiscount;
    this.render();
    this.addEventListeners();
  }

  handleDiscountChoice(event) {
    const discount = Number(event.target.htmlFor);
    if (discount <= this.activeDevice.maxDiscount) {
      this.currentDiscount = discount;
      this.inputView.setCurrentDiscount(this.currentDiscount);
      this.inputView.handleColorOnInputBar();
      this.showDevicePrices();
    }
  }

  showDeviceInfo() {
    const {
      name, imageSrc, type,
    } = this.activeDevice;
    this.activeDeviceImage.src = imageSrc;
    this.activeDeviceName.innerHTML = name;

    this.activeDeviceLink.innerHTML = type === 'smartphone'
      ? smartphoneLinkText
      : deviceLinkText;
    this.setLinkHref();
    this.showDevicePrices();
  }

  addEventListeners() {
    this.devices.forEach((device) => {
      device.addEventListener('click', () => {
        this.setActiveDevice(device);
        this.setContext();
        this.showDeviceInfo();
      });
    });

    this.labels.forEach((input) => {
      input.addEventListener('click', (event) => {
        this.handleDiscountChoice(event);
      });
    });
  }
}

export default Calculator;
