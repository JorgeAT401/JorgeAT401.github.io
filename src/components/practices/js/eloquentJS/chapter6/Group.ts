export class Group<T> {
  private members: T[];

  constructor() {
    this.members = [];
  }

  has(value: T): boolean {
    return this.members.includes(value);
  }

  add(value: T): void {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value: T): void {
    this.members = this.members.filter((v) => v !== value);
  }

  next(group: Group<T>) {
    if (group === null) {
      return { done: true };
    }
    let value = group.members[0];
    group.members.shift();
    this.members = group.members;
    return { value, done: false };
  }

  static from<U>(iterable: U[]): Group<U> {
    let group = new Group<U>();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index >= this.members.length) {
          return { done: true, value: undefined };
        }

        let result = { value: this.members[index], done: false };
        index++;
        return result;
      },
    };
  }
}
