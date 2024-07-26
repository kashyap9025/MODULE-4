function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
checkPositive([1, 2, 3, -4, 5]);