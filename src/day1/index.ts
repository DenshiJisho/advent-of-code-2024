import { Day } from '../day';

class Day1 extends Day {
  constructor () {
    super(1);
  }

  solveForPartOne (input: string): string {
    const leftList: number[] = [];
    const rightList: number[] = [];
    input.trim().split('\n').forEach((line) => {
      const pair = line.split(/\s+/).map((num) => parseInt(num, 10));
      leftList.push(pair[0]);
      rightList.push(pair[1]);
    });
    return String(
      this.zip(leftList.sort(), rightList.sort())
        .map(([a, b]) => Math.abs(a - b))
        .reduce((a, b) => a + b)
    );
  }

  solveForPartTwo (input: string): string {
    const leftList: number[] = [];
    const rightList: number[] = [];
    input.trim().split('\n').forEach((line) => {
      const pair = line.split(/\s+/).map((num) => parseInt(num, 10));
      leftList.push(pair[0]);
      rightList.push(pair[1]);
    });

    const rightFreq = rightList.reduce((acc, val) => acc.set(val, (acc.get(val) || 0) + 1), new Map());

    return String(
      leftList.map((num) => num * rightFreq.get(num) || 0).reduce((a, b) => a + b)
    );
  }

  private zip (a: number[], b: number[]): number[][] {
    return a.map((e, i) => [e, b[i]]);
  }
}

export default new Day1();
