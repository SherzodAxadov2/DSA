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

// Squares of a Sorted Array
const sortedSquares = function (nums) {
    // nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    // return nums.map(el => el ** 2)

    let left = 0
    let right = nums.length - 1
    let position = nums.length - 1
    let result = Array(nums.length)

    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[position] = nums[right--] ** 2
        } else {
            result[position] = nums[left++] ** 2
        }
        position -= 1
    }

    return result
};

// console.log(sortedSquares([-11, -4, -1, 0, 3, 10]))

// Backspace String Compare
const backspaceCompare = function (s, t) {
    // first solution
    // let sStack = []
    // let tStack = []
    // for (let c of s) {
    //     if (c !== '#') sStack.push(c)
    //     else sStack.pop()
    // }
    // for (let c of t) {
    //     if (c !== '#') tStack.push(c)
    //     else tStack.pop()
    // }
    // if (sStack.length === tStack.length) {
    //     for (let c in sStack) {
    //         if (sStack[c] !== tStack[c]) return false
    //     }
    // } else return false
    //
    // return true

    // optimized solution
    function finalString(string) {
        let stack = []
        for (let c of string) {
            if (c === '#') stack.pop()
            else stack.push(c)
        }
        return stack
    }

    return finalString(s).join('') === finalString(t).join('')
};

// console.log(backspaceCompare('a#c', 'b'))

// const majorityElement = function (nums) {
//     let map = new Map()
//
//     for (let el of nums) {
//         map.set(el, map.has(el) ? map.get(el) + 1 : 1)
//     }
//
//     for (let [key, value] in map.entries()) {
//         console.log(key, value)
//         if (value > nums.length / 2) return key
//     }
// };

const maximum69Number = function (num) {
    let numStr = num.toString()
    for (let i in numStr) {
        if (numStr[i] === '6') {
            return parseInt(numStr.slice(0, +i) + '9' + numStr.slice(+i + 1))
        }
    }

    return num
};

// console.log(maximum69Number(9669))

const evaluateTree = function (root) {
    let lastValue

    function traverse(node) {
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)

        if (lastValue === undefined) lastValue = node.value
        // else {
        //
        // }
    }

    traverse(root)
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const sortedArrayToBST = function (nums) {
    if (!nums || !nums.length) return null

    function makeBST(nums, low, high) {
        if (low > high) return null

        let middle = Math.floor((low + high) / 2)
        let root = new TreeNode(nums[middle])
        root.left = makeBST(nums, low, middle - 1)
        root.right = makeBST(nums, middle + 1, high)

        return root
    }

    return makeBST(nums, 0, nums.length - 1)
};

// console.log(sortedArrayToBST([0, 1, 3, 4, 5]))

const hammingWeight = function (n) {
    // Brian Kernighan’s Algorithm  // Hamming weight
    let counter = 0
    while (n) {
        n = n & (n - 1)
        counter++
    }

    return counter
};

// console.log(hammingWeight(2147483645))

const sortByBits = function (arr) {
    function calcCount(number) {
        let count = 0
        while (number) {
            number = number & (number - 1)
            count++
        }
        return count
    }

    return arr.sort((a, b) => calcCount(a) - calcCount(b) || a - b)
};

// console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const sortList = function (head) {
    let temp = head
    let slow = head
    let fast = head

    while (fast && fast.next) {
        temp = slow
        slow = slow.next
        fast = fast.next.next
    }
    temp.next = null

    let leftSide = sortList(head)
    let rightSide = sortList(slow)

    return mergeSortedList(leftSide, rightSide)
};

function mergeSortedList(l1, l2) {
    let dummy = new ListNode()
    let temp = dummy

    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1
            l1 = l1.next
        } else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }

    if (l1) temp.next = l1
    if (l2) temp.next = l2

    return dummy.next
}

function fibonacci(n) {
    if (n <= 1) return n   // base case
    return fibonacci(n - 2) + fibonacci(n - 1)
}

// console.log(fibonacci(7))

const scoreOfString = function (s) {
    let sum = 0
    for (let i = 1; i <= s.length - 1; i++) {
        console.log(s[i - 1], s[i])
        sum += Math.abs(s[i].charCodeAt() - s[i - 1].charCodeAt())
    }
    return sum
};

// console.log(scoreOfString('hello'))

function fibonacciTable(n) {
    if (n <= 1) return n;
    let table = {}
    table[0] = 0
    table[1] = 1

    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2]
    }

    return table[n]
}

// TC -> O(n), SC -> O(1)
function fibonacciWithConstantSpace(n) {
    if (n <= 1) return n;
    let a = 0, b = 1
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b]
    }

    return b
}

// console.log(fibonacciTable(6))
// console.log(fibonacciWithConstantSpace(7))

const countPairs = function (nums, target) {
    // let count = 0
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] < target) count++
    //     }
    // }
    //
    // return count

    // With two pointers
    nums.sort((a, b) => a - b)
    let count = 0
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left
            left++
        } else right--
    }

    return count
};

// console.log(countPairs([-6, 2, 5, -2, -7, -1, 3], -2))

