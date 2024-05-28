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

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))

const sortPeople = function (names, heights) {
    return heights.map((height, i) => {
        return {height, name: names[i]}
    }).sort((a, b) => b.height - a.height)
        .map(obj => obj.name)
};

// console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))


// Recursion
const factorial = function (n) {
    if (n === 1) return n
    return n * factorial(n - 1)
}

const sum = function (n) {
    if (n < 1) return n
    return n + sum(n - 1)
}

// console.log(factorial(4))
// console.log(sum(4))

function checkPower(n) {
    if (n < 2) return n
    return checkPower(n / 2)
}

// console.log(checkPower(17))

//Pow(x, n) with recursion
const myPow = function (x, n) {
    // if (n ===  0) return 1
    // if (n >= 0) {
    //     return x * myPow(x, n - 1)
    // } else return 1/x * myPow(x, n + 1)
    const power = (x, n) => {
        if (n === 0) return 1;
        const half = power(x, Math.floor(n / 2));
        if (n % 2 === 0) {
            return half * half;
        } else {
            return half * half * x;
        }
    };

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    return power(x, n);
};

// console.log(myPow(2, -4), Math.pow(2, -4))

function isSelfDividingNumber(num) {
    // first solution
    // let arr = String(num).split('')
    // for (let i = 0; i < arr.length; i++) {
    //     if (num % +arr[i] !== 0) return false
    // }
    // return true

    // second solution
    let numClone = num
    while (numClone >= 1) {
        let last = numClone % 10
        if (num % last === 0) {
            numClone = Math.floor(numClone / 10)
        } else return false
    }

    return true
}

// console.log(isSelfDividingNumber(21))

// Kth Largest Element in an Array
const findKthLargest = function (nums, k) {
    let maxIndex = 0

    while (k) {
        for (let index in nums) {
            if (nums[index] > nums[maxIndex]) maxIndex = index
        }
        if (k === 1) return nums[maxIndex]
        nums[maxIndex] = -Infinity
        k--
    }

    return nums
};

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))


function minimumTimeDifference(timePoints) {
    function calculateTime(string) {
        if (string === '00:00') return 24 * 60
        return string.split(':')[0] !== '00' ? string.split(':')[0] * 60 + +string.split(':')[1] : 0 + (string.split(':')[1] !== '00' ? +string.split(':')[1] : 0)
    }

    timePoints.sort((a, b) => {
        let totalA = calculateTime(a)
        let totalB = calculateTime(b)

        return totalB - totalA
    })

    let min = calculateTime(timePoints[0]) - calculateTime(timePoints[1])
    for (let i = 2; i < timePoints.length; i++) {
        if (calculateTime(timePoints[i - 1]) - calculateTime(timePoints[i])) min = calculateTime(timePoints[i - 1]) - calculateTime(timePoints[i])
    }

    return min
}

// console.log(minimumTimeDifference(["05:31", "22:08", "00:35"]))

const maximumProduct = function (nums) {
    nums.sort((a, b) => b - a)

    let n = nums.length - 1
    let value1 = nums[0] * nums[1] * nums[2]
    let value2 = nums[0] * nums[n] * nums[n - 1]
    return value1 > value2 ? value1 : value2
};

// console.log(maximumProduct([1, 2, 3, 4, -6],))

const isHappy = function (n) {
    let number = n
    let sum = 0
    let arr = []

    while (number * number > 10) {
        if (sum && number === n) return false
        sum = 0
        arr = String(number).split('')
        for (let item of arr) sum += item * item
        number = sum
    }

    return number === 1
};

// console.log(isHappy(4))

const majorityElement = function (nums) {
    let obj = {}
    for (let i in nums) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
    }

    let sortedArr = Object.entries(obj).filter(el => el[1] > nums.length / 3).map(item => item[0])
    return sortedArr.length ? sortedArr : nums
};

// console.log(majorityElement([1, 2, 3]))

