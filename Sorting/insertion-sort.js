function insertionSort(array) {
    let temp
    for (let i = 1; i < array.length; i++) {
        temp = array[i] // 2 //4
        for (var j = i - 1; array[j] > temp && temp > -1; j--) {
            array[j + 1] = array[j]
        }
        array[j + 1] = temp
    }

    return array
}

console.log(insertionSort([4, 2, 6, 5, 1, 3]))
// Average-case time complexity and Worst time complexity is O(n^2)
// Best time complexity is O(n) => if array already is sorted