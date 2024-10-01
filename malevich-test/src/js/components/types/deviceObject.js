/**
 * @typedef DeviceDiscounts
 * @prop {number} id
 * @prop {string} minutes
 * @prop {number} gb
 */

/**
 * @typedef DeviceObject
 * @prop {number} id
 * @prop {string} type
 * @prop {string} name
 * @prop {string} imageSrc
 * @prop {DeviceDiscounts[]} discountsArray
 * @prop {number} maxDiscount
 * @prop {number} [defaultDiscount]
 * @prop {number} basePrice
 * @prop {string} eventContext
 * @prop {string} link
 */
