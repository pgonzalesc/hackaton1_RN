//Ejercicio 8
//###############################################################################
console.info('Ejercicio 8');

function Language(lang, text, id){
    this.lang = lang;
    this.text = text;
    this.id = id;
}

let español = new Language('Español', 'Bienvenido', 1);
let ingles = new Language('Ingles', 'Welcome', 2);
let frances = new Language('Frances', 'Bienvenue', 3);
let italiano = new Language('Italiano', 'Benvenuti', 4);
let portugues = new Language('Portugues', 'Bem-vindo', 5);

let dictionary = [];
dictionary.push(español);
dictionary.push(ingles);
dictionary.push(frances);
dictionary.push(italiano);
dictionary.push(portugues);

const traductor = (word, lang, dictionary)=>{
    let language;
    let traductor;
    for(let key in dictionary) {
        if(word === dictionary[key].text)
            language = dictionary[key].lang;

        if(lang === dictionary[key].lang)
            traductor = dictionary[key].text;
    }
    
    console.log(`Identificador Idioma: ${language} - Palabra traducida al ${lang}: ${traductor}`);
}

traductor('Bienvenido','Italiano',dictionary);