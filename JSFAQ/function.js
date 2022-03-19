function fun(num) {
  if (num % 2 == 0) {
    console.log(num, " :is even number");
  } else {
    console.log(num * 2);
  }
}

function fun_array(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    fun(num); //This function will be deleted
    // if (num % 2 == 0) {
    //   console.log(num, " :is even number");
    // } else {
    //   console.log(num * 2);
    // }
  }
}

Number = [12, 32, 33, 14, 54, 77];
fun_array(Number);

// friends_age
ages = [10, 22, 33, 44, 55, 12, 34, 66];
fun_array(ages);
