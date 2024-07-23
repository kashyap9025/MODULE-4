class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value);
        this._heapifyUp(this.size() - 1);
    }

    pop() {
        if (this.isEmpty()) return null;
        const root = this.peek();
        const end = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = end;
            this._heapifyDown(0);
        }
        return root;
    }

    _heapifyUp(index) {
        let parent = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[index][1] > this.heap[parent][1]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    _heapifyDown(index) {
        const length = this.size();
        let largest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;

        if (left < length && this.heap[left][1] > this.heap[largest][1]) {
            largest = left;
        }
        if (right < length && this.heap[right][1] > this.heap[largest][1]) {
            largest = right;
        }
        if (largest !== index) {
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            this._heapifyDown(largest);
        }
    }
}

function reorganizeString(s) {
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const maxHeap = new MaxHeap();
    for (let char in charCount) {
        maxHeap.push([char, charCount[char]]);
    }

    let result = '';
    let prevChar = null;
    let prevCount = 0;

    while (!maxHeap.isEmpty()) {
        let [char, count] = maxHeap.pop();
        result += char;
        if (prevChar !== null) {
            maxHeap.push([prevChar, prevCount]);
        }

        prevChar = char;
        prevCount = count - 1;

        if (prevCount === 0) {
            prevChar = null;
        }
    }

    return result.length === s.length ? result : '';
}

// Example 1:
let s1 = "aab";
console.log("aab:" + reorganizeString(s1));

// Example 2:
let s2 = "aaab";
console.log('aaab:' + reorganizeString(s2));

// Example 3:
let s3 = "kkbaac";
console.log('kkbaac' + reorganizeString(s3));x