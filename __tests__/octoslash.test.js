import OctoSlash from '../src/js/badies/cave/octoSlash.js';

describe('OctoSlash', () => {
  let octoSlash;  
  
  beforeEach(() => {
    octoSlash = new OctoSlash();
  });

  test('should great a wizard object.', () => {
    expect(octoSlash.name).toEqual('Octo Slash');
    expect(octoSlash.health).toEqual(12);
    expect(octoSlash.atk).toEqual(3);
    expect(octoSlash.exp).toEqual(10);
  });

  test('Should calculate attack amount', () => {
    expect(octoSlash.chance()).toBeLessThanOrEqual(100)
    
  });

  test('should choose amount of damage for atk', () => {
    expect(octoSlash.attack(30)).toEqual(3);
    expect(octoSlash.attack(60)).toEqual(1.5);
  });

  test('should decide whether character is dead', () => {
    expect(octoSlash.isDead()).toEqual(false);
    octoSlash.health = 0;
    expect(octoSlash.isDead()).toEqual(true);
  });
});