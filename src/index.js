module.exports = function toReadable (number) {
  let numberArr = number.toString().split(''),
  	  n = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  	  d = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  	  r = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
  	  str = '';
  switch (numberArr.length) {
  	case 1: {
  		str += n[numberArr[0]];
  		break;
  	}
  	case 2: {
  		if (number > 10 && number < 20) {
  			str += d[numberArr[1] - 1];
  		} else if (+numberArr[1] === 0) {
  			str += r[numberArr[0] - 1];
  		} else {
  			str += r[numberArr[0] - 1] + ' ' + n[numberArr[1]];
  		}
  		break;
  	}
  	case 3: {
  		if (+numberArr[1] === 0 && +numberArr[2] === 0) {
  			str += n[numberArr[0]] + ' hundred';
  		} else if (+numberArr[2] === 0) {
  			str += n[numberArr[0]] + ' hundred ' + r[numberArr[1] - 1];
  		} else if (+numberArr[1] === 1) {
  			str += n[numberArr[0]] + ' hundred ' + d[numberArr[2] - 1];
  		} else if (+numberArr[1] === 0) {
  			str += n[numberArr[0]] + ' hundred ' + n[numberArr[2]];
  		} else {
  			str += n[numberArr[0]] + ' hundred ' + r[numberArr[1] - 1] + ' ' + n[numberArr[2]];
  		}
  		break;
  	}
  	default: {
  		break;
  	}
  }
  return str;
}
