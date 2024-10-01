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
    const { defaultDiscount } = this.device;
    console.log(defaultDiscount);
    const [currentDiscountObj] = this.device.discountsArray
      .filter((el) => el.minutes === this.currentDiscount);
    const [defaultDiscountObj] = this.device.discountsArray
      .filter((el) => el.minutes === defaultDiscount);
    console.log(this.device.discountsArray);

    const currentDiscountIndex = this.device.discountsArray.indexOf(currentDiscountObj);

    const { length } = this.device.discountsArray;


    const defaultDiscountIndex = this.device.discountsArray.indexOf(defaultDiscountObj);
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
      ${discountsArray.map((discount) => html`
        <div class="input-line__item">
          <input type="radio"
            name="minutes"
            id="${discount.minutes}"
            class="input-line__input ${discount.minutes <= this.currentDiscount ? 'in-range' : ''}"

            ${discount.minutes === this.currentDiscount ? 'checked=true' : ''}>
          <label for="${discount.minutes}"
            class="input-line__label device-context-element js-gtm-event"
            data-event="switcher"
          >
              ${discount.minutes} мин<br>или ${discount.gb} ГБ
          </label>
          ${defaultDiscount && discount.minutes > defaultDiscount
    ? html`<div class="input-line__popup">С&nbsp;подпиской MiXX скидка больше</div>`
    : ''
}
        </div >
      `)}
  </div>`;
  }
}

export default RangeView;
