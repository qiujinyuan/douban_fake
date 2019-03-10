import { Hero } from './Hero';
const HEROES: Hero[] = [
    {
        'id': 1,
        'name': 'qq',
        toString(): string {
            return 'id = ' + this.id + ', name = ' + this.name;
        }
    },
    {
        'id': 2,
        'name': 'ww',
        toString(): string {
            return 'id = ' + this.id + ', name = ' + this.name;
        }
    }
];

export { HEROES };

