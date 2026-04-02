function findMax(arr) {
    let max = arr[0];  // assume first element is max

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];  // update max
        }
    }

    return max;
}

// Test
console.log(findMax([3, 7, 2, 9, 5]));