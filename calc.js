var button = document.getElementById("calcBtn")


  // function activated on click of calc button
button.addEventListener("click", calcCosts);


//function to show remaining hours
function remText(remDiv, type, remVar) {
  remDiv.innerHTML =`<span>${type}</span> hours remaining: <span>${remVar}</span>`;
}

function totCostText(totDiv, type, totVar) {
    totDiv.innerHTML =`<span>${type}</span>: $<span>${totVar}</span>`;
}



tachVar = 1;

//function for tach checkbox
function isChecked() {
    if (tachTrue.checked == true){
        tachVar = 0.8;
      } else {
         tachVar = 1;
      }
    return tachVar;
}


// define function
function calcCosts() {

// copy & paste hour variable
  let dual = parseFloat(document
      .querySelector("#dual").value);

  let solo = parseFloat(document
      .querySelector("#solo").value);

  let study = parseFloat(document
      .querySelector("#study").value);

  let instr = parseFloat(document
      .querySelector("#instr").value);

  let night = parseFloat(document
      .querySelector("#night").value);

  let dualxc = parseFloat(document
      .querySelector("#dualxc").value);

  let soloxc = parseFloat(document
      .querySelector("#soloxc").value);

// copy & paste rate variable
  let dualRate = parseFloat(document
      .querySelector("#dualRate").value);

  let soloRate = parseFloat(document
      .querySelector("#soloRate").value);

  let groundRate = parseFloat(document
      .querySelector("#groundRate").value);

  let taxRate = parseFloat(document
      .querySelector("#taxRate").value) * 0.01 + 1 ;


  let result = document.querySelector("#result");


// calculate total cost, copy paste for each var
  let dualRem = (200 - dual*10 - night*10 - instr*10 - night*10 - dualxc*10) / 10;
  if (dualRem < 0) {
      dualRem = 0;
  }
  remText(HdualRem, "Dual", dualRem)
  let dualCost = dualRem * dualRate * taxRate;


  let soloRem = (50 - solo*10 - soloxc*10) / 10;
  if (soloRem < 0) {
      soloRem = 0;
  }
  remText(HsoloRem, "Solo", soloRem)
  let soloCost = soloRem * soloRate * taxRate;


  let testRem = (30 - study*10) / 10;
  if (testRem < 0) {
      testRem = 0;
  }
  remText(HstudyRem, "Test prep", testRem)
  let testCost = testRem * groundRate;


  let instrRem = (30 - instr*10) / 10;
  if (instrRem < 0) {
      instrRem = 0;
  }
  remText(HinstrRem, "Instrument", instrRem)
  let instrCost = instrRem * dualRate * taxRate;


  let nightRem = (30 - night*10) / 10;
  if (nightRem < 0) {
      nightRem = 0;
  }
  remText(HnightRem, "Night", nightRem)
  let nightCost = nightRem * dualRate * taxRate;


  let dualxcRem = (30 - dualxc*10) / 10;
  if (dualxcRem < 0) {
      dualxcRem = 0;
  }
  remText(HdualxcRem, "Dual XC", dualxcRem)
  let dualxcCost = dualxcRem * dualRate * taxRate;


  let soloxcRem = (50 - soloxc*10) / 10;
  if (soloxcRem < 0) {
      soloxcRem = 0;
  }
  remText(HsoloxcRem, "Solo XC", soloxcRem)
  let soloxcCost = soloxcRem * soloRate * taxRate;



  isChecked()
    

  let groundSch = parseFloat(document.getElementById('grSch').value);
  let writtenFee = parseFloat(document.getElementById('writFee').value);
  let headCost = parseFloat(document.getElementById('headset').value);
  let medExam = parseFloat(document.getElementById('medExam').value);
  let dpeFee = parseFloat(document.getElementById('dpeFee').value);
  let studCost = parseFloat(document.getElementById('studyMat').value);
    
  let varOneTimeCost = groundSch + writtenFee + headCost + medExam + dpeFee + studCost;
  totCostText(oneTimeCost, "Total one-time costs", varOneTimeCost);
    
  let varHoursCost = (((dualCost + soloCost + testCost + instrCost + nightCost + dualxcCost + soloxcCost) * 10) * tachVar) / 10;
  totCostText(hoursCost, "Cost of remaining hours", varHoursCost);

  let totTrCost = varOneTimeCost + varHoursCost;
  totCostText(totCost, "Total cost of PPL", totTrCost);

  return totTrCost;

}




var slider = document.getElementById("slider");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 



var timeBtn = document.getElementById("timeBtn");

timeBtn.addEventListener("click", calcTime);



// 1 = 1.5:1
// 2 = 2:1
// 3 = 3:1
// 4 = 5:1
// 5 = 7:1
// To get total dual: flights/week ratio, 30/num + 30, float down


var dualHrs = 30;

function estDual(){
    var sliVal = parseFloat(slider.value)

    if (sliVal==1){
        return 20;
    }
    else if (sliVal==2){
        return 15;
    }
    else if (sliVal==3){
        return 10;
    }
    else if (sliVal==4){
        return 5;
    }
    else if (sliVal==5){
        return 3;
    }
}


function calcTime(){

    let newDualHrs = estDual();
    console.log(newDualHrs)

    let dualRate = parseFloat(document
        .querySelector("#dualRate").value);
    let taxRate = parseFloat(document
      .querySelector("#taxRate").value) * 0.01 + 1 ;
    let staticCost = calcCosts()
    var endNum = ((document.getElementById("endSlide")).value * 0.001) + 1;

    let extLesCost = newDualHrs * dualRate * taxRate;
    console.log(extLesCost)

    let realEst = staticCost + extLesCost;
    console.log(realEst)

    let guEst = parseFloat((realEst * endNum).toFixed(2));
    console.log(endNum)
    console.log(guEst)

    totCostText(estCost, "Estimated cost of training", guEst);
    return guEst
}