const shipWithinDays = function (weights, days) {
    let left = 0;
    let right = 0
    for (let weight of weights) {
        if (weight > left) left = weight
        right += weight
    }
    let result = right

    while (left <= right) {
        let cap = Math.floor((left + right) / 2)

        if (countDays(cap) <= days) {
            result = Math.min(result, cap)
            right = cap - 1
        } else left = cap + 1
    }

    function countDays(target) {
        let sum = 0;
        let daysNeeded = 1;
        for (let num of weights) {
            sum += num;
            if (sum > target) {
                daysNeeded++;
                sum = num;
            }
        }
        return daysNeeded;
    }


    return result
};

// console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))

const isPerfectSquare = function (num) {
    // return Math.sqrt(num) * 10 % 10 === 0

    // With binary search
    let start = 1
    let end = num

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)

        if (middle * middle === num) return true
        else if (middle * middle > num) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }

    return false
};

// console.log(isPerfectSquare(24))

const checkPerfectNumber = function (num) {
    let sum = 0
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i + num / i
        }
    }

    return sum === 2 * num
};

// console.log(checkPerfectNumber(6))

const findMin = function (nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let middle = Math.floor((left + right) / 2)

        if (nums[middle] > nums[right]) {
            left = middle + 1
        } else {
            right = middle
        }
    }

    return nums[left]
};

// console.log(findMin([4, 5, 6, 7, 0, 1, 2]))

const missingInteger = function (nums) {
    let set = new Set(nums)
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            sum += nums[i]
        } else break
    }

    while (set.has(sum)) {
        sum++
    }

    return sum
};
// console.log(missingInteger([3, 4, 5, 1, 12, 14, 13]))

const subdomainVisits = function (cpdomains) {
    let domain = {}

    for (let d of cpdomains) {
        let count = d.split(' ')[0]
        let str = d.split(' ')[1].split('.')
        for (let i = 0; i < str.length; i++) {
            let item = str.slice(i).join('.')
            domain[item] = (domain[item] || 0) + +count
        }
    }

    return Object.entries(domain).map(el => {
        return `${el[1]} ${el[0]}`
    })
};

// console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))

const mostCommonWord = function (paragraph, banned) {
    let setBanned = new Set(banned.map(el => el.toLowerCase()))
    let str = {}

    for (let item of paragraph.split(/\W+/).filter(Boolean)) {
        if (!setBanned.has(item.toLowerCase())) {
            str[item.toLowerCase()] = (str[item.toLowerCase()] || 0) + 1
        }
    }

    return Object.entries(str).sort((a, b) => b[1] - a[1])[0][0]
};

// console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ["hit"]))

const duplicateZeros = function (arr) {
    // for (let i = 0; i < arr.length-1; i++) {
    //     if (!arr[i]) {
    //         let prev = arr[i + 1]
    //         for (let j = i + 2; j < arr.length; j++) {
    //             [arr[j], prev] = [prev, arr[j]]
    //         }
    //         arr[++i] = 0
    //     }
    // }

    for (let i = 0; i < arr.length - 1; i++) {
        if (!arr[i]) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++
        }
    }

    return arr
};

// console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))

const removeDuplicates = function (nums) {
    let left = 0
    let right = 0

    while (right < nums.length) {
        let counter = 1
        while (right + 1 < nums.length && nums[right] === nums[right + 1]) {
            counter++
            right++
        }

        for (let i = 0; i < Math.min(2, counter); i++) {
            nums[left] = nums[right]
            left++
        }
        right++
    }

    return left
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))

const checkIfExist = function(arr) {
    let hashTable = {}
    for(let num of arr){
        if(hashTable[num]!==undefined) return true
        hashTable[num / 2] = num
        hashTable[num * 2] = num
    }

    return false
};

// console.log(checkIfExist([-2,0,10,-19,4,6,-8]))

const validMountainArray = function(arr) {
    if(arr.length < 3) return false;
    // for(var i = 0; i< arr.length-1; i++){
    //     if(arr[i]>=arr[i+1]) break  // get pick index
    // }
    //
    // console.log(i)
    // if(i+1 === arr.length || !i) return false
    //
    // for(let j = i; j < arr.length-1; j++) {
    //     if(arr[j]<=arr[j+1]) return false
    // }
    //
    // return true

    let i = 0

    while(i<arr.length-1 && arr[i]<arr[i+1]) i++

    if(i+1 === arr.length || i === 0) return false

    while(i<arr.length-1 && arr[i]>arr[i+1]) i++

    return i = arr.length - 1
};

// console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0]))

const replaceElements = function(arr) {
    let maxRight = -1
    for(let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i]
        arr[i] = maxRight  // lest element of array always -1

        if(temp > maxRight) maxRight = temp
    }


    return arr
};

// console.log(replaceElements([17,18,5,4,6,1]))