const longestPalindrome = function (s) {
    let map = new Map()

    for (let c of s) {
        map.set(c, map.has(c) ? map.get(c) + 1 : 1)
    }

    let result = 0
    let maxOdd = 0

    for (let [key, value] of map.entries()) {
        if (value % 2 === 0) result += value
        else {
            result += value - 1  // maybe 13 -> a and 25 -> b
            maxOdd = 1
        }
    }


    return result + maxOdd
};
// console.log(map,result, maxOdd)

// console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"))

// Random Pick Index with constructor function
const Solution = function (nums) {
    this.nums = nums
    this.map = createMap()

    function createMap() {
        let map = new Map()

        for (let key in nums) {
            let item = nums[key]
            if (!map.has(item)) {
                map.set(item, [])
            }
            map.get(item).push(key)
        }

        return map
    }
};

Solution.prototype.pick = function (target) {
    if (this.map.has(target)) {
        let targetArray = this.map.get(target)
        if (targetArray.length === 1) return parseInt(targetArray[0])

        let randomIndex = Math.floor(Math.random() * targetArray.length);
        return targetArray[randomIndex]
    }
};
let obj = new Solution([1, 2, 3, 3, 3])

// console.log(obj.pick(3))

function getRandomNumber(n) {
    return Math.floor(Math.random() * n)
}

// console.log(getRandomNumber(3))

// Random Pick Index with class

// class Solution {
//     constructor(nums) {
//         this.nums = nums
//         this.map = this.createMap()
//     }
//
//     createMap() {
//         let map = new Map()
//
//         for (let key in this.nums) {
//             let item = this.nums[key]
//             if (!map.has(item)) {
//                 map.set(item, [])
//             }
//             map.get(item).push(key)
//         }
//
//         return map
//     }
//
//     pick(target) {
//         if (this.map.has(target)) {
//             let targetArray = this.map.get(target)
//             if (targetArray.length === 1) return targetArray[0]
//             let index = Math.floor(Math.random() * targetArray.length)
//             return targetArray[index]
//         }
//     }
// }
//
// let obj2 = new Solution([1, 2, 3, 3, 3])
// console.log(obj2.pick(3))

// Find Common Characters

const commonChars = function (words) {
    function counter(word) {
        let map = {}
        for (let c of word) {
            map[c] = (map[c] || 0) + 1
        }
        return map
    }

    let commonChars = counter(words[0])

    for (let i = 0; i < words.length; i++) {
        let obj = counter(words[i])
        for (let key in commonChars) {
            if (obj[key]) {
                commonChars[key] = Math.min(commonChars[key], obj[key])
            } else delete commonChars[key]
        }
    }

    let result = []
    for (let key in commonChars) {
        result.push(...Array(commonChars[key]).fill(key))
    }

    return result
};

// console.log(commonChars(["bella", "label", "roller"]))

const commonFactors = function (a, b) {
    let factors = new Set()

    for (let i = 1; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            factors.add(i)
            factors.add(a / i)
        }
    }

    let result = 0
    for (let i = 1; i <= Math.sqrt(b); i++) {
        if (b % i === 0) {
            if (factors.has(i)) result++
            if (factors.has(b / i) && b / i !== i) result++
        }
    }

    return result
};

// console.log(commonFactors(12, 6))

function isPrime(number) {
    if (number <= 1) return false
    if (number <= 3) return true

    if (number % 2 === 0) return false

    for (let i = 3; i <= Math.sqrt(number); i += 2) {  // for odd numbers
        if (number % i === 0) return false
    }

    return true
}

// console.log(isPrime(21))

const countPrimes = function (n) {
    let array = new Array(n).fill(true)
    let count = 0

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (array[i]) {
            for (let j = i * i; j < n; j += i) array[j] = false  // set false value if it divided by i
        }
    }

    for (let i = 2; i < n; i++) if (array[i]) count++

    return count
}

// console.log(countPrimes(10))