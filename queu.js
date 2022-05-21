function createQeeue() {
    const queue = [];
    return {
        enuqeue: function(value) {
            queue.unshift(value);
        },
        deqeue: function() {
            queue.pop();
        },
        peek: function() {
            return queue[queue.length - 1];
        },
        size: function() {
            return queue.length;
        }
    }
}

const q = createQeeue();
q.enuqeue('Create script for data structure course');
q.enuqeue('Create code example for data structure course');
q.enuqeue('Record data structure course');
q.enuqeue('Vacation');

q.deqeue();
console.log(q.peek());
console.log(q.size());
