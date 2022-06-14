function PushFront(arr, value) {
    for (var i = arr.length; i >= 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = value;

    console.log(arr)
}

PushFront([99], 7);

function PopFront(arr) {
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1]
    }

    arr.length = arr.length - 1

    console.log(arr);
    
    return temp;
}

PopFront([0, 5, 10, 15]);

function InsertAt(arr, index, value) {
    for (var i = arr.length; i >= index; i--) {
        arr[i] = arr[i-1]
    }
    arr[index] = value;

    console.log(arr);
}

InsertAt([1,2,3,4,5], 3, 0);