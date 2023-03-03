console.clear()
// variables / querySelectors

const calc1 = document.querySelector('[data-js="calc1"]')
const gridNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const gridSigns = ['=', '+', '-', '*', '/', 'AC', '%', '(', ')']
let i
let sum
let sign
let firstValue
let secondValue

// let inputObject
// render html variabls
const renderCalc = document.createElement('section')
const renderCalcOutput = document.createElement('h1')
const renderCalcOutputContent = document.createElement('output')
const renderCalcGrid = document.createElement('section')
const renderCalcButton = document.createElement('button')
const renderCalcInput = document.createElement('section')
const renderCalcInputForm = document.createElement('form')
const renderCalcLabel = document.createElement('label')
const renderCalcInputField = document.createElement('input')
const renderCalcInputSubmit = document.createElement('button')
const historyList = document.createElement('div')
const historyListUl = document.createElement('ul')
const historyListLi = document.createElement('li')

// render html css
renderCalcOutput.setAttribute('data-js', 'output')
renderCalcOutput.textContent = 'what'

renderCalcGrid.classList.add('awesomeGrid')
renderCalcGrid.setAttribute('data-js', 'awesomeGrid')
renderCalcButton.classList.add('numbers')
renderCalcInput.classList.add('input')
renderCalcInputForm.setAttribute('data-js', 'form2reset')
renderCalcInputField.setAttribute('data-js', 'input__form')

renderCalcLabel.textContent = 'INPUT'
renderCalcInputSubmit.setAttribute('type', 'submit')
renderCalcInputSubmit.classList.add('submitButton')
renderCalcInputSubmit.textContent = 'CALCULATE'
historyList.classList.add('historyButton')
historyList.setAttribute('data-js', 'history')
historyList.textContent = 'history: '
historyListUl.classList.add('historyListUl')
historyListLi.classList.add('historyListLi')

// render html structure
calc1.append(renderCalc)
renderCalc.append(renderCalcOutput)
renderCalcOutput.append(renderCalcOutputContent)
renderCalc.append(renderCalcGrid)
renderCalc.append(renderCalcInput)
renderCalcInput.append(renderCalcInputForm)
renderCalcInputForm.append(renderCalcLabel)
renderCalcLabel.append(renderCalcInputField)
renderCalcInputForm.append(renderCalcInputSubmit)
renderCalcGrid.append(historyList)
historyList.append(historyListUl)

// add numbers
for (i = 0; i < gridNumbers.length; i++) {
  const newGridTile = document.createElement('button')
  newGridTile.textContent = i
  newGridTile.addEventListener('click', () => {
    const input = document.querySelector('[data-js="input__form"]')
    const vorhanden = input.value
    const x = parseInt(newGridTile.textContent, 10)
    input.value = vorhanden + x
  })

  renderCalcGrid.append(newGridTile)
}
/// add signs
for (i = 0; i < gridSigns.length; i++) {
  const newGridTile = document.createElement('button')
  newGridTile.textContent = `${gridSigns[i]}`
  newGridTile.addEventListener('click', (event) => {
    if (newGridTile.textContent === 'AC') {
      const AC = () => {
        const form = document.querySelector('[data-js="form2reset"]')
        form.reset()
      }

      newGridTile.addEventListener('click', () => {
        AC()
      })
    } else {
      const input = document.querySelector('[data-js="input__form"]')
      const vorhanden = input.value
      const x = newGridTile.textContent
      input.value = vorhanden + x
    }
  })

  renderCalcGrid.append(newGridTile)
}

// Functions

const arrayThatInput = () => {
  const input = document.querySelector('[data-js="input__form"]')

  const inputString = input.value
  console.log(typeof inputString, inputString)

  const inputArray = Array.from(inputString)
  console.log(typeof inputArray, inputArray)
  const operators = ['+', '-', '*', '/']

  const operatorIndexes = operators.map((operator) =>
    inputArray.indexOf(operator)
  )

  if (operatorIndexes[0] >= 0) {
    console.log('plus: ', operatorIndexes[0])
    sign = operatorIndexes[0]
    sliceValuesInTwo()
    sum = parseInt(firstValue, 10) + parseInt(secondValue, 10)
    console.log('sum', sum)
  } else if (operatorIndexes[1] > 0) {
    console.log('minus ', operatorIndexes[1])
    sign = operatorIndexes[1]
    sliceValuesInTwo()
    sum = parseInt(firstValue, 10) - parseInt(secondValue, 10)
    console.log(sum)
  } else if (operatorIndexes[2] > 0) {
    console.log('multiplicator ', operatorIndexes[2])
    sign = operatorIndexes[2]
    sliceValuesInTwo()
    sum = parseInt(firstValue, 10) * parseInt(secondValue, 10)
    console.log(sum)
  } else if (operatorIndexes[3] > 0) {
    console.log('divisor ', operatorIndexes[3])
    sign = operatorIndexes[3]
    sliceValuesInTwo()
    sum = parseInt(firstValue, 10) / parseInt(secondValue, 10)
    console.log(sum)
  }

  console.log('signAbfrage: ', operatorIndexes)
  function sliceValuesInTwo () {
    const sliceArr = inputArray.slice(0, sign)
    console.log('sliced', sliceArr)
    const sliceArr2 = inputArray.slice(sign + 1, inputArray.length)
    firstValue = sliceArr.reduce((acc, currValue) => {
      return acc + currValue
    })

    secondValue = sliceArr2.reduce((acc, currValue) => {
      return acc + currValue
    })
  }
}

const addCalculation = () => {
  // const input2 = document.querySelector('[data-js="input__form"]')
  const history = document.querySelector('[data-js="history"]')
  const form = document.querySelector('[data-js="form2reset"]')
  if (history.innerHTML.includes('li')) {
    let x = document.createElement('li')
    x.classList.add('historyListLi')
    x.textContent = sum
    historyList.append(x)
    form.reset()
    x = null
  } else {
    const x = historyListLi
    x.textContent = sum
    historyList.append(x)
    form.reset()
  }
}

// eventListeners

renderCalcInputSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  const output = document.querySelector('[data-js="output"]')
  console.log('output', output)
  arrayThatInput()
  addCalculation()
  console.log(sum)
  output.textContent = sum
})
