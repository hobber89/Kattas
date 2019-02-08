
import { expect } from 'chai';
import { StringCalculator } from '../string_calculator';

describe('StringCalculator', function() {

  const stringCalculator = new StringCalculator();

  const expectException = function(input: string, errorMessage: string) {
    try {
      stringCalculator.Add(input);
    } catch(error) {
      expect(error.message).to.be.equal(errorMessage);
    }
  }

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

  it('sequence with new line', function() {
    expect(stringCalculator.Add('1\n1')).to.be.equal(2);
    expect(stringCalculator.Add('1\n2,1')).to.be.equal(4);
    expect(stringCalculator.Add('1\n2,3,2,1')).to.be.equal(9);
  });

  it('explicit separator', function() {
    expect(stringCalculator.Add('//;\n1;2')).to.be.equal(3);
  });

  it('negative numbers', function() {
    expectException('-1,2', 'Negatives not allowed: -1');
    expectException('2,-4,3,-5', 'Negatives not allowed: -4,-5');
  });

  it('large number', function() {
    expect(stringCalculator.Add('1001,2', 1000)).to.be.equal(2);
  });

  it('explicit separator array', function() {
    expect(stringCalculator.Add('//[|||]\n1|||2|||3', 1000)).to.be.equal(6);
    expect(stringCalculator.Add('//[|][%]\n1|2%3', 1000)).to.be.equal(6);
    expect(stringCalculator.Add('//[SEP1][SEP2][SEP3]\n1SEP12SEP23SEP34', 1000)).to.be.equal(10);
  });
});