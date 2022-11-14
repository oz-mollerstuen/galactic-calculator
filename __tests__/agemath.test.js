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

  test('On Earth, it should tell user how many years until they are 85, as well as how many till 85', () => {
    let input = new UserAge(36);
    expect(input.earthYears()).toEqual(49)
  })

  test('On Earth, it should tell user how many years until they are 85, as well as how many till 85', () => {
    let input = new UserAge(90);
    expect(input.earthYears()).toEqual(5)
  })

})


