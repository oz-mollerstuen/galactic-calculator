import UserAge from "../src/js/UserAge";

describe('UserAge', () => {

  test('It should collect user info and make an object for the age', () => {
    let input = new UserAge(36);
    expect(input.age).toEqual(36);
  });
})