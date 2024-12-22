import { Day } from '../day';

class Day2 extends Day {
  constructor () {
    super(2);
  }

  solveForPartOne (input: string): string {
    return String(
      input.split('\n')
        .filter(
          (line) => this.isSafe(
            line.split(' ')
              .map((num) => parseInt(num, 10))
          )
        ).length);
  }

  private isSafe (nums: number[]): boolean {
    let direction = nums[1] - nums[0];
    let delta: number;
    if (direction === 0) {
      return false;
    }
    direction = direction > 0 ? 1 : -1;
    for (let i = 0; i < nums.length - 1; i++) {
      delta = nums[i + 1] - nums[i];
      if (delta * direction < 0) {
        return false;
      }
      delta = Math.abs(delta);
      if (!(delta <= 3 && delta > 0)) {
        return false;
      }
    }
    return true;
  }

  private isDampenedSafe (nums: number[]): boolean {
    if (this.isSafe(nums)) {
      return true;
    }
    for (let i = 0; i < nums.length; i++) {
      if (this.isSafe([...nums.slice(0, i), ...nums.slice(i + 1)])) {
        return true;
      }
    }
    return false;
  }

  solveForPartTwo (input: string): string {
    return String(
      input.split('\n')
        .filter(
          (line) => this.isDampenedSafe(
            line.split(' ')
              .map((num) => parseInt(num, 10))
          )
        ).length);
  }
}

export default new Day2();
