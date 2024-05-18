import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

let value;
let delay;
let shouldResolve;
let key;


const makePromise = ({ value, delay, shouldResolve = true }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
              if(shouldResolve) {
                  resolve(value)
              } else {
                  reject(value)
              }
          }, delay);
    });
};

form.addEventListener("input", event => {
    const type = event.target.type;
    if(type === "number") {
        delay = event.target.value;
    }
    if(type === "radio") {
        if(event.target.value === "fulfilled") {
            value = `✅ Fulfilled promise in ${delay}ms`;
            shouldResolve = true;
        }else{
            value = `❌ Rejected promise in ${delay}ms`;
            shouldResolve = false;
        }
    }
})

form.addEventListener("submit", event => {
    event.preventDefault();
    makePromise({ value, delay, shouldResolve})
    .then(value => {
        iziToast.show({
            message: `${value}`,
            position: 'topCenter',
            backgroundColor: '#59A10D',
            theme: 'dark',
            onOpening(){
                console.log(value);
            }
        });
    })
    .catch(error =>{
        iziToast.show({
            message: `${value}`,
            position: 'topCenter',
            backgroundColor: 'rgb(239, 64, 64)',
            theme: 'dark',
            onOpening(){
                console.log(value);
            }
        });
    });
})