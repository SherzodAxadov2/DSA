function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }

        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }

    return arr
}

console.log(selectionSort([202, 105, 723, 849, 677, 612, 896, 128, 790, 264]))

// Average-case time complexity and Worst time complexity is O(n^2) => n*(n-1)/2
// Best time complexity is O(n) => if array already is sorted
// !Minimizes the number of swaps (than bubble sort) by only swapping once per iteration
