
// To not let anyone copy the text from your page

// DISABLE RIGHT-CLICK (CONTEXT MENU)
document.addEventListener('contextmenu', e => e.preventDefault(), false)

// PREVENT CLIPBOARD COPYING
// document.addEventListener("copy", (evt) => {
//     evt.clipboardData.setData("text/plain", "Warning! Copying is not allowed on this webpage");

//     evt.preventDefault();
//   }, false);



window.addEventListener('keydown', closeCopy)

function closeCopy(e) {
    if (e.ctrlKey && e.key == 'c') {
        e.preventDefault
            console.log('Warning! Copying is not allowed on this webpage')
    }
}
