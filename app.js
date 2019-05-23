var heroes = [
    { name: 'Homem', surname: 'de Ferro' },
    { name: 'Homem', surname: 'Aranha' },
    { name: 'Capitão', surname: 'América' },
    { name: 'Bruce', surname: 'Banner' },
    { name: 'Viúva', surname: 'Negra' },
    { name: 'Pantera', surname: 'Negra' },
    { name: 'Doutor', surname: 'Estranho' },
    { name: 'Tony', surname: 'Stark' },
    { name: 'Natasha', surname: 'Romanoff' },
    { name: 'Steve', surname: 'Rogers' },
    { name: 'Gavião', surname: 'Arqueiro' },
    { name: 'Máquina', surname: 'de Combate' },
    { name: 'James', surname: 'Rhodes' },
    { name: 'Homem', surname: 'Formiga' },
    { name: 'Scott', surname: 'Lang' },
    { name: 'Clint', surname: 'Barton' },
    { name: 'Capitã', surname: 'Marvel' },
    { name: 'Soldado', surname: 'Invernal' },
    { name: 'Peter', surname: 'Parker' },
    { name: 'Senhor', surname: 'das Estrelas' },
    { name: 'Peter', surname: 'Quill' },
    { name: 'Senhor', surname: 'das Estrelas' }
];

var rnd = Math.random();
rnd = Math.floor(rnd * (heroes.length));

var rnd2 = Math.random();
rnd2 = Math.floor(rnd2 * (heroes.length));

var selectedHeroes = [
    heroes[rnd],
    heroes[rnd2]
];

console.log(`${heroes[rnd].name} ${heroes[rnd].surname} + ${heroes[rnd2].name} ${heroes[rnd2].surname}`);
console.log(`${selectedHeroes[0].name} ${selectedHeroes[1].surname}`);

