

//Coding Challenge 1
//Test Co-ordinates 1: 52.508, 13.381(latitude, longitude)
//Test Co-ordinates 2: 19.037, 72.873(latitude, longitude)
//Test Co-ordinates 3: -33.933, 18.474(latitude, longitude)

'use strict';


const obj = { name: "John", age: 30, city: "New York" };
function myFunction1() {
    const myJSON = JSON.stringify(obj);
    document.getElementById("json1").innerHTML = myJSON;
}


const txt = '{"name":"John", "age":30, "city":"New York"}'
function myFunction2() {
    const obj1 = JSON.parse(txt);
    document.getElementById("json2").innerHTML = obj1;
    document.getElementById("json3").innerHTML = obj1.name + ", " + obj1.age;
}





const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const countriesContainer1 = document.querySelector('.countries-promises');
const countriesContainer2 = document.querySelector('.countries-promises-chain');

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span style="font-weight:bold;">Population : </span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span style="font-weight:bold;">Capital : </span>${data.capital[0]}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const renderCountry1 = function (data, className = '') {
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span style="font-weight:bold;">Population : </span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span style="font-weight:bold;">Capital : </span>${data.capital[0]}</p>
    </div>
  </article>
  `;
    countriesContainer1.insertAdjacentHTML('beforeend', html);
    countriesContainer1.style.opacity = 1;
};

const renderCountry2 = function (data, className = '') {
    const html = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span style="font-weight:bold;">Population : </span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
      <p class="country__row"><span style="font-weight:bold;">Capital : </span>${data.capital[0]}</p>
    </div>
  </article>
  `;
    countriesContainer2.insertAdjacentHTML('beforeend', html);
    countriesContainer2.style.opacity = 1;
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
};

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span style="font-weight:bold;">Population : </span>${(
                +data.population / 1000000
            ).toFixed(1)} people</p>
      <p class="country__row"><span style="font-weight:bold;">Capital : </span>${data.capital[0]}</p>
    </div>
  </article>
  `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');


const getCountryData1 = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            renderCountry1(data[0]);
        });
};


getCountryData1('qatar')




const whereAmI = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=250840975679760190690x103542`)
        .then(res => {
            if (!res.ok) throw new Error(`Problem with Geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            // console.log(data);
            // console.log(`You are in ${data.city}, ${data.country}`);

            return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found ${res.status}`);
            return res.json();
        })
        .then(data => renderCountry2(data[0]))
        .catch(err => console.error(`${err.message}`));
};
whereAmI(-33.933, 18.474);


// Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log('Lotter draw is happening 🔮');
//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You WIN 💰');
//         } else {
//             reject(new Error('You lost your money 💩'));
//         }
//     }, 2000);
// });

// lotteryPromise.then(res => console.log(res));