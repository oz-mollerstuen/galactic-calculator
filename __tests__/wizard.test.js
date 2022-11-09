 import Wizard from '../src/js/wizard.js';

describe('Wizard', () => {
  let wizard;  
  
  beforeEach(() => {
    wizard = new Wizard();
  });

  test('should great a wizard object.', () => {
    expect(wizard.health).toEqual(20);
    expect(wizard.atk).toEqual(5);
    expect(wizard.mag).toEqual(8);
  });

test('Should calculate attack amount', () => {
  expect(wizard.chance()).toBeLessThanOrEqual(100)
  
});

test('should choose amount of damage for hit', () => {
  expect(wizard.attack(70)).toEqual(5);
  expect(wizard.attack(90)).toEqual(2.5);
})

});

