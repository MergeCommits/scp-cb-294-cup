var text294;

// Outputs the memes.
function output294INI() {
    if (checkElementID("drinkName") == "") {
        alert("\"Cup of\" parameter must be filled in.");
        return;
    }
    var name = checkElementID("drinkName");
    var color = hexToRgb(checkElementID("drinkColor"));
    if (color.indexOf("NaN") > -1) {
        alert("If you're seeing this then it means that the color picker is not supported on your browser. The \"Color\" parameter will instead need a hex value in order to work.");
        return;
    }

    text294 = "[" + name + "]";
    add294Text("color = " + color);

    var alpha = checkElementID("drinkAlpha") / 100.0;
    if (alpha != 1) {
        if (alpha == 0) {alpha = alpha + ".0"; } // Cause float.
        add294Text("alpha = " + alpha);
    }

    if (document.getElementById("drinkGlow").checked) {
        add294Text("glow = true");
    }
    
    var dispenseSound = "SFX\\SCP\\294\\dispense" + document.getElementById("drinkDispense").selectedIndex + ".ogg";
    add294Text("dispensesound = " + dispenseSound);

    // If refuse is enabled then stop here.
    if (document.getElementById("refuse").checked) {
        if (checkElementID("refuseMSG") == "") {
            alert("\"Refuse Message\" parameter must be filled in.");
            return;
        }

        add294Text("refusemessage = " + checkElementID("refuseMSG"));
        document.getElementById("divOutput").innerHTML = text294;
        return;
    }

    if (checkElementID("drinkMSG") != "") {
        add294Text("message = " + checkElementID("drinkMSG"));
    }

    if (!document.getElementById("explosion").checked) { // If explosion parameter is enabled ignore this.
        var drinkSound;
        switch (document.getElementById("drinkSound").selectedIndex) {
            case 1: drinkSound = "SFX\\SCP\\294\\spit.ogg"; break;
            case 2: drinkSound = "SFX\\SCP\\294\\ahh.ogg"; break;
            case 3: drinkSound = "SFX\\SCP\\294\\burn.ogg"; break;
            case 4: drinkSound = "SFX\\SCP\\294\\cough.ogg"; break;
            case 5: drinkSound = "SFX\\SCP\\294\\ew1.ogg"; break;
            case 5: drinkSound = "SFX\\SCP\\294\\ew2.ogg"; break;
            default: drinkSound = "SFX\\SCP\\294\\slurp.ogg";
        }
        add294Text("sound = " + drinkSound);
    }

    if (checkElementID("drinkDeathMSG") != "") {
        add294Text("deathmessage = " + checkElementID("drinkDeathMSG"));
    }

    // If lethal stop here.
    if (document.getElementById("lethal").checked) {
        add294Text("lethal = true");
        document.getElementById("divOutput").innerHTML = text294;
        return;
    } else if (document.getElementById("explosion").checked) {
        add294Text("explosion = true");
        document.getElementById("divOutput").innerHTML = text294;
        return;
    }

    if (checkElementID("drinkKillTimer") != "") {
        if (!isInt(checkElementID("drinkKillTimer"), "\"Kill Timer\" parameter must either be a valid integer or left blank.")) { return; }
        if (checkElementID("drinkKillTimer") <= 0) {
            alert("\"Kill Timer\" must either be a positive integer or left blank.");
            return;
        }
        add294Text("deathtimer = " + checkElementID("drinkKillTimer"));
    }

    if (checkElementID("drinkBlurTimer") != "") {
        if (!isInt(checkElementID("drinkBlurTimer"), "\"Blur Timer\" parameter must either be a valid integer or left blank.")) { return; }
        if (checkElementID("drinkBlurTimer") <= 0) {
            alert("\"Blur Timer\" must either be a positive integer or left blank.");
            return;
        }
        add294Text("blur = " + checkElementID("drinkBlurTimer"));
    }

    if (checkElementID("drinkInjury") != "") {
        if (!isInt(checkElementID("drinkInjury"), "\"Damage\" parameter must either be a valid integer or left blank.")) { return; }
        add294Text("damage = " + checkElementID("drinkInjury"));
    }

    if (checkElementID("drinkBloodloss") != "") {
        if (!isInt(checkElementID("drinkBloodloss"), "\"Blood Loss\" parameter must either be a valid integer or left blank.")) { return; }
        add294Text("blood loss = " + checkElementID("drinkBloodloss"));
    }

    if (document.getElementById("drink1025").checked) {
        add294Text("stomachache = true");
    }

    if (checkElementID("drinkBlinkEffect") != "") {
        if (!isInt(checkElementID("drinkBlinkEffect"), "\"Blink Effect\" parameter must either be a valid integer or left blank.")) { return; }
        if (!isInt(checkElementID("drinkBlinkTimer"), "\"Blink Effect Timer\" parameter must be a valid integer.")) { return; }
        if (checkElementID("drinkBlinkTimer") <= 0) {
            alert("\"Blink Effect Timer\" must be a positive integer.");
            return;
        }
        add294Text("blinkeffect = " + checkElementID("drinkBlinkEffect"));
        add294Text("blinkeffecttimer = " + checkElementID("drinkBlinkTimer"));
    }

    if (checkElementID("drinkStaminaEffect") != "") {
        if (!isInt(checkElementID("drinkStaminaEffect"), "\"Stamina Effect\" parameter must either be a valid integer or left blank.")) { return; }
        if (!isInt(checkElementID("drinkStaminaTimer"), "\"Stamina Effect Timer\" parameter must be a valid integer.")) { return; }
        if (checkElementID("drinkStaminaTimer") <= 0) {
            alert("\"Stamina Effect Timer\" must be a positive integer.");
            return;
        }
        add294Text("staminaeffect = " + checkElementID("drinkStaminaEffect"));
        add294Text("staminaeffecttimer = " + checkElementID("drinkStaminaTimer"));
    }

    document.getElementById("divOutput").innerHTML = text294;
}

