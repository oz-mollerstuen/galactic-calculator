import UserAge from "../src/js/UserAge";

describe('UserAge', () => {

  test('It should collect user info and make an object for the age', () => {
    let input = new UserAge(36);
    expect(input.age).toEqual(36);
  });

  test('It should use age imput to find age on Mercury', () => {
    let input = new UserAge(36);
    expect(input.findMercAge()).toEqual(9)
  })

  test('It should use age input to find age on Venus', () => {
    let input = new UserAge(36);
    expect(input.findVenAge()).toEqual(22)
  });

  test('It should use age input to find age on Mars', () => {
    let input = new UserAge(36);
    expect(input.findMarsAge()).toEqual(68)
  });

  test('It should use age input to find age on Jupiter', () => {
    let input = new UserAge(36);
    expect(input.findJupAge()).toEqual(427)
  });

  test('On Earth, it should tell user how many years until they are 90, as well as how many paast 90', () => {
    let input = new UserAge(36);
    expect(input.earthYears()).toEqual(54)
  })

  test('On Earth, it should tell user how many years until they are 90/how many past 90', () => {
    let input = new UserAge(95);
    expect(input.earthYears()).toEqual(5)
  })

  test('On Mercury, it should tell user how many years until they are 22/how many past 22', () => {
    let input = new UserAge(25, 6);
    expect(input.mercYears()).toEqual(16)
  })
 
  test('On Mercury, it should tell user how many years until they are 22, or how many past 22', () => {
    let input = new UserAge(25, 25);
    expect(input.mercYears()).toEqual(3)
  })

  test('On Venus, it should tell user how many years until they are 56, or how many past 56', () => {
    let input = new UserAge(25, 6, 16);
    expect(input.venYears()).toEqual(40)
  })
 
  test('On Venus, it should tell user how many years until they are 22/how many past 22', () => {
    let input = new UserAge(25, 6, 66);
    expect(input.venYears()).toEqual(10)
  })
  

})


