function quickCheck(arr, elem) {
  // Only change code below this line
  console.log('text: '+ arr.indexOf(elem) );
  return arr.indexOf(elem) > -1 ? true : false;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));