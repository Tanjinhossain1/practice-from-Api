// console.log('conected js file')
const addCountry = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data =>showTheCountry(data))
}
addCountry()
const showTheCountry = country => {
    console.log(country)
    const container = document.getElementById('container')
    for(const names of country){
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>Country Name: ${names.name}</h2>
        <h4> nativeName: ${names.nativeName}</h4>
        `;
        container.appendChild(div);
    }
}