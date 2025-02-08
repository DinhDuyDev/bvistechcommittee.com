let _width = 350;
let _height = 200;

let _paddingLeft = 10;
let _paddingRight = 10;
let _paddingTop = 10;
let _paddingBottom = 10;

let _borderTop = 10;
let _borderBottom = 10;
let _borderLeft = 10;
let _borderRight = 10;

let _marginLeft = 10;
let _marginRight = 10;
let _marginTop = 10;
let _marginBottom = 10;



// const setPaddingLeft = settingValues(document.getElementById("p"))

function setProperties() {
    // document.getElementById("width").value = _width;
    // document.getElementById("height").value = _height;

    // document.getElementById("margin-top").value = _marginTop;
    // document.getElementById("margin-bottom").value = _marginBottom;
    // document.getElementById("margin-left").value = _marginLeft;
    // document.getElementById("margin-right").value = _marginRight;

    // document.getElementById("border-top").value = _borderTop;
    // document.getElementById("border-bottom").value = _borderBottom;
    // document.getElementById("border-left").value = _borderLeft;
    // document.getElementById("border-right").value = _borderRight;

    // document.getElementById("padding-top").value = _paddingTop;
    // document.getElementById("padding-bottom").value = _paddingBottom;
    // document.getElementById("padding-left").value = _paddingLeft;
    // document.getElementById("padding-right").value = _paddingRight;

    _width = Number(document.getElementById("width").value);
    _height = Number(document.getElementById("height").value);
    
    _marginTop = Number(document.getElementById("margin-top").value);
    _marginBottom = Number(document.getElementById("margin-bottom").value);
    _marginLeft = Number(document.getElementById("margin-left").value);
    _marginRight = Number(document.getElementById("margin-right").value);
    
    _borderTop = Number(document.getElementById("border-top").value);
    _borderBottom = Number(document.getElementById("border-bottom").value);
    _borderLeft = Number(document.getElementById("border-left").value);
    _borderRight = Number(document.getElementById("border-right").value);
    
    _paddingTop = Number(document.getElementById("padding-top").value);
    _paddingBottom = Number(document.getElementById("padding-bottom").value);
    _paddingLeft = Number(document.getElementById("padding-left").value);
    _paddingRight = Number(document.getElementById("padding-right").value);

    document.getElementById("box").style.width=`${_width}px`;
    document.getElementById("box").style.height=`${_height}px`;

    document.getElementById("box-padding").style.width=`${_width+_paddingLeft}px`;
    document.getElementById("box-padding").style.height=`${_height+_paddingBottom}px`;
    document.getElementById("box-padding").style.paddingLeft=`${_paddingLeft}px`;
    document.getElementById("box-padding").style.paddingTop=`${_paddingTop}px`;

    document.getElementById("box-padding").style.borderLeftWidth=`${_borderLeft}px`;
    document.getElementById("box-padding").style.borderRightWidth=`${_borderRight}px`;
    document.getElementById("box-padding").style.borderTopWidth=`${_borderTop}px`;
    document.getElementById("box-padding").style.borderBottomWidth=`${_borderBottom}px`;

    document.getElementById("box-padding").style.marginLeft=`${_marginLeft}px`;
    document.getElementById("box-padding").style.marginRight=`${_marginRight}px`;
    document.getElementById("box-padding").style.marginTop=`${_marginTop}px`;
    document.getElementById("box-padding").style.marginBottom=`${_marginBottom}px`;
}

function stTmp(value) {
    return `${value}px`;
}

window.onload = setProperties;

document.getElementById("button").onclick = setProperties;