/* eslint-disable no-param-reassign */
import devicesData from '../constants/devicesData';
import { deviceLinkText, smartphoneLinkText } from '../constants/textContent';
import RangeView from './RangeView';

class Calculator {
  constructor() {
    this.labels = document.querySelectorAll('.input-line__label');
    this.inputs = document.querySelectorAll('.input-line__input');
    this.maxDiscountLabels = document.querySelectorAll('.input-line__range_max');
    this.inputsBar = document.querySelector('.spots-line');
    this.devices = document.querySelectorAll('.device');
    this.contextElements = document.querySelectorAll('.device-context-element');
    this.basePriceHtml = document.querySelector('.price__old-price');
    this.currentPriceHtml = document.querySelector('.price__new-price');
    this.activeDeviceImage = document.querySelector('.calc-grid__image');
    this.activeDeviceName = document.querySelector('.calc-grid__name');
    this.activeDeviceLink = document.querySelector('.calc-grid__link');
    [this.activeDevice] = devicesData;
    this.activeItem = [...this.devices].find((device) => this.activeDevice.id === +device.id);
    this.currentDiscount = this.activeDevice.averageDiscount;
    this.basePrice = this.activeDevice.basePrice;
    this.currentPrice = this.basePrice - this.currentDiscount;

    this.setActiveListItem();
    this.setMaxDiscount();
    this.showDevicePrices();
    this.setLinkHref();
    this.handleInputbar();
    this.setContext();
  }

  setActiveListItem() {
    this.devices.forEach((device) => {
      if (device.classList.contains('active')) {
        device.classList.remove('active');
      } else if (Number(device.id) === this.activeDevice.id) {
        device.classList.add('active');
      }
    });
  }

  setContext() {
    const context = this.activeDevice.eventContext;
    for (let i = 0; i < this.contextElements.length; i += 1) {
      this.contextElements[i].dataset.context = `${context}`;
    }
  }

  removeDisabledInputs() {
    this.inputs.forEach((input) => {
      input.removeAttribute('disabled');
      if (input.classList.contains('in-range')) {
        input.classList.remove('in-range');
      }
    });
  }

  setActiveDevice(item) {
    this.setActiveListItem();
    this.removeDisabledInputs();
    this.activeDevice = devicesData.find((device) => device.id === +item.id);
    this.activeItem = item;
    this.currentDiscount = this.activeDevice.averageDiscount;
    item.classList.add('active');
    this.handleInputbar();
  }

  setLinkHref() {
    this.activeDeviceLink.setAttribute('href', this.activeDevice.link);
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

  showDevicePrices() {
    const { basePrice } = this.activeDevice;
    const basePriceArray = basePrice.toString().split('');
    basePriceArray.splice(-3, 0, ' ');

    const currentPriceArray = (basePrice - this.currentDiscount).toString().split('');
    currentPriceArray.splice(-3, 0, ' ');

    this.basePriceHtml.innerHTML = `${basePriceArray.join('')}&nbsp;₽`;
    this.currentPriceHtml.innerHTML = `${currentPriceArray.join('')}&nbsp;₽`;
  }

  handleInputbar() {
    const { discount } = this.activeItem.dataset;
    this.removeDisabledInputs();
    this.inputs.forEach((input, index) => {
      if (Number(input.id) <= this.currentDiscount) {
        input.checked = true;
        input.classList.add('in-range');
        this.inputsBar.style.backgroundImage = `linear-gradient(to right, #3fcbff ${(100 / 6) * index}%, #d3d9df ${(100 / 6) * index}%)`;
      }
      if (Number(input.id) > Number(discount)) {
        input.disabled = 'true';
      }
    });
  }

  handleDiscountChoice(event) {
    const discount = event.target.htmlFor;
    if (discount <= this.activeDevice.maxDiscount) {
      this.currentDiscount = discount;
      this.showDevicePrices();
      this.inputs.forEach((input, index) => {
        if (input.classList.contains('in-range')) {
          input.classList.remove('in-range');
        }
        if (Number(input.id) <= Number(discount)) {
          input.checked = true;
          input.classList.add('in-range');
          this.inputsBar.style.backgroundImage = `linear-gradient(to right, #3fcbff ${(100 / 6) * index + 1}%, #d3d9df ${(100 / 6) * index + 1}%)`;
        }
      });
    }
  }

  setMaxDiscount() {
    this.removeMaxDiscount();
    this.maxDiscountLabels.forEach((item) => {
      if (Number(item.dataset.maxdiscount) === this.activeDevice.maxDiscount) {
        item.classList.add('active');
      }
    });
  }

  removeMaxDiscount() {
    this.maxDiscountLabels.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    });
  }

  addEventListeners() {
    this.devices.forEach((device) => {
      device.addEventListener('click', () => {
        this.setActiveDevice(device);
        this.setContext();
        this.showDeviceInfo();
        this.setMaxDiscount();
      });
    });

    this.labels.forEach((input) => {
      input.addEventListener('click', (event) => {
        this.handleDiscountChoice(event);
      });
    });
  }
}

// export default Calculator;
