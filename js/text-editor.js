document.getElementById('btn-bold').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    textField.style.fontWeight = '700';
});

document.getElementById('btn-italic').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    textField.style.fontStyle = 'italic';
});

document.getElementById('btn-underline').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    textField.style.textDecoration = 'underline';
});

document.getElementById('left-align').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    textField.style.textAlign = 'left';
});

document.getElementById('align-center').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    textField.style.textAlign = 'center';
});

document.getElementById('right-align').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    textField.style.textAlign = 'right';
});

document.getElementById('align-justify').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    textField.style.textAlign = 'justify';
});

document.getElementById('font-size-field').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    const fontSizeValue = document.getElementById('font-size-field').value;
    textField.style.fontSize = fontSizeValue + 'px';
});

document.getElementById('font-size-field').addEventListener('focusout', ()=> {
    const textField = document.getElementById('text-field');
    const fontSizeValue = document.getElementById('font-size-field').value;
    textField.style.fontSize = fontSizeValue + 'px';
});

document.getElementById('font-size-field').addEventListener('keypress', (event)=> {
    const textField = document.getElementById('text-field');
    const fontSizeValue = document.getElementById('font-size-field').value;
    if(event.key == 'Enter') {
        textField.style.fontSize = fontSizeValue + 'px'
    }
});

document.getElementById('capitalize').addEventListener('click', ()=> {
    const textField = document.getElementById('text-field');
    textField.style.textTransform = 'uppercase';
});

document.getElementById('btn-color').addEventListener('change', ()=> {
    const textField = document.getElementById('text-field');
    const colorField = document.getElementById('color-field');
    console.log(colorField.value);
    textField.style.color = colorField.value;
});
