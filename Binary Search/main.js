function binarySearch(arr, guess) {
    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        let middle = Math.floor((low + high) / 2)
        console.log(low, middle, high)

        if (arr[middle] === guess) return middle
        else if (arr[middle] < guess) {
            low = middle + 1
        } else {
            high = middle - 1
        }
    }

    return null
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4))