import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

let value;
let delay;
let shouldResolve;


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

form.addEventListener("submit", event => {
    event.preventDefault();

    delay = form.elements.delay.value;

    if(form.elements.state.value === "fulfilled") {
        value = `✅ Fulfilled promise in ${delay}ms`;
        shouldResolve = true;
    }else{
        value = `❌ Rejected promise in ${delay}ms`;
        shouldResolve = false;
    }
    
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