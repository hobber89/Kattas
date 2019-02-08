export class StringCalculator {
    static Add(input: string ): number {
      if(!input)
        return 0;

      const numbers = input.split(",");
      let sum = 0;

      numbers.forEach((value) => sum += parseInt(value));

      return sum;
    }
}