/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
import { html } from './SafeHtml';

class RangeView {
  /**
   * @param {DeviceObject} deviceObject
   */
  constructor(deviceObject) {
    this.device = deviceObject;
    this.inputs = null;
    this.inputsBar = this.createInputBarBackground();
    this.currentDiscount = this.device.averageDiscount;
    this.renderInputLine();
    this.inputsBg = '';
  }

  /**
   * @param {HTMLDivElement} element
   */
  setInputBar(element) {
    this.inputsBg = element;
  }

  setCurrentDiscount(number) {
    this.currentDiscount = number;
  }

  removeColorFromInput() {
    this.inputs.forEach((input) => {
      if (input.classList.contains('in-range')) {
        input.classList.remove('in-range');
      }
    });
  }

  setColorOnInputs() {
    this.inputs.forEach((input) => {
      if (Number(input.id) <= this.currentDiscount) {
        input.classList.add('in-range');
      }
    });
  }

  createInputBarBackground() {
    return html`
      <div class="calc-grid__bg spots-line"></div>
    `;
  }

  addLineGradient() {
    const currentDiscountIndex = this.device.discountsArray.indexOf(this.currentDiscount);
    const { length } = this.device.discountsArray;
    this.inputsBg.style.backgroundImage = `linear-gradient(to right, #3fcbff ${(100 / (length - 1)) * currentDiscountIndex}%, #d3d9df ${(100 / (length - 1)) * currentDiscountIndex}%)`;
  }

  handleColorOnInputBar() {
    this.removeColorFromInput();
    this.addLineGradient();
    this.setColorOnInputs();
  }

  renderInputLine() {
    const { discountsArray } = this.device;

    return html`
    ${this.inputsBar}
    <div class="calc-grid__line input-line">
      ${discountsArray.map((discount, index) => {
    let discountValue = '';
    if (index === 0) discountValue = 'min';
    if (index === discountsArray.length - 1) discountValue = 'max';
    return html`
        <div class="input-line__item">
          <div class="input-line__range input-line__range_max">${discountValue}</div>
          <input type="radio"
            name="minutes"
            id="${discount}"
            class="input-line__input
            ${discount <= this.currentDiscount ? 'in-range' : ''}"
            ${discount === this.device.averageDiscount ? 'checked=true' : ''}
          >
          <label for="${discount}"
            class="input-line__label device-context-element js-gtm-event"
            data-event="switcher"
          >
              ${discount}
          </label>
        </div>
        `;
  })}
      </div>
      `;
  }
}

export default RangeView;
