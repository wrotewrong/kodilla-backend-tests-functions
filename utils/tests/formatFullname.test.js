const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if the arg is missing', () => {
    expect(formatFullname()).to.equal('Error');
  });
  it('should return an error if the arg is not a string', () => {
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(123)).to.equal('Error');
    expect(formatFullname(() => {})).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
  });
  it('should return an error if the arg does not contain exactly 2 words', () => {
    expect(formatFullname('Andrzej')).to.equal('Error');
    expect(formatFullname('Andrzej Popiołek Test')).to.equal('Error');
  });

  it('should return name and lastname both starting with capital letters, other letters should be lowercase', () => {
    expect(formatFullname('aNDRzej pOPIołek')).to.equal('Andrzej Popiołek');
    expect(formatFullname('ANDRzej pOPIołek')).to.equal('Andrzej Popiołek');
    expect(formatFullname('aNDRzej POPIołek')).to.equal('Andrzej Popiołek');
    expect(formatFullname('ANDRzej POPIołek')).to.equal('Andrzej Popiołek');
  });
});
