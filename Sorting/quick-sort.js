// Quick Sort && D&C
function quickSort(arr) {
    if (arr.length < 2) return arr
    let pivot = arr[0]
    let less = []
    let greater = []

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? less.push(arr[i]) : greater.push(arr[i])
    }

    return [...quickSort(less), pivot, ...greater]
}

console.log(quickSort([10, 5, 2, 3]))