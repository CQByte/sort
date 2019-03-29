/**
 * 不停地从原数组中找到最小的元素放到结果数组中
 * @param {b} arr 
 */
function sort_human(arr){
  let length = arr.length, result = [];
  while(result.length < length) {
    let min = arr[0], minIndex = 0;
    arr.forEach((element, index) => {
      if(element <= min){
        min = element;
        minIndex = index;
      }
    });
    arr.splice(minIndex, 1);
    result.push(min)
  }
  return result;
}

/**
 * 冒泡排序
 * @param {Array} arr 
 */
function sort_bubble(arr){
  for(let i = 0,len = arr.length; i < len - 1; i++){
    for(let j = 0; j < len - i - 1; j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}

/**
 * 快速排序
 * @param {array} arr 
 * [4,3,2,3,4,5,8,7,8,4,9,3,0,2,7,9,8,0]
 */
function sort_quick(arr){
  function _sort(start, end){
    let indexLeft = start, indexRight = end, reference = arr[start];
    // console.log('round::', start, end)
    while(indexLeft < indexRight){
      // console.log(arr.join(','), '=>',indexLeft, indexRight, reference)
      do{
        if(arr[indexRight] < reference){
          [arr[indexLeft],arr[indexRight]] = [arr[indexRight],arr[indexLeft]]
          indexLeft++;
          break;
        }
        indexRight--;
      }while(indexRight > indexLeft)
      do{
        if(arr[indexLeft] > reference){
          [arr[indexLeft],arr[indexRight]] = [arr[indexRight],arr[indexLeft]]
          indexRight--;
          break;
        }
        indexLeft++;
      }while(indexRight > indexLeft)
    }
    if(indexRight -start > 0){
      _sort(start, indexRight)
    }
    if(end - indexRight > 1){
      _sort(indexRight+1, end)
    }
  }
  _sort(0, arr.length -1)
  // console.log(arr.join(','))
  return arr;
}
// sort_quick([4,3,12,13,14,5,8,7,18,24,9,33,10,62,47,29,78,20])
/**
 * 生成指定长度的数组并填充随机数字
 * @param {number} length 
 */
function genRoundArr(length){
  let arr = Array(length)
  for(let i = 0; i < length; i++){
    arr[i] = Math.floor(Math.random()*10)
  }
  return arr;
}

let methods = {sort_human, sort_bubble, sort_quick}

/**
 * 测试指定次数
 * @param {number} times
 */
function test(length,times){
  let methdosArr = Object.keys(methods), timeMap = {};
  methdosArr.forEach(key=>timeMap[key] = []);

  while(times){
    times--;
    let arr = genRoundArr(length);
    methdosArr.forEach(key => {
      let start = Date.now();
      result = methods[key](arr.slice());
      let time = Date.now() - start;
      timeMap[key].push(time);
    });
  }
  methdosArr.forEach(key => {
    console.log(key, timeMap[key].join(','))
  });
}
test(10000, 10);

// console.log(sort_bubble([3,2,4,1,6,5,8,6,9,3,2]))
/**
  for(let i = 1; i < item.length; i++){
    arr[i] > arr[i-1] ? [arr[i-1],arr[i]] = [arr[i],arr[i-1]] : void(0);
  }
 */