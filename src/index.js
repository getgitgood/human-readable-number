module.exports = function toReadable (number) {
  const arr = {
    1 : 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',

    'zero': 'zero',
  }

  const toStr = number.toString();

  const hungreds = Math.floor(number / 100);
  const dozens = Math.floor((number - hungreds * 100) / 10);
  const units = number % 100 % 10;
  const arrHungred = 100;
  
  let readNum = String();

  const minLength = () => arr[units];

  const midLength = () => {
    if (dozens > 1 && units > 0) {
      return readNum = `${arr[dozens + '0']}`
    } else if (dozens == 1 && units >= 0) {
      return readNum = `${arr[String(dozens) + units]}`;
    } else if (dozens >= 1 && units === 0) {
      return readNum = `${arr[dozens + String(units)]}`;
    }
  }

  const maxLength = () => {
    return readNum = `${arr[hungreds]} ${arr[arrHungred]}`
    }

  if (toStr.length > 2) {
    if (dozens >= 2 && units > 0) {
      return `${maxLength()} ${midLength()} ${minLength()}`
    } else if (dozens > 0) {
      return `${maxLength()} ${midLength()}`
    } else if (dozens === 0 && units === 0) {
      return `${maxLength()}`
    } else {
      return `${maxLength()} ${minLength()}`
    } 
  } else if (toStr.length > 1) {
    if (dozens >= 2 && units > 0) {
      return `${midLength()} ${minLength()}`
    } else {
      return `${midLength()}`
    }
  } else if (toStr.length === 1) {

    if (number >= 1) {
      return `${minLength()}`
    } else {
      return `${arr['zero']}`
    }
  }
}

const toReadable = function(number) {
  const arr = {
    1 : 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifthteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',

    'zero': 'zero',
  }

  const toStr = number.toString();

  const hungreds = Math.floor(number / 100);
  const dozens = Math.floor((number - hungreds * 100) / 10);
  const units = number % 100 % 10;
  const arrHungred = 100;
  
  let readNum = String();

  const minLength = () => arr[units];

  const midLength = () => {
    if (dozens > 1 && units > 0) {
      return readNum = `${arr[dozens + '0']}`
    } else if (dozens == 1 && units >= 0) {
      return readNum = `${arr[String(dozens) + units]}`;
    } else if (dozens >= 1 && units === 0) {
      return readNum = `${arr[dozens + String(units)]}`;
    }
  }

  const maxLength = () => {
    return readNum = `${arr[hungreds]} ${arr[arrHungred]}`
    }

  if (toStr.length > 2) {
    if (dozens >= 2 && units > 0) {
      return `${maxLength()} ${midLength()} ${minLength()}`
    } else if (dozens > 0) {
      return `${maxLength()} ${midLength()}`
    } else if (dozens === 0 && units === 0) {
      return `${maxLength()}`
    } else {
      return `${maxLength()} ${minLength()}`
    } 
  } else if (toStr.length > 1) {
    if (dozens >= 2 && units > 0) {
      return `${midLength()} ${minLength()}`
    } else {
      return `${midLength()}`
    }
  } else if (toStr.length === 1) {

    if (number >= 1) {
      return `${minLength()}`
    } else {
      return `${arr['zero']}`
    }
  }
}
