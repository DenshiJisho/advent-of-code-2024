import day2 from './index';

const example_input1 = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const example_input2 = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

describe('On Day 2', () =>{
    it(`part1 example`, ()=>{
        expect(day2.solveForPartOne(example_input1)).toBe('2');
    })

    it(`part2 example`, ()=>{
        expect(day2.solveForPartTwo(example_input1)).toBe('4');
    })
});
