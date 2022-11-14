export default class UserAge {
  constructor(age, mercAge, venAge, marsAge, jupAge, earthAge, mercTill, mercPast, venTill, venPast, marsTill, marsPast, jupTill, jupPast) {
    this.age = age;
    this.mercury = mercAge;
    this.venus = venAge;
    this.mars = marsAge;
    this.jupiter = jupAge;
    this.earth = earthAge;
    this.mercTill = mercTill;
    this.mercPast = mercPast;
    this.venTill = venTill;
    this.venPast = venPast
    this.marsTill = marsTill;
    this.marsPast = marsPast;
    this.jupTill = jupTill;
    this.jupPast = jupPast
  }

  findMercAge() {
    let mercAge = 0
    mercAge = Math.round(this.age * .24);
    this.mercury = mercAge
    return this.mercury
  }
  
}
