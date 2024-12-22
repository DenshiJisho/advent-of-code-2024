import day1 from './index';

const example_input1 = `3   4
4   3
2   5
1   3
3   9
3   3
`;

const example_input2 = `3   4
4   3
2   5
1   3
3   9
3   3
`;

describe('On Day 1', () =>{
    it(`part1 example`, ()=>{
        expect(day1.solveForPartOne(example_input1)).toBe('11');
    })

    it(`part2 example`, ()=>{
        expect(day1.solveForPartTwo(example_input2)).toBe('31');
    })
});
