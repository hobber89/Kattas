
import { expect } from 'chai';
import { StringCalculator } from '../string_calculator';

describe('StringCalculator', function() {

  const stringCalculator = new StringCalculator();

  it('empty input', function() {
    expect(stringCalculator.Add('')).to.be.equal(0);
  });

  it('single number input', function() {
    expect(stringCalculator.Add('1')).to.be.equal(1);
    expect(stringCalculator.Add('121')).to.be.equal(121);
    expect(stringCalculator.Add('12321')).to.be.equal(12321);
  });

  it('simple sequence of numbers', function() {
    expect(stringCalculator.Add('1,1')).to.be.equal(2);
    expect(stringCalculator.Add('1,2,1')).to.be.equal(4);
    expect(stringCalculator.Add('1,2,3,2,1')).to.be.equal(9);
  });
});