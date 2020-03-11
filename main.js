const cheatsheet = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

const romanInput = document.querySelector('#roman')
const numberInput = document.querySelector('#number')
const answer = document.querySelector('.answer')

const convertNumberToRoman = num => {
  if (num > 99999) return 'Invalid Input'

  let convertedRoman = ''

  for (const roman in cheatsheet) {
    const romanValue = cheatsheet[roman]

    while (romanValue <= num) {
      convertedRoman += roman
      num -= romanValue
    }
  }

  return convertedRoman
}

function convertRomanToNumber(roman) {
  roman = roman.toUpperCase()

  if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(roman))
    return 'Invalid Input'

  romanInput.value = roman
  let romanRegex = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g
  let individual

  let convertedNumber = 0

  while ((individual = romanRegex.exec(roman))) {
    convertedNumber += cheatsheet[individual[0]]
  }

  return !convertedNumber ? '' : convertedNumber
}

numberInput.addEventListener('keyup', e => {
  romanInput.value = convertNumberToRoman(numberInput.value)
  answer.textContent = romanInput.value
})

romanInput.addEventListener('keyup', e => {
  numberInput.value = convertRomanToNumber(romanInput.value)
  answer.textContent = numberInput.value
})
