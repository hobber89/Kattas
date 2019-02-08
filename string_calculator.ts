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
      else {
        const separator = input.substr(2, index - 2);
        this.separators.push(separator);
        return input.substring(index + 1);
      }
    }

    Add(input: string ): number {
      this.reset();

      if(!input)
        return 0;

      this.numberStrings = [this.determineSeparators(input)];
      for(var index = 0; index < this.separators.length; index++)
        this.splitNumberStrings(index);

      let sum = 0;
      this.numberStrings.forEach((value) => sum += parseInt(value));
      return sum;
    }
}