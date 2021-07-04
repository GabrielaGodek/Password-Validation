const password = document.querySelector('#password');
const passinfo = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&+*]/; //rozbudowac rexexpa
const minValue = 10;
const arrow = document.querySelector(".fas");

const info1 = document.querySelector('.info1');
const info2 = document.querySelector('.info2');
const info3 = document.querySelector('.info3');
const info4 = document.querySelector('.info4');

const btn1 = document.querySelector('.ten');
const btn2 = document.querySelector('.let');
const btn3 = document.querySelector('.num');
const btn4 = document.querySelector('.spec');


btn1.addEventListener("click", function(){
    info1.classList.toggle("infoUncover");
    if(info1.classList.contains("infoUncover")){
    btn1.style.transform = "rotate(180deg)"
        } else {
         btn1.style.transform = "rotate(0deg)"
        }
});
btn2.addEventListener("click", function(){
    info2.classList.toggle("infoUncover");
    if(info2.classList.contains("infoUncover")){
        btn2.style.transform = "rotate(180deg)"
        } else {
            btn2.style.transform = "rotate(0deg)"
        }
});
btn3.addEventListener("click", function(){
    info3.classList.toggle("infoUncover");
    if(info3.classList.contains("infoUncover")){
        btn3.style.transform = "rotate(180deg)"
        } else {
            btn3.style.transform = "rotate(0deg)"
        }
});
btn4.addEventListener("click", function(){
    info4.classList.toggle("infoUncover");
    if(info4.classList.contains("infoUncover")){
        btn4.style.transform = "rotate(180deg)"
        } else {
            btn4.style.transform = "rotate(0deg)"
        }
});


const checkPassword = () => {
    if(password.value.length > minValue && password.value.match(letters) && password.value.match(special) && password.value.match(numbers)) {
    passinfo.innerHTML = 'You have great password!';
    passinfo.style.color = 'green';
        } else if (password.value.length > minValue && password.value.match(numbers) && password.value.match(letters)){
    passinfo.innerHTML = 'It is good enough';
    passinfo.style.color = 'gold';
    passinfo.classList.add('animate__animated','animate__headShake');
        } else {
    passinfo.innerHTML = 'Please try again'
    passinfo.style.color = 'red';
    passinfo.classList.add('animate__animated','animate__headShake');
}};
password.addEventListener('keyup', function(){ 
    if(password.value !== ''){
        checkPassword();
    } else {
        passinfo.inner = 'Tutaj wpisz hasło';
        passinfo.style.color = '';
    };
});