// Add 294 stuff to the variable.
function add294Text(string) {
    text294 += "<br />" + string;
}

// Cause getElementByID looks ugly.
function checkElementID(ID, disable = null) {
    if (disable == null) {
        return document.getElementById(ID).value;
    } else {
        document.getElementById(ID).disabled = disable;
    }
}

// Disable fields when memes are present.
function updateDeathMode() {
    if (!document.getElementById("none").checked) {
        checkElementID("drinkKillTimer", true);
        checkElementID("drinkBlurTimer", true);
        checkElementID("drinkInjury", true);
        checkElementID("drinkBloodloss", true);
        checkElementID("drink1025", true);
        checkElementID("drinkBlinkEffect", true);
        checkElementID("drinkBlinkTimer", true);
        checkElementID("drinkStaminaEffect", true);
        checkElementID("drinkStaminaTimer", true);
    } else {
        checkElementID("drinkKillTimer", false);
        checkElementID("drinkBlurTimer", false);
        checkElementID("drinkInjury", false);
        checkElementID("drinkBloodloss", false);
        checkElementID("drink1025", false);
        checkElementID("drinkBlinkEffect", false);
        checkElementID("drinkBlinkTimer", false);
        checkElementID("drinkStaminaEffect", false);
        checkElementID("drinkStaminaTimer", false);
    }

    if (document.getElementById("explosion").checked) {
        checkElementID("drinkMSG", true);
        checkElementID("drinkSound", true);
    } else {
        checkElementID("drinkMSG", false);
        checkElementID("drinkSound", false);
    }
    updateDeathMSG();
}

function updateRefuseMode() {
    if (document.getElementById("refuse").checked) {
        checkElementID("refuseMSG", false);
        checkElementID("none", true);
        checkElementID("lethal", true);
        checkElementID("explosion", true);
        checkElementID("drinkMSG", true);
        checkElementID("drinkDeathMSG", true);
        checkElementID("drinkSound", true);
        checkElementID("drinkKillTimer", true);
        checkElementID("drinkBlurTimer", true);
        checkElementID("drinkInjury", true);
        checkElementID("drinkBloodloss", true);
        checkElementID("drink1025", true);
        checkElementID("drinkBlinkEffect", true);
        checkElementID("drinkBlinkTimer", true);
        checkElementID("drinkStaminaEffect", true);
        checkElementID("drinkStaminaTimer", true);
    } else {
        checkElementID("refuseMSG", true);
        checkElementID("drinkMSG", false);
        checkElementID("drinkDeathMSG", false);
        checkElementID("drinkSound", false);
        checkElementID("none", false);
        checkElementID("lethal", false);
        checkElementID("explosion", false);

        updateDeathMode();
    }
}

function updateDeathMSG() {
    if (checkElementID("drinkInjury") != "" || checkElementID("drinkBloodloss") != "" || checkElementID("drinkKillTimer") != "" || !document.getElementById("none").checked) {
        checkElementID("drinkDeathMSG", false);
    } else {
        checkElementID("drinkDeathMSG", true);
    }
}

// Parse hex to RGB.
function hexToRgb(hex) {
    hex = hex.replace("#", "");
    var r = parseInt(hex.substring(0,2), 16);
    var g = parseInt(hex.substring(2,4), 16);
    var b = parseInt(hex.substring(4,6), 16);

    return r + ", " + g + ", " + b;
}


// Check if input is actually an integer.
function isInt(integer, errMessage) {
    if (isNaN(parseInt(integer))) {
        alert(errMessage);
        return false;
    }
    return true;
}