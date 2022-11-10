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
    expect(wizard.exp).toEqual(0);
    expect(wizard.location).toEqual('');
  });

  test('Should calculate attack amount', () => {
    expect(wizard.chance()).toBeLessThanOrEqual(100)
    
  });

  test('should choose amount of damage for atk', () => {
    expect(wizard.attack(50)).toEqual(5);
    expect(wizard.attack(90)).toEqual(2.5);
  });

  test('should choose amount of damage for mag', () => {
    expect(wizard.magic(70)).toEqual(8);
    expect(wizard.magic(90)).toEqual(4);
  });

  test('should decide whether character is dead', () => {
    expect(wizard.isDead()).toEqual(false);
    wizard.health = 0;
    expect(wizard.isDead()).toEqual(true);
  });
});

