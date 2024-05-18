const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const fontFamilyButton = document.getElementById('font-family');
const fontColorButton = document.getElementById('font-color');
const userInput = document.getElementById('user-input');
const fontSizeInput = document.getElementById('font-size-input');

boldButton.addEventListener('click', function() {
    userInput.style.fontWeight = userInput.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

italicButton.addEventListener('click', function() {
    userInput.style.fontStyle = userInput.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

underlineButton.addEventListener('click', function() {
    userInput.style.textDecoration = userInput.style.textDecoration === 'underline' ? 'none' : 'underline';
});

fontFamilyButton.addEventListener('click', function() {
    const fontFamily = prompt('Enter font family:');
    if (fontFamily) {
        userInput.style.fontFamily = fontFamily;
    }
});

fontColorButton.addEventListener('click', function() {
    const fontColor = prompt('Enter font color:');
    if (fontColor) {
        userInput.style.color = fontColor;
    }
});

fontSizeInput.addEventListener('input', function() {
    const fontSize = fontSizeInput.value;
    userInput.style.fontSize = fontSize + 'px';
});
