// Array
const satisfiesConditions = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        // if (grid[i].length < 2) return false
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i + 1]) {
                if (grid[i][j] !== grid[i + 1][j]) return false
            }
            if (grid[i][j + 1]) {
                if (grid[i][j] === grid[i][j + 1]) return false
            }
        }
    }

    return true
};

// console.log(satisfiesConditions([[2, 9, 0, 0], [2, 9, 0, 0], [2, 9, 0, 0], [2, 9, 0, 0]]))

let plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    digits.unshift(1);

    return digits
};

// console.log(plusOne([9,9,9,9]))

const merge = function (nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p--] = nums1[p1--]
        } else {
            nums1[p--] = nums2[p2--]
        }
    }

    return nums1
};

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

const longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b)
    let max = 0
    let sum = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            sum++
            if (sum > max) max = sum
        } else sum = 1
    }

    return max
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))