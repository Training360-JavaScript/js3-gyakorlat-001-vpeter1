const removeDuplicatesFromArray = (arr1 = [0]) => {
  const arr2 = arr1.filter((element, index) => {
    return arr1.indexOf(element) === index;
});
return arr2
}





export default removeDuplicatesFromArray
