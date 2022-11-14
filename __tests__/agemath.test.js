import UserAge from "../src/js/UserAge";

describe('UserAge', () => {

  test('It should collect user info and make an object for the age', () => {
    let input = new UserAge(36);
    expect(input.age).toEqual(36);
  });

  test('It should use age imput to find age on Mercury', () => {
    let input = new UserAge(36);
    expect(input.findMercAge()).toEqual(8.6)
  })
})

