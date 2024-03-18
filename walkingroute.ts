class PathFinder {
    grid: string[][];
    path: string;
    letters: string;

    constructor(grid: string[][]) {
        this.grid = grid;
        this.path = '';
        this.letters = '';
    }

    findPathAndLetters() {
        let x = 0;
        let y = 0;
        let direction = 'right';

        while (this.grid[y][x] !== 's') {
            const currentChar = this.grid[y][x];
            if (currentChar !== '>' && currentChar !== 's') {
                this.path += currentChar;
                if (currentChar.match(/[A-Z]/)) {
                    this.letters += currentChar;
                }
            }

            if (currentChar === '+') {
                if (direction === 'right' || direction === 'left') {
                    if (this.grid[y - 1] && this.grid[y - 1][x] !== ' ') {
                        direction = 'up';
                    } else {
                        direction = 'down';
                    }
                } else if (direction === 'up' || direction === 'down') {
                    if (this.grid[y][x - 1] !== ' ') {
                        direction = 'left';
                    } else {
                        direction = 'right';
                    }
                }
            }

            if (direction === 'right') {
                x++;
            } else if (direction === 'left') {
                x--;
            } else if (direction === 'up') {
                y--;
            } else if (direction === 'down') {
                y++;
            }
        }

        this.path += 's';
    }
}

const grid: string[][] = [
    ['>', '-', '-', '-', 'A', '-', '@', '-', '+'],
    ['|', ' ', ' ', ' ', 'U', ' ', '|', 'C', ' '],
    ['+', '-', 'U', '-', '+', ' ', 'C', '-', '-'],
    ['|', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' '],
    ['s', ' ', 'C', '-', '-', '-']
];

const pathFinder = new PathFinder(grid);
pathFinder.findPathAndLetters();

console.log('Path:', pathFinder.path);
console.log('Letters:', pathFinder.letters);
