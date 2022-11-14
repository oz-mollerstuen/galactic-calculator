export default class UserAge {
  constructor(age, mercAge, venAge, marsAge, jupAge, earthAge, mercTill, mercPast, venTill, venPast, marsTill, marsPast, jupTill, jupPast) {
    this.age = age;
    this.mercury = mercAge;
    this.venus = venAge;
    this.mars = marsAge;
    this.jupiter = jupAge;
    this.years = earthAge;
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

  findVenAge() {
    let venAge = 0;
    venAge = Math.round(this.age * .62);
    this.venus = venAge;
    return this.venus
  }

  findMarsAge() {
    let marsAge = 0
    marsAge = Math.round(this.age * 1.88);
    this.mars = marsAge;
    return this.mars
  }

  findJupAge() {
    let jupAge = 0
    jupAge = Math.round(this.age * 11.86)
    this.jupiter = jupAge;
    return this.jupiter
  }

earthYears() {
  let ages = this.age
  if(ages <= 85) {
    let deathIn = 0
    deathIn = Math.round(85 - ages);
    this.years = deathIn
    return deathIn;
  } else {
    let yearsPast = 0
    yearsPast = Math.round(ages - 85)
    this.years = yearsPast;
    return yearsPast
  }
}


}
