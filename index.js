// 1 - cria a url da API
const url = 'https://coderbyte.com/api/challenges/json/age-counting';

// 2 - executa a requisção
fetch(url, {
    method: 'GET'
})
    .then((response) => response.json())
    .then((data) => {
        //Separa as entradas do objeto
        const entradas = data.data.split(', ')

        // Filtrar as idades maiores que 50
        const idadesMaioresQue50 = entradas
            .map(entrada => entrada.match(/age=(\d+)/)) // Extrair valores da idade usando expressão regular
            .filter(match => match !== null) // Filtrar entradas sem idade
            .map(match => parseInt(match[1])) // Converter valores da idade para números
            .filter(idade => idade >= 50) // Filtrar idades maiores que 50


        console.log(data);
        console.log(idadesMaioresQue50);
        console.log(idadesMaioresQue50.length);

    })
    .catch(console.error);