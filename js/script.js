let dipendenti = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    }
]

for(let key in dipendenti){
    console.log(dipendenti[key].nome);
    console.log(dipendenti[key].ruolo);
    console.log(dipendenti[key].image);
}

let list = document.getElementById('list');

for(let i=0; i<dipendenti.length; i++){
    list.innerHTML += '<li>' + dipendenti[i].nome + ' - ' + dipendenti[i].ruolo + ' - ' + dipendenti[i].image + '</li>';
}