
import { expect } from 'chai';
import { StringCalculator } from '../string_calculator';

describe('StringCalculator', function() {
  it('empty input', function() {
    expect(StringCalculator.Add('')).to.be.equal(0);
  });

  it('single number input', function() {
    expect(StringCalculator.Add('1')).to.be.equal(1);
    expect(StringCalculator.Add('121')).to.be.equal(121);
    expect(StringCalculator.Add('12321')).to.be.equal(12321);
  });

  it('simple sequence of numbers', function() {
    expect(StringCalculator.Add('1,1')).to.be.equal(2);
    expect(StringCalculator.Add('1,2,1')).to.be.equal(4);
    expect(StringCalculator.Add('1,2,3,2,1')).to.be.equal(9);
  });
});