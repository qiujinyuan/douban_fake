export class Book {
    isNew = false;
    constructor(public id: number, public name: string, public author: string, public publishTime: Date, public price: number) {
        if (new Date().getTime() - publishTime.getTime() <= 2 * 30 * 24 * 60 * 60 * 1000) {
            this.isNew = true;
        }
    }
    toString(): string {
        return `${this.name}, 作者：${this.author}，出版时间：${this.publishTime.toLocaleString()}，售价：${this.price}`;
    }
}
