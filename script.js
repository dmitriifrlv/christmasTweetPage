//Selectors
const area = document.querySelector('#string');
const counter = document.querySelector('#counterFooter');
const btn = document.querySelector('#btn');

//Functions
let checkLength = (e) => {
    const length = area.value.length;
    let lettersLeft = counter.innerText = `${140-length}/140`
    if (length>140) {
        btn.classList.add("buttonDisabled");
        counter.style.color = "red";
        counter.classList.add('longerThan120');
        area.style.color = "red";
        btn.disabled = true;
    } else if (length>=120) {
        btn.classList.remove("buttonDisabled");
        counter.classList.add('longerThan120');
        counter.style.color = "red";
        area.style.color = "white";
        btn.disabled = false;
    } else{
        counter.classList.remove('longerThan120');
        counter.style.color = "white";
        btn.disabled = false;
    }
}

const tweet=()=>{
    const text=area.value;
    window.open(`https://twitter.com/intent/tweet?text=${text}`,'__blank');
}


//Event listener
area.addEventListener('input', checkLength);
btn.addEventListener('click', tweet)
