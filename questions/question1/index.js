/*
问题描述：
  有一个整型数组arr和一个大小为w的窗口从数组的最左边滑到最右边，窗口每次向右边滑一个位置。
  例如，数组为[4,3,1,5,4,3,7,5]，窗口大小为5时:
  [4 3 1 5 4] 3 7 5 　max = 5
  4 [3 1 5 4 3] 7 5 　max = 5
  4 3 [1 5 4 3 7] 5 　max = 7
  4 3 1 [5 4 3 7 5]  　max = 7
  即窗口最大值数组为 result = {5, 5, 7, 7}
 */

function getResult(arr, size){
  var result = []
  var maxIndex = -1
  for(var i=0; i<arr.length - size + 1; i++) {
    if(maxIndex < i) {
      maxIndex = i
    }
    for(var j=maxIndex + 1; j<i+size; j++) {
      if(arr[j] > arr[maxIndex]) {
        maxIndex = j
      }
    }
    result.push(maxIndex)
  }
  return result.map(index=>arr[index])
}

console.log(getResult([4, 3, 1, 5, 4, 3, 7, 5, 2, 3, 4, 2], 5))
