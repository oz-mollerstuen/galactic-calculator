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
  if(ages <= 90) {
    let deathIn = 0
    deathIn = Math.round(90 - ages);
    this.years = deathIn
    return deathIn;
  } else {
    let yearsPast = 0
    yearsPast = Math.round(ages - 90)
    this.years = yearsPast;
    return yearsPast
  }
}

mercYears() {
  let agesMerc = this.mercury
  if(agesMerc <= 22) {
    let deathInMerc = 0
    deathInMerc = Math.round(22 - agesMerc);
    this.mercTill = deathInMerc
    return deathInMerc;
  } else {
    let yearsPastMerc = 0
    yearsPastMerc = Math.round(agesMerc - 22)
    this.mercTill = yearsPastMerc;
    return yearsPastMerc
  }
}

venYears() {
  let agesVen = this.venus
  if(agesVen <= 56) {
    let deathInVen = 0
    deathInVen = Math.round(56 - agesVen);
    this.venTill = deathInVen
    return deathInVen
  } else {
    let yearsPastVen = 0
    yearsPastVen = Math.round(agesVen - 56)
    this.venPast = yearsPastVen
    return yearsPastVen
  }
}

}
