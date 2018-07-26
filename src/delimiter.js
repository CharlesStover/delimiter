const delimiter = (arr, serial = 'and', d = ',') => {
  const length = arr.length;
  const lastIndex = length - 1;
  const serialIndex = length - 2;
  const dSpace = d + ' ';
  const serialSpace =
    serial === null ?
      ' ' :
      serial + ' ';
  return arr.reduce(
    (accumulator, current, index) => {
      accumulator.push(current);
      if (index < lastIndex) {
        accumulator.push(
          index === serialIndex &&
          serial !== null ?
            length === 2 ?
              ' ' + serialSpace :
              dSpace + serialSpace :
            dSpace
        );
      }
      return accumulator;
    },
    []
  );
};

module.exports = delimiter;
