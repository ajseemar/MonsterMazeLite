class PriorityHeap {
    constructor () {
        this.heap = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    insert(node) {
        // add the new node to the bottom level, far-left 
        this.heap.push(node);

        // then, sift that value up the heap to restore heap property
        this.siftUp(this.heap.length - 1);
    }

    siftUp(idx) {
        // if the node is already at the root, there's no further we can sift up
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        // if the node is bigger than it's parent, we are breaking heap property...
        if (this.heap[parentIdx].costs["f"] > this.heap[idx].costs["f"]) {
            // so swap the node with it's parent
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];

            // and continue to sift it up recursively
            this.siftUp(parentIdx);
        }
    }

    deleteMin() {
        if (this.heap.length === 2) return this.heap.pop();
        if (this.heap.length === 1) return null;

        let min = this.heap[1];
        this.heap[1] = this.heap.pop();
        this.siftDown(1);
        return min;
    }

    siftDown(idx) {
        let ary = this.heap;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftNode = ary[leftIdx];
        let rightNode = ary[rightIdx];

        if (leftNode === undefined) leftNode = {costs: {f: Infinity}};
        if (rightNode === undefined) rightNode = {costs: {f: Infinity}};

        if (ary[idx] < leftNode && ary[idx] < rightNode) return;

        if (leftNode > rightNode) {
            var swapIdx = rightIdx;
        } else {
            var swapIdx = leftIdx;
        }

        [ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];
        this.siftDown(swapIdx);
    }
}

module.exports = PriorityHeap;