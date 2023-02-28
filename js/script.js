console.clear();
//variables / querySelectors
const output = document.querySelector('[data-js="output"]'); 
const calc1 = document.querySelector('[data-js="calc1"]');
const grid = document.querySelectorAll(".numbers");
const gridField = document.querySelector('[data-js="awesomeGrid"]')
const gridNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const gridSigns = ["=", "+", "-", "*", "/", "AC", "%", "(", ")"]
let i;
inputObject = [];
//render html variabls
const renderCalc = document.createElement("section");
const renderCalcOutput = document.createElement("h1");
const renderCalcOutputContent = document.createElement("output");
const renderCalcGrid = document.createElement("section");
const renderCalcButton = document.createElement("button");
const renderCalcInput = document.createElement("section");
const renderCalcInputForm = document.createElement("form");
const renderCalcLabel = document.createElement("label");
const renderCalcInputField = document.createElement("input");
const renderCalcInputSubmit = document.createElement("button");
// const renderCalcCalculations = document.createElement("ul");
// const renderCalcCalculationsItem = document.createElement("li");
const historyList = document.createElement("div");
const historyListUl = document.createElement("ul");
const historyListLi = document.createElement("li");


//render html css
renderCalcOutputContent.setAttribute("data-js", "output");
renderCalcOutputContent.textContent = "IMAGINE NUMBERS";
renderCalcOutputContent
renderCalcGrid.classList.add("awesomeGrid");
renderCalcGrid.setAttribute("data-js", "awesomeGrid");
renderCalcButton.classList.add("numbers");
renderCalcInput.classList.add("input");
renderCalcInputForm.setAttribute("data-js", "form2reset")
renderCalcInputField.setAttribute("data-js", "input__form")

renderCalcLabel.textContent="INPUT";
renderCalcInputSubmit.setAttribute("type", "submit");
renderCalcInputSubmit.classList.add("submitButton");
renderCalcInputSubmit.textContent="CALCULATE";



// renderCalcCalculations.classList.add("calculations");
// renderCalcCalculations.setAttribute("data-js", "history");
historyList.classList.add("historyButton");
historyList.setAttribute("data-js", "history")
historyList.textContent = "history: ";
historyListUl.classList.add("historyListUl");
historyListLi.classList.add("historyListLi");



// render html structure
calc1.append(renderCalc);
renderCalc.append(renderCalcOutput);
renderCalcOutput.append(renderCalcOutputContent);
renderCalc.append(renderCalcGrid);
renderCalc.append(renderCalcInput);
renderCalcInput.append(renderCalcInputForm);
renderCalcInputForm.append(renderCalcLabel);
renderCalcLabel.append(renderCalcInputField);
renderCalcInputForm.append(renderCalcInputSubmit);
// calc1.append(renderCalcCalculations);
renderCalcGrid.append(historyList);
historyList.append(historyListUl);


// add numbers
for (i=0; i<gridNumbers.length; i++) {
    const newGridTile = document.createElement("button");
    newGridTile.textContent=i;
    newGridTile.addEventListener("click", () =>
    {
        const input = document.querySelector('[data-js="input__form"]');
        const vorhanden = input.value;
        const x = parseInt(newGridTile.textContent, 10);
        input.value=vorhanden + x;
    })

    
    renderCalcGrid.append(newGridTile);
    }
/// add signs
    for (i=0; i<gridSigns.length; i++) 
    {
        const newGridTile = document.createElement("button");
        newGridTile.textContent=`${gridSigns[i]}`;
        newGridTile.addEventListener("click", (event) =>
        {
            if (newGridTile.textContent==="AC") {
            const AC = () => {
                        
                        form = document.querySelector('[data-js="form2reset"]');
                        form.reset();
                             }
            
            newGridTile.addEventListener("click", () => {
                AC();
            })
            } else {
            const input = document.querySelector('[data-js="input__form"]');
            const vorhanden = input.value;
            const x = newGridTile.textContent;
            input.value=vorhanden + x;
            }
        })
        
        renderCalcGrid.append(newGridTile);
      
        
    }

   
       
// Functions

const arrayThatInput = () => {
    const input = document.querySelector('[data-js="input__form"]');
    const a = input.value;
    const xa = a.split(' ').join('').split('');
    let xax = Array.from(xa);
    for (i=1; i<xa.length; i++)
    console.log(i);
    console.log(typeof xax, xax);
    return inputObject = xax;

                        }
                        

                        const iterateArr =() => {
                            console.clear();
                            let num = 0;
                            let sign = "w";
                            inputObject.forEach(element => {
                                
                        if (!isNaN(element)) {
                            num += element;
                            numx = num.slice(1);
                            
                        }
                        if (isNaN(element)) {
                        sign = element;
                        
                        if (sign === "+") {
                            let num2;
                            partNachPluszeichen = inputObject.indexOf(sign);
                            num2 = inputObject.slice(partNachPluszeichen);
                            console.log(num2 , "num2")
                            num3 = num2.shift();
                            num2 = num2.join("");
                            console.log ("numJoined: ", num2)
                            console.log("num: ", num);
                            console.log("num2: ", num2);
                            console.log("numx: ", numx);
                            console.log("num3: ", num3);
                            sum = parseInt(num, 10) + parseInt(num2, 10) ;
                            console.log(sum);
                            return sum;
                        };
                        // calcSnippet = num + sign;
                        // sliceThis = calcSnippet.length;
                        // sliceThis--;
                        // console.log("sliceTHis: ", sliceThis);
                        // sliced = inputObject.slice(sliceThis);
                        // console.log(sliced);
                        // return calculateThis = calcSnippet + sliced;
                        }
                                // if (!isNaN(element)) console.log("number", element)
                                // else if (isNaN(element))console.log("sign", element)
                            });
                         }
                    
                        
const addCalculation = () => {

                               const input2 = document.querySelector('[data-js="input__form"]');
                               const history = document.querySelector('[data-js="history"]');
                               const form = document.querySelector('[data-js="form2reset"]')
                               if (history.innerHTML.includes("li")) 
                               {
                                   x= document.createElement("li");
                                   x.classList.add("historyListLi");
                                   x.textContent=input2.value;
                                   historyList.append(x);
                                   form.reset();
                                   x=null;
                                   return;
                               } else {

                               x= historyListLi;
                               x.textContent = input2.value;
                               historyListUl.append(x);
                               form.reset();
                                }

                        }

 // eventListeners

 renderCalcInputSubmit.addEventListener("click", (event)=> {
    event.preventDefault();
    const input2 = document.querySelector('[data-js="input__form"]');
    
    rechenInhalt = input2;
    const output = document.querySelector('[data-js="output"]');
    output.textContent = rechenInhalt.value;
    arrayThatInput();
    iterateArr();
    addCalculation();
    output.textContent = sum;
    // console.log("Teil der Rechnung: ", calcSnippet);
    // console.log("calculationInput: ", calculateThis, typeof calculateThis)
});