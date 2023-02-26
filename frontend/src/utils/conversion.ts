// SQLITE need to have 0 to false and 1 to true
export const getRightBooleanFormat = (boolean: boolean | number) => {
  if (boolean === true || boolean === 1) {
    return true;
  }
  if (boolean === false || boolean === 0) {
    return false;
  }

  throw Error(`Unknown ${boolean}`);
};
