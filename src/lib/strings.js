const stringMethods = {
  // get string length
  stringLength(string) {
    return string.length;
  },

  // upperCase string
  upperCase(string) {
    return string.toUpperCase();
  },

  // lowerCase string
  lowerCase(string) {
    return string.toLowerCase();
  },

  // capitalize string's first letter
  capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  // remove numbers from string
  removeNumbers(string) {
    return string.replace(/[0-9]/g, '');
  },

  // remove letters from string
  removeLetters(string) {
    return string.replace(/[a-zA-Z]/g, '');
  },

  // trim string
  trim(string) {
    return string.trim();
  },

  // reverse string
  reverse(string) {
    return string.split('').reverse().join('');
  }
};

export default stringMethods;
