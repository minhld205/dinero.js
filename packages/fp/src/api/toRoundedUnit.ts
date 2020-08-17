import { toRoundedUnit } from '@dinero.js/core';
import { multiply, divide, power, halfEven } from '@dinero.js/core/calculator';

/**
 * Get the amount of a functional Dinero object in rounded units.
 *
 * @param dineroObject The functional Dinero object to transform.
 * @param digits The number of fraction digits to round to.
 * @param roundingMode The rounding mode to use.
 *
 * @returns The amount in rounded units.
 */
const functionalToRoundedUnit = toRoundedUnit({
  multiply,
  divide,
  power,
  round: halfEven,
});

export default functionalToRoundedUnit;