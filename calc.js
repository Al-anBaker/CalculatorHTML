// x is what ever number is entered first on the calculator
let x = 0;

// y is that ever is entered after an operand key is pressed
let y = 0;

// z is the sum of x and y
let z = 0;

// m is the number stored in memory
let m = 0;

// Mode is whatever operand is selected
let mode = "None";

// Pi is just a constant, for use with equasions
let pi = 3.14159;

// Same with e
let e = 2.71828;

// AddNumtoScreen is activated by pressing a number on the calculator, and it will pass with whatever number is specified using the num varible
function AddNumtoScreen(num)
{
    //this checks if the number is beyond 26 numbers long, if so dont add any number to prevent numbers trailling off the screen
    if (document.getElementById("screen").innerText.length <= 26) {
        //If true then add the number to append of the screen element
        document.getElementById("screen").innerHTML += num;
    }
}

//This is a simple function all it does is double the number on the screen
function Double() {
    //This takes the number on the screen and sets it to x
    x = parseFloat(document.getElementById('screen').innerText);

    //this sets y to the sum of x * 2
    y = x * 2;

    //Then we set the screen element content to y
    document.getElementById('screen').innerText = y;
}


//This is called when we want to use a constant in the equasion 
function AddConst(constant)
{
    //based on the constant passed it will set the screen contents to a specified constant
    switch(constant) {
        case('Pi'):
            document.getElementById('screen').innerText = pi;
            break;
        case('e'):
            document.getElementById('screen').innerText = e;
            break;
    }
}

//pushToMem is called when we click the 'Save' key
function pushToMem() {

    //We set 'm' to what the current text is on the screen
    m = parseFloat(document.getElementById('screen').innerText);

    //We change the colour of the indicator light 'Memory' to yellow to show the user that there is a number saved
    document.getElementById('memLight').style.color = 'yellow';

    //We erase the screen's text
    ClearScreen();

    //Then we clear all the operand Indicator lights except for the Memory
    ClearLights();

    //Then we reset the 'Mode' to None
    mode = 'None';
}


//pullFromMem simply sets the screen's text to what is stored in 'm'
function pullFromMem() {
    document.getElementById('screen').innerHTML = m;
}

//This clears the 'Memory' by setting the 'm' varible to 0 and then resetting the M light colour to default
function MemClear() {
    m = 0;
    document.getElementById('memLight').style.color = 'darkgray';
}

//We use this to reset the indicator lights to default to show that there is no active operand, Mem isnt reset becuase that can persist after clicking the 'clear' button
function ClearLights() {
    document.getElementById('addLight').style.color = 'darkgray';
    document.getElementById('subLight').style.color = 'darkgray';
    document.getElementById('multiLight').style.color = 'darkgray';
    document.getElementById('diviLight').style.color = 'darkgray';

}

//FullClear is called when the 'clear' button is clicked and it resets the indicator lights, clears the screen and resets the x, y, z varibles to 0
function FullClear() {
    ClearLights();
    ClearScreen();
    x = 0;
    y = 0;
    z = 0;
}

//This just sets the screen's text to blank
function ClearScreen()
{
    document.getElementById('screen').innerHTML = "";
}


//depending on what operati is used will set its light to yellow, to show the user that that operation is active
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

//This function works almost the same as Double, except that it squares the number instead
function Square() {

    x = parseFloat(document.getElementById('screen').innerText);
    y = x ** 2;
    document.getElementById('screen').innerText = y;
}

//Again Cube operates the same as square except that is cubes
function Cube() {

    x = parseFloat(document.getElementById('screen').innerText);
    y = x ** 3;
    document.getElementById('screen').innerText = y;
}

//Whenever an operation is clicked we call this function to set the mode varible to what is clicked, we also save the text content to the varible 'x' and clear the screen
function Operation(operand) {
    mode = operand;
    console.log(mode);
    x = parseFloat(document.getElementById('screen').innerText);
    ClearScreen();
    console.log(x);
    ChangeColor(operand)
}

//when the '=' key is pressed it takes what is on the screen and saves it to the 'y' variable, we then Clear the screen
function Sum()
{
    y = parseFloat(document.getElementById('screen').innerText);
    console.log(y);
    ClearScreen();
    //Depending on what mode was set we run whichever operation what was set and saves the result to the 'z' varible
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

    //then we take the screen elemt's text and sets it to the output of the result above
    document.getElementById('screen').innerHTML = z;

    //then we reset the mode
    mode = "None"
    console.log(mode);
}
//Here we run a factorial operation on a number
function Factorial() {
    //Again, we get the contents of the Screen and Parse it as a float
    x = parseFloat(document.getElementById('screen').innerText)
    //if the number is negative or is greater that 1000 return "Error"
    if (x < 0 || x > 1000) {
        document.getElementById('screen').innerText = 'ERROR'
    }
    //else if the number is 0 or 1 then return 1 to avoid an error
    else if (x === 0 || x === 1) {
        document.getElementById('screen').innerText = '1'
    }
    //if the number is valid then recursivly run the operation until the number is the correct ammount
    else {
        let result = 1;
        for (let i = 2; i <= x; i++) {
            result *= i;
        }
        //Once the operation is done set the Screen's Text to the result
        document.getElementById('screen').innerText = result
    }
}


//When the Title is clicked, we swap the title to this because yes
function titleSwap() {
    document.getElementById('title').innerHTML = "Yes Its just A Calculator";
}
