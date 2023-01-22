const input_text = document.getElementById('input_text');
const submit = document.getElementById('submit');
const container = document.querySelector('#button_container');
const container_child = container.firstChild;

function copy_value() {
    const words = input_text.value.replace(/\n/g, " ").split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "") {
            continue;
        }
        let newbutt = document.createElement('button');
        newbutt.innerHTML = words[i];
        document.querySelector('#button_container').appendChild(newbutt);
    }
}
submit.addEventListener("click", copy_value);

function click_word(){
    let test_message = document.createElement('p');
    test_message.innerHTML = container.firstChild.innerHTML;
    container.appendChild(test_message);
    
}

container.addEventListener("click", click_word);
// for child in container, if click, run click_word

