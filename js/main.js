let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetch);

// function getFactAjax() {
//     let number = numberInput.value;
    
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/'+number);

//     xhr.onload = function() {
//         if(this.status == 200 && number != '') {
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }
//     xhr.send();
// }

function getFactFetch() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
            if(number != '') {
                fact.style.display = 'block';
                factText.innerText = data;
            }
        })
        .catch(err => console.log(err));
}
  

let factDate = document.querySelector('#factDate');
let factDateText = document.querySelector('#factDateText');
let monthInput = document.querySelector('#monthInput');
monthInput.addEventListener('input' , getDateFactFetch);
let dayInput = document.querySelector('#dayInput');
dayInput.addEventListener('input' , getDateFactFetch);

function getDateFactFetch() {
    let month = monthInput.value;
    let day = dayInput.value;

 

    fetch('http://numbersapi.com/'+ month + '/' + day + '/' + 'date')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            if((month == '' || month > 12) || (day == '' || day > 31)) {
                factDate.style.display = 'block';
                factDateText.innerHTML = "Invalid date!";
            } else {
                factDate.style.display = 'block';
                factDateText.innerHTML = data;
            }
        })
        .catch(err => console.log(err));
} 

 