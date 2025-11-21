let x = 0;
let y = 0;
let z = 0;
let m = 0;
let mode = "None";
let pi = 3.14159;
let e = 2.71828;
let phi = 1.618;

function AddNumtoScreen(num)
{
    if (document.getElementById("screen").innerText.length <= 26) {
        document.getElementById("screen").innerHTML += num;
    }
}

function AddConst(constant)
{
    switch(constant) {
        case('Pi'):
            document.getElementById('screen').innerText = pi;
            break;
        case('e'):
            document.getElementById('screen').innerText = e;
            break;
        case('phi'):
            document.getElementById('screen').innerText = phi;
    }
}

function pushToMem() {
    m = parseFloat(document.getElementById('screen').innerText);
    document.getElementById('memLight').style.color = 'yellow';
    ClearScreen();
    ClearLights();
    mode = 'None';
}

function pullFromMem() {
    document.getElementById('screen').innerHTML = m;
}

function MemClear() {
    m = 0;
    document.getElementById('memLight').style.color = 'darkgray';
}

function ClearLights() {
    document.getElementById('addLight').style.color = 'darkgray';
    document.getElementById('subLight').style.color = 'darkgray';
    document.getElementById('multiLight').style.color = 'darkgray';
    document.getElementById('diviLight').style.color = 'darkgray';

}

function FullClear() {
    ClearLights();
    ClearScreen();
}

function ClearScreen()
{
    document.getElementById('screen').innerHTML = "";
}

function ChangeColor(operati) {
    switch(operati){
        case("Add"):
            ClearLights();
            document.getElementById("addLight").style.color = 'Yellow';
            break;
        case("Sub"):
            ClearLights();
            document.getElementById("subLight").style.color = "Yellow";
            break;
        case("Multi"):
            ClearLights();
            document.getElementById('multiLight').style.color = "Yellow";
            break;
        case("Divi"):
            ClearLights();
            document.getElementById("diviLight").style.color = "Yellow";
            break;
    }
}

function Square() {

    x = parseFloat(document.getElementById('screen').innerText);
    y = x ** 2;
    document.getElementById('screen').innerText = y;
}

function Cube() {

    x = parseFloat(document.getElementById('screen').innerText);
    y = x ** 3;
    document.getElementById('screen').innerText = y;
}

function Operation(operand) {
    mode = operand;
    console.log(mode);
    x = parseFloat(document.getElementById('screen').innerText);
    ClearScreen();
    console.log(x);
    ChangeColor(operand)
}

function Sum()
{
    y = parseFloat(document.getElementById('screen').innerText);
    console.log(y);
    ClearScreen();
    switch (mode) {
        case ("Add"):
            z = x + y;
            break;
        case ("Multi"):
            z = x * y;
            break;
        case ("Sub"):
            z = x - y;
            break;
        case ("Divi"):
            z = x / y;
            break;
    }
    console.log(z);
    document.getElementById('screen').innerHTML = z;
    mode = "None"
    console.log(mode);
}

function titleSwap() {
    document.getElementById('title').innerHTML = "Yes Its just A Calculator";
}
