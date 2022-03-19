function fun(num) {
  if (num % 2 == 0) {
    return num;
  } else {
    return num * 2;
  }
}

function fun_array(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    fun(num);
  }
}

var result = fun(13);
console.log("result ", result);

// Number = [12, 32, 33, 14, 54, 77];
// fun_array(Number);

// ages = [10, 22, 33, 44, 55, 12, 34, 66];
// fun_array(ages);
