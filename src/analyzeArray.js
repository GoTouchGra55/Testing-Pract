export function analyzeArray(array){
  let total = 0;
  let length = array.length;
  for (let i = 0; i < length; i++){
    total += array[i];
  }
  let average = total / length;
  let min = Math.min(...array);
  let max = Math.max(...array);
  
  return {average, min, max, length};
}