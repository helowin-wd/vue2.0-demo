function compute (method, fNumber, sNumber) {
  switch (method) {
    case 'plus':
      return fNumber + sNumber
      break;
    case 'minus':
      return fNumber - sNumber
      break;
    case 'mul':
      return fNumber * sNumber
      break;
    case 'div':
      return fNumber / sNumber
      break;

    default:
      break;
  }
}

export {
  compute
}

