// bad time complexity
function twoNumberSum(array, targetSum) {
  if (!array.length) return;

  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}

//

function twoNumberSumWithHash(array, targetSum) {
  const nums = {};

  for (const num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
}


function twoNumberSum2(array, targetSum) {
  const nums = {};

  for(const num of array) {
    const target = targetSum - num;

    if(nums[num] === target) {
      return [target, num]
    } else {
      nums[num] = true
    }
  }
}

console.log(twoNumberSumWithHash([3, 5, -4, 8, 11, 1, -1, 6], 10));
