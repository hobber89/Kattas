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

    Add(input: string ): number {
      this.reset();

      if(!input)
        return 0;

      this.numberStrings = [input];
      for(var index = 0; index < this.separators.length; index++)
        this.splitNumberStrings(index);

      let sum = 0;
      this.numberStrings.forEach((value) => sum += parseInt(value));
      return sum;
    }
}