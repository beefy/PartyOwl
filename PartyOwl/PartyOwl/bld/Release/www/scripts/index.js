// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

var rotate_owl = 0;

function party() {
    $("#owl")[0].src = "images/owl_with_hat.png";
    $(party_label).context.innerText = "LETS PARTY!!";

    background();
    owl();
}

function owl() {
    rotate_owl++;
    $("#owl").rotate(rotate_owl);

    setTimeout(owl, 5);
}

function background() {

    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setTimeout(background, 300);
}

function sleep(milliseconds) {
    var e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
}