
import { expect } from 'chai';
import { StringCalculator } from '../string_calculator';

describe('StringCalculator', function() {
  it('empty input', function() {
    expect(StringCalculator.Add('')).to.be.equal(0);
  });
});