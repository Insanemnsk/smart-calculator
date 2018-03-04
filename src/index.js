class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.expression = initialValue;
  }

  add(number) {
    // your implementation
    this.expression += '+' + number;
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.expression += '-' + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.expression += '*' + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.expression += '/' + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.expression += '**' + number;
    return this;
  }

  valueOf(number) {
    return eval(this.expression);
  }
}

module.exports = SmartCalculator;
