function doublelyLinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
    let length = 0;
    let head = null;
    let tail = null;

    //function to insert element in doubly linked list
    /*if head is null then assign current node to head
    else add node as next ele and existing ele as prev */

    this.append = function(element) {
        let node = new Node(element),
            current = head,
            previous;

        if (head == null) {
            head = node;
            tail = node;
        }

        node.prev = tail;
        tail.next = node;
        tail = node;

        length++;
        return element;
    }

    this.insert = function(position, element) {
            if (position >= 0 && position <= length) {
                let node = new Node(element),
                    current = head,
                    previous,
                    index = 0;

                if (position == 0) {
                    if (!head) {
                        head = node;
                        tail = node;
                    } else {
                        node.next = current;
                        current.prev = node;
                        head = node;
                    }
                } else if (position === length) {
                    current = tail;
                    current.next = node;
                    node.prev = current;
                    tail = node;
                }
                length++;
                return element;

            }
        }
        //remove element at any position
    this.removeAt = function(position) {
            if (position > -1 && position < length) {
                let current = head,
                    previous,
                    index = 0;

                //removing fisrt element 
                if (position === 0) {
                    head = current.next;
                } else if (position === length - 1) {
                    current = tail;
                    tail = current.prev;
                    tail.next = null;

                }
                length--;
                return current.element;
            } else {
                return null;
            }
        }
        //delete first item from the list
    this.deleteHead = function() {
            this.removeAt(0);
        }
        //delete last element from the listAll
    this.deleteTail = function() {
        this.removeAt(length - 1);
    }

    //convert to array 
    this.toArray = function() {
        let arr = [],
            current = head;

        while (current) {
            arr.push(current.element);
            current = current.next;
        }

        return arr;
    };


}

let dll = new doublelyLinkedList();
console.log(dll.append('pooja'));
console.log(dll.append('riya'));
//console.log(dll.insert(1, 'Abhi'));
console.log(dll.append('siya'));
//console.log(dll.deleteHead());
console.log(dll.deleteTail());
console.log(dll.toArray())