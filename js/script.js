console.clear();
const output = document.querySelector('[data-js="output"]'); 
const calc1 = document.querySelector('[data-js="calc1"]');

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
const renderCalcCalculations = document.createElement("ul");
const renderCalcCalculationsItem = document.createElement("li");

renderCalcOutputContent.setAttribute("data-js", "output");
renderCalcOutputContent.textContent = "IMAGINE NUMBERS";
renderCalcOutputContent
// console.log(renderCalcOutputContent);
renderCalcGrid.classList.add("awesomeGrid");
renderCalcGrid.setAttribute("data-js", "awesomeGrid");
renderCalcButton.classList.add("numbers");
renderCalcInput.classList.add("input");
renderCalcInputForm.setAttribute("data-js", "form2reset")
renderCalcInputField.setAttribute("data-js", "input__form")
// renderCalcInputField.value="HERE";

renderCalcLabel.textContent="INPUT";
// renderCalcButton.textContent="1";
renderCalcInputSubmit.setAttribute("type", "submit");
renderCalcInputSubmit.classList.add("submitButton");
renderCalcInputSubmit.textContent="CALCULATE";
renderCalcInputSubmit.addEventListener("click", (event)=> {
    event.preventDefault();
    const input2 = document.querySelector('[data-js="input__form"]');
    
    rechenInhalt = input2;
    // console.log("rechenInhalt: " + rechenInhalt.value);
    const output = document.querySelector('[data-js="output"]');
    output.textContent = rechenInhalt.value;
    // check();
    addCalculation();
});
renderCalcCalculations.classList.add("calculations");
renderCalcCalculations.setAttribute("data-js", "history");


// rechenInhalt ist der String, den es nun auf Signs zu untersuchen gilt
// wenn Rechenzeichen gefunden werden, muss der String vorher und nachher eingeteilt werden
// jeder Zahlenstring wird einer eigenen Variablen zugeordnet "a,b ,c , d ,..."
// die Rechenzeichen werden in seperatem Array gelagert und der entsprechenden Reihenfolge
// verwertet
//jedes Rechenzeichen wird einer Math Funktion zugewiesen

// const check = () => {
//     const x = rechenInhalt.value;
//     console.log(x + typeof x);
//     const split = x.split(" ");
//     console.log("splitted: " + split + typeof split);
//     let i;
//     console.log("_______");
//     for (i=1; i<split.length; i++)
//     {
//         console.log(i + "=" + split[i]);
//     };


    // if (x.includes("+")) console.log ("detected: +");
// }

const addCalculation = () => {

    const input2 = document.querySelector('[data-js="input__form"]');
    const history = document.querySelector('[data-js="history"]');
    const form = document.querySelector('[data-js="form2reset"]')
    if (history.innerHTML.includes("li")) {
        x= document.createElement("li");
        x.textContent=input2.value;
        renderCalcCalculations.append(x);
        form.reset();
        x=null;
        return;
    } else {
    
    x= renderCalcCalculationsItem;
    x.textContent = input2.value;
    renderCalcCalculations.append(x);
}
        
    //if li contains textContent create new li element and append to render calcCalculations

}

calc1.append(renderCalc);
renderCalc.append(renderCalcOutput);
renderCalcOutput.append(renderCalcOutputContent);
renderCalc.append(renderCalcGrid);
renderCalc.append(renderCalcInput);
renderCalcInput.append(renderCalcInputForm);
renderCalcInputForm.append(renderCalcLabel);
renderCalcLabel.append(renderCalcInputField);
renderCalcInputForm.append(renderCalcInputSubmit);
calc1.append(renderCalcCalculations);

const grid = document.querySelectorAll(".numbers");
// console.log("grid: " + grid);

const gridNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const gridSigns = ["=", "+", "-", "*", "/", "AC", "%", "(", ")"]

const gridField = document.querySelector('[data-js="awesomeGrid"]')

let i;

for (i=0; i<gridNumbers.length; i++) {
    const newGridTile = document.createElement("button");
    newGridTile.textContent=i;
    newGridTile.addEventListener("click", () =>
    {
        const input = document.querySelector('[data-js="input__form"]');
        const vorhanden = input.value;

        // console.log(newGridTile.textContent);
        const x = parseInt(newGridTile.textContent, 10);
        // console.log(x, typeof x);
        input.value=vorhanden + " " + x;
    })

    
    renderCalcGrid.append(newGridTile);
    }

    for (i=0; i<gridSigns.length; i++) {
        const newGridTile = document.createElement("button");
        newGridTile.textContent=`${gridSigns[i]}`;
        newGridTile.addEventListener("click", () =>
        {
            if (newGridTile.textContent==="AC") {
            const AC = () => {
                        // inputField = document.querySelector('[data-js="input__form"]');
                        // history = document.querySelector('[data-js="history"]');
                        form = document.querySelector('[data-js="form2reset"]');
                        // console.log(history.innerHTML);
                        form.reset();
                             }
            
            newGridTile.addEventListener("click", () => {
                AC();
            })
            } else {
            const input = document.querySelector('[data-js="input__form"]');
            const vorhanden = input.value;
            // console.log("vorhanden: " + vorhanden);
            // console.log("hinzuzufügen: " + newGridTile.textContent);
            // console.log("<---------->");
            const x = newGridTile.textContent;
            input.value=vorhanden + " " + x;
            }
        })
    
        
        renderCalcGrid.append(newGridTile);
        }

const mathAdd = (a, b) => {
    return output = a + b;
}

// const AC = () => {
//     // inputField = document.querySelector('[data-js="input__form"]');
//     // history = document.querySelector('(data-js="history"]');
//     form = document.querySelector('(data-js="form2reset"]');

//     form.reset();
// }