const arrayChange = function(nums, operations) {
    // let map = {}
    // for(let i in nums) {
    //     map[nums[i]] = i
    // }
    //
    //
    // for(let o of operations) {
    //     if(map[o[0]]){
    //         nums[map[+o[0]]] = +o[1]
    //         map[o[1]] = map[o[0]]
    //         delete map[o[0]]
    //     }
    // }
    //
    // return Object.entries(map).sort((a, b) => a[1] - b[1]).map(el=> +el[0])

//     best approach

    let map = new Map();
    nums.forEach((num, index) => map.set(num, index));

    operations.forEach(([oldVal, newVal])=>{
        let index = map.get(oldVal)
        nums[index] = newVal
        delete map.get(oldVal)
        map.set(newVal, index)
    })

    return nums
};

// console.log(arrayChange([1,2], [[1,3],[2,1],[3,2]]))

const replaceWords = function(dictionary, sentence) {
    // let sentences = sentence.split(' ')
    //
    // for (let i in sentences) {
    //     for(let d of dictionary){
    //         if(d === sentences[i].slice(0, d.length)) {
    //             sentences[i] = d
    //         }
    //     }
    // }
    //
    // return sentences.join(' ')

    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        for (let root of dictionary) {
            if (words[i].startsWith(root)) {
                words[i] = root;
                break;
            }
        }
    }

    return words.join(' ');
};

// console.log(replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery"))

const replaceDigits = function(s) {
    s = s.split('')

    for (let i = 1; i < s.length; i += 2) {
        let next = String.fromCharCode( +String(s[i-1]).charCodeAt() + +s[i])
        s[i] = next
    }

    return s.join('')
};

// console.log(replaceDigits('a1c1e1'))

const sortArrayByParity = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if(nums[j] % 2 === 0) {
    //             [nums[i], nums[j]] = [nums[j], nums[i]]
    //             break
    //         }
    //     }
    // }
    //
    // return nums

    let left = 0
    let right = nums.length - 1;

    while(left < right){
        if(nums[right] % 2 === 0 && nums[left] % 2 !== 0){
            [nums[right], nums[left]] = [nums[left], nums[right]]
        }
        if(nums[left] % 2 === 0) left++   // if even
        if(nums[right] % 2 !== 0) right--   // // if odd
    }

    return nums
};

// console.log(sortArrayByParity([3,1,2,4]))

function findArraysMedium(arr1, arr2) {
    let arr = []

    let p1 = 0
    let p2 = 0

    while(p1<arr1.length && p2<arr2.length) {
        if(arr1[p1]<arr2[p2]) {
            arr.push(arr1[p1++])
        } else {
            arr.push(arr2[p2++])
        }
    }

    while(p1 < arr1.length){
        arr.push(arr1[p1++])
    }

    while(p2 < arr2.length){
        arr.push(arr2[p2++])
    }

    let middle
    if(arr.length % 2 === 0) {
        middle = arr.length/2
        return (arr[middle] + arr[middle - 1]) / 2
    }

    middle = Math.floor(arr.length/2)
    return arr[middle]
}

// console.log(findArraysMedium([1,2], [3,4]))

const heightChecker = function(heights) {
    let expected = [...heights].sort((a,b)=>a-b)
    let indices = 0

    for(let i = 0; i < heights.length; i++){
        if(heights[i] !== expected[i]) {
            indices++
        }
    }

    return indices
};

// console.log(heightChecker([1,1,4,2,1,3]))

const maxNumberOfBalloons = function(text) {
    let balloon = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0
    }
    for(let c of text){
        if(balloon[c] || balloon[c] === 0) {
            balloon[c]++
        }
    }

    // first way with loop
    // let count = Infinity
    // for(let key in balloon){
    //     if(key === 'l' || key === 'o'){
    //         count = Math.min(count, Math.floor(balloon[key]/2))
    //     } else {
    //         count = Math.min(count, Math.floor(balloon[key]))
    //     }
    // }

    // second way
    let count = Math.min(
        balloon['b'],
        balloon['a'],
        Math.floor(balloon['l']/2),
        Math.floor(balloon['o']/2),
        balloon['n']
    )

    return count
};

// console.log(maxNumberOfBalloons("loonbalxballpoon"))

const findLonely = function(nums) {
    let map = new Map();
    nums.forEach(num=> map.set(num, (map.get(num) || 0) + 1))

    let lonely = []
    for(let [key, value] of map.entries()){
        if(value === 1 && !map.get(key-1) && !map.get(key+1)) {
            lonely.push(key)
        }
    }

    return lonely
};

// console.log(findLonely([10,6,5,8]))

const xorOperation = function(n, start) {
    // let nums = Array(n)
    // for(let i = 0; i < n; i++){
    //     nums[i] = start + 2 * i
    // }
    //
    // let bitwise = nums[0]
    // for(let i = 1; i < n; i++){
    //     bitwise ^= nums[i]
    // }
    //
    // return bitwise

    let result = 0
    for(let i = 0; i < n; i++) {
        result ^= start + 2 * i
    }
    return result
};

// console.log(xorOperation(4, 3))

const swapPairs = function(head) {
    if(!head || !head.next) return head

    let first = head
    let second = head.next

    first.next = swapPairs(second.next)
    second.next = first

    return second
};