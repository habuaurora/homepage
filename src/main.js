var sel = 0;
var jsb = document.getElementById( 'jsb' );
var snsb = document.getElementById( 'snsb' );
var jish = document.getElementById( 'jish' );
var sns = document.getElementById( 'sns' );
jsb.style.borderBottom = "solid red";
jish.style.display = "inline";
sns.style.display = "none";

function jsbc() {
    sel = 0;
}

function snsbc() {
    sel = 1;
}

function bc() {
    if( sel == 0 ) {
        jsb.style.borderBottom = "solid red";
        snsb.style.borderBottom = "none";
        sns.style.display = "none";
        jish.style.display = "inline";
    } else {
        snsb.style.borderBottom = "solid red";
        jsb.style.borderBottom = "none";
        jish.style.display = "none";
        sns.style.display = "inline";
    }
}
jsb.addEventListener( 'click', jsbc );
snsb.addEventListener( 'click', snsbc );
jsb.addEventListener( 'click', bc );
snsb.addEventListener( 'click', bc );
