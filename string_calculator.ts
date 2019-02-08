export class StringCalculator {

    private numberStrings: string[] = [];
    private separators: string[] = [',', '\n'];

    constructor() {

    }

    private splitNumberStrings(separatorIndex: number) {
      let newNumberStrings: string[] = [];
      const currentSeparator = this.separators[separatorIndex];
      this.numberStrings.forEach((numberString) => {
          newNumberStrings = newNumberStrings.concat(numberString.split(currentSeparator));
      });
      this.numberStrings = newNumberStrings;
    }

    private reset() {
      this.numberStrings = [];
    }

    private determineSeparators(input: string): string {
      const index = input.indexOf('\n');
      if(!input.startsWith('//') || index < 0) {
        return input;
      }
      if(input.startsWith('//[') && index > 0) {
        const separatorArray = input.substr(3, index - 4);
        this.separators = this.separators.concat(separatorArray.split(']['));
        return input.substring(index + 1);
      }
      else {
        const separator = input.substr(2, index - 2);
        this.separators.push(separator);
        return input.substring(index + 1);
      }
    }

    Add(input: string, maxNumber?: number): number {
      this.reset();

      if(!input)
        return 0;

      this.numberStrings = [this.determineSeparators(input)];
      for(var index = 0; index < this.separators.length; index++)
        this.splitNumberStrings(index);

      let sum = 0;
      let negativeNumbers = '';
      this.numberStrings.forEach((valueString) => {
        const value = parseInt(valueString);
        if(value < 0)
          negativeNumbers += (negativeNumbers.length ? ',' : '') + value;
        if(maxNumber !== undefined && value > maxNumber)
          return;
        else
          sum += value;
      });

      if(negativeNumbers.length)
        throw new Error('Negatives not allowed: ' + negativeNumbers);
      return sum;
    }
}