// JavaScript Logic
let buttons = document.querySelectorAll('button');
let screen = document.querySelector('#screen');
Array.from(buttons).forEach(element => {
    element.addEventListener('click', (e) => {
        if (e.target.id == 'resetBtn') {
            screen.value = "";
        }
        else if (e.target.id == 'deleteChar') {
            let output = screen.value.substring(0, screen.value.length - 1);
            screen.value = output;
        }
        else if (e.target.id == 'evaluate') {
            if(screen.value != ""){
                let output = eval(screen.value);
                screen.value = output;
            }
        }
        else {
            screen.value += e.target.innerText;
        }
    })
})