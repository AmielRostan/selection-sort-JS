

function selectionSort(arr) {

  // Copy the original array
  let unSorted = arr.slice();
  // Create an array to store the sorted values
  const sorted = [];
  // While the array is not empty...
  while(unSorted.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let min = unSorted[0];
    let index = 0;
    for(let i = 1; i  < unSorted.length; i++) {
      if(unSorted[i] < min) {
        min = unSorted[i];
        index = i;
      }
    }
    // Save and remove the value at the min index
    unSorted.splice(index, 1);
    // Add the min value to the end of the sorted array
    sorted.push(min);
  }

  return sorted;

}



function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;
  // Repeat while the unsorted half is not empty:
  while(arr.length - divider > 0) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let index = divider;
    let min = arr[divider];
    for(let i = divider; i < arr.length; i++) {
      // Save the min value
      if(min > arr[i]) {
        index = i;
        min = arr[i];
      }
    }

    // Shift every unsorted value to the left of the min value to the right by 1
    // Put the min value at the divider
    arr.splice(index, 1);
    arr.splice(divider, 0, min);
    // Increment the divider and repeat
    divider++;
  }
}


module.exports = [selectionSort, selectionSortInPlace];
