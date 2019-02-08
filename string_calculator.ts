export class StringCalculator {
    static Add(input: string ): number {
      if(!input)
        return 0;

      return parseInt(input);
    }
}