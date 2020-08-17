import { DineroOptions } from '@dinero.js/core';
import { PartialFunctionalDinero } from '../..';
import dinero from '../dinero';

/**
 * Create a partially applied functional Dinero object.
 *
 * @param options.currency The currency.
 * @param options.scale The number of decimal places to represent.
 *
 * @returns The partially applied functional Dinero object.
 */
function partialDinero<TAmount>({
  currency,
  scale,
}: Omit<DineroOptions<TAmount>, 'amount'>): PartialFunctionalDinero<TAmount> {
  return (amount) => {
    return dinero({
      amount,
      currency,
      scale,
    });
  };
}

export default partialDinero;