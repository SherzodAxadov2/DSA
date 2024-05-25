function merge(array1, array2) {
    let combined = []
    let p1 = 0
    let p2 = 0

    while (p1 < array1.length && p2 < array2.length) {
        if (array1[p1] < array2[p2]) {
            combined.push(array1[p1++])
        } else {
            combined.push(array2[p2++])
        }
    }

    while (p1 < array1.length) {
        combined.push(array1[p1++])
    }

    while (p2 < array1.length) {
        combined.push(array2[p2++])
    }

    return combined
}

// console.log(merge([1, 3, 7, 8], [2, 4, 5, 6]))

function mergeSort(array) {
    if (array.length === 1) return array

    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([3, 2, 3, 1, 2, 4, 5, 5, 6]))
// Time complexity O(n*logn)
// Space complexity O(n)