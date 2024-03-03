type Node<T> = {
    value: T,
    next: Node<T> | undefined
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;
    

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if(!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        const node = { value: item } as Node<T>;

        const curr = this.getNode(idx);

        if(!curr) throw new Error("Element dont finded");

        this.length++;

        node.next = curr.next;
        curr.next = node;
    }

    append(item: T): void {
        const node = { value: item } as Node<T>;

        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
        }

        if (!this.tail) throw new Error("Thail should be exists");

        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        if (!this.length || !this.head) {
            return undefined;
        }

        if (this.head.value === item) {
            this.length--;
            const head = this.head;
            this.head = this.head.next;

            if (!this.head) {
                this.tail = this.head;
            }

            return head.value;
        }

        let curr = this.head as Node<T> | undefined;

        for (let i = 1; curr && i < this.length; ++i) {
            if (curr.next?.value == item) {
                this.length--;
                const node = curr.next;
                curr.next = curr.next?.next;
                return node.value;
            }

            curr = curr.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        const node = this.getNode(idx);

        return node?.value;
    }

    removeAt(idx: number): T | undefined {
        if (!this.length || !this.head) {
            return undefined;
        }

        if (idx > this.length) {
            throw new Error("You can not insert outside the list");
        }

        this.length--;

        if (idx == 0) {
            const head = this.head
            this.head = this.head.next;

            if (!this.head) {
                this.tail = this.head;
            }

            return head.value;
        }

        let curr = this.head as Node<T> | undefined;

        for (let i = 1; curr && i < idx; ++i) {
            curr = curr?.next;
        }
      
        if (!curr || !curr?.next) {
            throw new Error("Idx dismatch");
        }

        const node = curr.next;
        curr.next = curr.next?.next;

        return node?.value;
    }

    private getNode(idx: number): Node<T> | undefined {
        if (idx > this.length) {
            throw new Error("You can not insert outside the list");
        }

        let curr = this.head;

        for (let i = 1; curr && i <= idx; ++i) {
            curr = curr.next;
        }

        return curr;
    }
}