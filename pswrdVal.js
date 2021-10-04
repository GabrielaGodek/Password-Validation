const password = document.querySelector('input');
const passinfo = document.querySelector('.info-error');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&+*]/; 
const minValue = 10;

const arrowsUp = document.querySelectorAll(".fa-angle-double-up");
const arrowsDown = document.querySelectorAll(".fa-angle-double-down");
const li = document.querySelectorAll("li");
const infos = document.querySelectorAll('.info');


for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function () {
        arrowsUp[i].classList.toggle('hide');
        arrowsDown[i].classList.toggle('hide');
        infos[i].classList.toggle('hide');
    })
}



const checkPassword = () => {
    if(password.value.length > minValue && password.value.match(letters) && password.value.match(special) && password.value.match(numbers)) {
    passinfo.innerHTML = 'You have great password!';
    passinfo.style.color = '#19443C';
        } else if (password.value.length > minValue && password.value.match(numbers) && password.value.match(letters)){
    passinfo.innerHTML = 'It is good enough';
    passinfo.style.color = '#F5DEB3';
    passinfo.classList.add('animate__animated','animate__headShake');
        } else {
    passinfo.innerHTML = 'Please try again'
    passinfo.style.color = '#8A3335';
    passinfo.classList.add('animate__animated','animate__headShake');
}};


password.addEventListener('keyup', function(){ 
    if(password.value !== ''){
        checkPassword();
    } else {
        passinfo.inner = 'Provide your password';
        passinfo.style.color = '';
    };
});

