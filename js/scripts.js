var pCount = 0;
var eCount = 0;
var cCount = 0;
var kCount = 0;
var pEXE = 0;
var eEXE = 0;
var cEXE = 0;
var kEXE = 0;

var user = false;

const scriptURL = 'https://script.google.com/macros/s/AKfycbxg8N8_sDHq2thV5FEhM259wBwo-XVZPoNynh49zAe6G4T5InSyArakJWtZbOtjs7Jd/exec'

async function getInfo() {
    var who = prompt("Who are you?");
    let response = await fetch(scriptURL, {method: 'GET'});
    let responseText = await response.text();
    
   var lst = responseText.split(',');
   pCount = parseInt(lst[0]);
   eCount = parseInt(lst[1]);
   cCount = parseInt(lst[2]);
   kCount = parseInt(lst[3]);
   pEXE = parseInt(lst[4]);
   eEXE = parseInt(lst[5]);
   cEXE = parseInt(lst[6]);
   kEXE = parseInt(lst[7]);
   document.getElementById('pCount').innerHTML=pCount;
   document.getElementById('pEXE').innerHTML=pEXE;
   document.getElementById('eCount').innerHTML=eCount;
   document.getElementById('eEXE').innerHTML=eEXE;
   document.getElementById('cCount').innerHTML=cCount;
   document.getElementById('cEXE').innerHTML=cEXE;
   document.getElementById('kCount').innerHTML=kCount;
   document.getElementById('kEXE').innerHTML=kEXE;
   chart.data.datasets[0].data[0] = pCount;
   chart.data.datasets[0].data[1] = eCount;
   chart.data.datasets[0].data[2] = cCount;
   chart.data.datasets[0].data[3] = kCount;
   chart.update();
   pw = lst[8];
   if (who == pw) { user = true; }
   else { alert("You are a viewer.") }
}

window.onload = getInfo;

async function setInfo() {
    const rawResponse = await fetch(scriptURL, {
        redirect: "follow",
        method: 'POST',
        // mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify({pCount: pCount, eCount: eCount, cCount: cCount, kCount: kCount,
                                pEXE: pEXE, eEXE: eEXE, cEXE: cEXE, kEXE: kEXE})
    });
    // const content = await rawResponse.json();
    // console.log(content);
}

var xValues = ["Patty", "Eleanor", "Celine", "Karina"];
var yValues = [pCount, eCount, cCount, kCount];
var barColors = ["#D03A20", "#D44A7A","#9f37ff","#5CA4F8"];

const chart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Swear Jar Totals"
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                callback: function(value) {if (value % 1 === 0) {return value;}}
            }
        }]
    }
  }
});

function pAdd() {
    if (user) {
        pCount += 1;
        pEXE += 1;
        document.getElementById("pCount").innerHTML = pCount;
        document.getElementById("pEXE").innerHTML = pEXE;
        chart.data.datasets[0].data[0] += 1;
        chart.update();
        setInfo();
    }
}
function pSub() {
    if (user) {
        pEXE -= 1;
        document.getElementById("pEXE").innerHTML = pEXE;
        setInfo();
    }
}
function eAdd() {
    if (user) {
        eCount += 1;
        eEXE += 1;
        document.getElementById("eCount").innerHTML = eCount;
        document.getElementById("eEXE").innerHTML = eEXE;
        chart.data.datasets[0].data[1] += 1;
        chart.update();
        setInfo();
    }
}
function eSub() {
    if (user) {
        eEXE -= 1;
        document.getElementById("eEXE").innerHTML = eEXE;
        setInfo();
    }
}
function cAdd() {
    if (user) {
        cCount += 1;
        cEXE += 1;
        document.getElementById("cCount").innerHTML = cCount;
        document.getElementById("cEXE").innerHTML = cEXE;
        chart.data.datasets[0].data[2] += 1;
        chart.update();
        setInfo();
    }
}
function cSub() {
    if (user) {
        cEXE -= 1;
        document.getElementById("cEXE").innerHTML = cEXE;
        setInfo();
    }
}
function kAdd() {
    if (user) {
        kCount += 1;
        kEXE += 1;
        document.getElementById("kCount").innerHTML = kCount;
        document.getElementById("kEXE").innerHTML = kEXE;
        chart.data.datasets[0].data[3] += 1;
        chart.update();
        setInfo();
    }
}
function kSub() {
    if (user) {
        kEXE -= 1;
        document.getElementById("kEXE").innerHTML = kEXE;
        setInfo();
    }
}

function pAddUndo() {
    if (user) {
        pCount -= 1;
        pEXE -= 1;
        document.getElementById("pCount").innerHTML = pCount;
        document.getElementById("pEXE").innerHTML = pEXE;
        chart.data.datasets[0].data[0] -= 1;
        chart.update();
        setInfo();
    }
}
function pSubUndo() {
    if (user) {
        pEXE += 1;
        document.getElementById("pEXE").innerHTML = pEXE;
        setInfo();
    }
}
function eAddUndo() {
    if (user) {
        eCount -= 1;
        eEXE -= 1;
        document.getElementById("eCount").innerHTML = eCount;
        document.getElementById("eEXE").innerHTML = eEXE;
        chart.data.datasets[0].data[1] -= 1;
        chart.update();
        setInfo();
    }
}
function eSubUndo() {
    if (user) {
        eEXE += 1;
        document.getElementById("eEXE").innerHTML = eEXE;
        setInfo();
    }
}
function cAddUndo() {
    if (user) {
        cCount -= 1;
        cEXE -= 1;
        document.getElementById("cCount").innerHTML =cCount;
        document.getElementById("cEXE").innerHTML = cEXE;
        chart.data.datasets[0].data[2] -= 1;
        chart.update();
        setInfo();
    }
}
function cSubUndo() {
    if (user) {
        cEXE += 1;
        document.getElementById("cEXE").innerHTML = cEXE;
        setInfo();
    }
}
function kAddUndo() {
    if (user) {
        kCount -= 1;
        kEXE -= 1;
        document.getElementById("kCount").innerHTML =kCount;
        document.getElementById("kEXE").innerHTML = kEXE;
        chart.data.datasets[0].data[3] -= 1;
        chart.update();
        setInfo();
    }
}
function kSubUndo() {
    if (user) {
        kEXE += 1;
        document.getElementById("kEXE").innerHTML = kEXE;
        setInfo();
    }
}