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
  let oldAge = document.getElementById('input2').value
  if(ages <= oldAge) {
    let deathIn = 0
    deathIn = Math.round(oldAge - ages);
    this.years = deathIn
    return "Out with the old, in with the new! " + deathIn + " Earth years until your space-hearse is ready!";
  } else {
    let yearsPast = 0
    yearsPast = Math.round(ages - oldAge)
    this.years = yearsPast;
    return "It seems you have outlived our expectations by " + yearsPast + " Earthling years"
  }
}

mercYears() {
  let agesMerc = this.mercury
  let oldAge = document.getElementById('input2').value
  let oldAge1 = Math.round(oldAge * .24)
  if(agesMerc <= oldAge1) {
    let deathInMerc = 0
    deathInMerc = Math.round(oldAge1 - agesMerc);
    this.mercTill = deathInMerc
    return "Please mark the date, in " + deathInMerc + " Mercury years you will be recycled."
  } else {
    let yearsPastMerc = 0
    yearsPastMerc = Math.round(agesMerc - oldAge1)
    this.mercTill = yearsPastMerc;
    return "Interesting... you've survived " + yearsPastMerc + " Mercury years longer than expected..."
  }
}

venYears() {
  let agesVen = this.venus
  let oldAge = document.getElementById('input2').value
  let oldAge1 = Math.round(oldAge * .62)
  if(agesVen <= oldAge1) {
    let deathInVen = 0
    deathInVen = Math.round(oldAge1 - agesVen);
    this.venTill = deathInVen
    return "We are excited to celebrate your 'moving on' in " + deathInVen + " Venus years!"
  } else {
    let yearsPastVen = 0
    yearsPastVen = Math.round(agesVen - oldAge1)
    this.venPast = yearsPastVen
    return "We don't know how, but you've lived " + yearsPastVen + " Venus years longer than expected!"
  }
}

marsYears() {
  let agesMars = this.mars
  let oldAge = document.getElementById('input2').value
  let oldAge1 = Math.round(oldAge * 1.88)
  if(agesMars <= oldAge1) {
    let deathInMars = 0
    deathInMars = Math.round(oldAge1 - agesMars);
    this.marsTill = deathInMars
    return "It's been a tough life, but look forward to passing in " + deathInMars + " Mars years! Hurray!"
  } else {
    let yearsPastMars = 0
    yearsPastMars = Math.round(agesMars - oldAge1)
    this.marsPast = yearsPastMars
    return "By our calculations, you've made it " + yearsPastMars + " Mars years past your determined passing day."
  }
}

jupYears(){
  let agesJup = this.jupiter
  let oldAge = document.getElementById('input2').value
  let oldAge1 = Math.round(oldAge * 11.86)
  if(agesJup <= 1067) {
    let deathInJup = 0
    deathInJup = Math.round(oldAge1 - agesJup)
    this.jupTill = deathInJup
    return "With our collective predictions you may no longer be around in " + deathInJup + " Jupiter years!"
  } else {
    let yearsPastJup = 0
    yearsPastJup = Math.round(agesJup - oldAge1)
    this.jupPast = yearsPastJup
    return "You've made it longer than your expiration date by: " + yearsPastJup + " Jupiter years!"
  }
}

}
