import { Day } from '../day';

class Day3 extends Day {
  constructor () {
    super(3);
  }

  solveForPartOne (input: string): string {
    const muls: RegExp = /mul\((\d+),(\d+)\)/g;
    return String(
      [...input.matchAll(muls)]
        .map((values) => Number(values[1]) * Number(values[2]))
        .reduce((acc, val) => acc + val)
    );
  }

  solveForPartTwo (input: string): string {
    const removes: RegExp = /don't\(\).*?do\(\)/g;
    const muls: RegExp = /mul\((\d+),(\d+)\)/g;
    return String(
      [...input.replace(/\r\n/g, '#').replace(removes, '').matchAll(muls)]
        .map((values) => Number(values[1]) * Number(values[2]))
        .reduce((acc, val) => acc + val)
    );
  }
}

export default new Day3();
