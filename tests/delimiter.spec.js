const expect = require('chai').expect;
const delimiter = require('../index');

const one = [ 1 ];
const three = [ 1, 2, 3 ];
const two = [ 1, 2 ];

describe('delimiter', () => {

  it('should not mutate the array', () => {
    delimiter(two);
    expect(two).to.equal(two);
  });

  it('should not change single-item arrays', () => {
    expect(delimiter(one)).to.have.members(one);
    expect(delimiter(one, 'or')).to.have.members(one);
    expect(delimiter(one, null)).to.have.members(one);
    expect(delimiter(one, 'or', ';')).to.have.members(one);
    expect(delimiter(one, null, ';')).to.have.members(one);
  });

  describe('default', () => {

    it('should default to only serial for sets of 2', () => {
      expect(delimiter(two)).to.have.members([ 1, ' and ', 2 ]);
    });

    it('should default to comma and serial comma for sets of 3+', () => {
      expect(delimiter(three)).to.have.members([ 1, ', ', 2, ', and ', 3 ]);
    });
  });

  describe('custom serial', () => {

    it('should default to comma if there is no serial in sets of 2', () => {
      expect(delimiter(two, null)).to.have.members([ 1, ', ', 2 ]);
    });

    it('should default to comma if there is no serial in sets of 3+', () => {
      expect(delimiter(three, null)).to.have.members([ 1, ', ', 2, ', ', 3 ]);
    });

    it('should support a custom serial in sets of 2', () => {
      expect(delimiter(two, 'or')).to.have.members([ 1, ' or ', 2 ]);
    });

    it('should support a custom serial in sets of 3+', () => {
      expect(delimiter(three, 'or')).to.have.members([ 1, ', ', 2, ', or ', 3 ]);
    });
  });

  describe('custom delimiter', () => {

    it('should support a custom delimiter if there is no serial in sets of 2', () => {
      expect(delimiter(two, null, ';')).to.have.members([ 1, '; ', 2 ]);
    });

    it('should support a custom delimiter in sets of 3+', () => {
      expect(delimiter(three, 'and', ';')).to.have.members([ 1, '; ', 2, '; and ', 3 ]);
    });
  });
});
