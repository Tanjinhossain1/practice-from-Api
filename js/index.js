const addCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>showTheCountry(data))
}
addCountry()
const showTheCountry = country => {
 
    const container = document.getElementById('container');
    for(const names of country){
        const div = document.createElement('div');
        div.classList.add('add-style');
        div.innerHTML = `
        <h3>Country Name: ${names.name.common}</h3>
        <p> nativeName: ${names.capital}</p>
        <button onclick="usingName('${names.name.common}')">Detail</button>
        `;
        container.appendChild(div);
    }
}
const usingName = (name) =>{
    console.log(name)
    fetch(`https://restcountries.com/v3.1/name/${name}
    `)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}
const displayDetails = detail => {
    console.log(detail);
    const addFlag = document.getElementById('add-flag');
    addFlag.innerHTML = `
    <h3 class="mt-5 mb-4">Country Name: ${detail.name.common}</h3>
    <img src="${detail.flags.png}">
    `;
 }