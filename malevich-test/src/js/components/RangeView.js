/* eslint-disable no-bitwise */
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
    this.currentDiscount = this.device.type === 'smartphone'
      ? this.device.defaultDiscount
      : this.device.maxDiscount;
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
    const classNames = ['in-range', 'in-range_pink'];
    this.inputs.forEach((input) => {
      classNames.forEach((className) => {
        if (input.classList.contains(className)) {
          input.classList.remove(className);
        }
      });
    });
  }

  setColorOnInputs() {
    this.inputs.forEach((input) => {
      if (this.device.type === 'smartphone') {
        if (Number(input.id) <= this.device.defaultDiscount
        & Number(input.id) <= this.currentDiscount) {
          input.classList.add('in-range');
        } else
        if (Number(input.id) > this.device.defaultDiscount
        & Number(input.id) <= this.currentDiscount) {
          input.classList.add('in-range_pink');
        }
      } else if (Number(input.id) <= this.currentDiscount) {
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
    const { defaultDiscount } = this.device;
    const defaultDiscountIndex = this.device.discountsArray.indexOf(this.device.defaultDiscount);
    const blueGradientPercent = (100 / (length - 1)) * currentDiscountIndex;
    const pinkGradientPercent = (100 / (length - 1)) * defaultDiscountIndex;

    if (defaultDiscount && this.currentDiscount > defaultDiscount) {
      this.inputsBg.style.backgroundImage = `linear-gradient(to right, #3fcbff ${pinkGradientPercent}%, #EF2CA0 ${pinkGradientPercent + 8}%, #EF2CA0 ${blueGradientPercent}%, #d3d9df ${blueGradientPercent}%)`;
    } else {
      this.inputsBg.style.backgroundImage = `linear-gradient(to right, #3fcbff ${blueGradientPercent}%, #d3d9df ${blueGradientPercent}%)`;
    }
  }

  handleColorOnInputBar() {
    this.removeColorFromInput();
    this.addLineGradient();
    this.setColorOnInputs();
  }

  renderInputLine() {
    const { discountsArray, defaultDiscount } = this.device;
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
            ${discount === this.currentDiscount ? 'checked=true' : ''}/>
          <label for="${discount}"
            class="input-line__label device-context-element js-gtm-event"
            data-event="switcher"
          >
              ${discount}
          </label>
          ${defaultDiscount && discount > defaultDiscount
    ? html`<div class="input-line__popup">С&nbsp;подпиской MiXX скидка больше</div>`
    : ''
}
        </div >
      `;
  })}
  </div>`;
  }
}

export default RangeView;
