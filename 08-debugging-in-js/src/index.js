
document.addEventListener('DOMContentLoaded',()=> {
    fetchSpells()
    fetchEquipment()
})

const fetchEquipment = () => {
   
    fetch('https://www.dnd5eapi.co/api/equipment')
    .then(res => res.json())
    .then(data => console.log(data));
    
}

const fetchSpells = () => {
    //Fetch all
    fetch('https://www.dnd5eapi.co/api/spells')
    .then(res => res.json())
    .then(data => {
        data.results.forEach((spell, index) => renderSpellName(spell, index))
    })
}
const renderSpellName = (spell, index) => {
    const li = document.createElement('li')
    li.textContent = spell.name 
    console.log(li)
    document.querySelector('#spell-cards').append(li)
    //if li is even it should have a class of even 
    // else it should have a class of odd
    index%2===0?li.className ='even' : li.className = 'odd'

    li.addEventListener('click', () => fetchOne(spell))
}


const fetchOne = (spell) => {
    console.log(spell)
    //Fetch one / Show one
    fetch(`https://www.dnd5eapi.co/api/spells/${spell.index}`)
    .then(res => res.json())
    .then(data => buildMainCard(data))
}

const buildMainCard = (spell) => {
    console.log(spell)
    const main = document.querySelector('main')
    //Clear Main
    main.innerHTML = ''

    const name = document.createElement('h1')
    const school = document.createElement('h3')
    const castingTime = document.createElement('p')
    const range = document.createElement('p')
    const components  = document.createElement('p')
    const duration = document.createElement('p')
    const classes = document.createElement('p')
    const desc = document.createElement('p')

    name.textContent = spell.name
    school.textContent = spell.school.name
    castingTime.textContent = spell.casting_time
    range.textContent = spell.range

    components.textContent = `${spell.components.join(' ')} (${spell.material? spell.material: ''})`
    duration.textContent = spell.duration
    classes.textContent = spell.classes.map((spellClass,index) => spellClass.name.join(' '))
    desc.textContent = spell.desc[0]
    


    main.className = 'card'
    main.append(name, school, castingTime, range, components, classes, desc)

}
// Create an app that list spells from Dungeon and Dragons 5th edition.
// [x] Create a list of name spells from the dnd5eAPI. The endpoint needed is: 'https://www.dnd5eapi.co/api/spells'
    // Fetch to api
    // assuming my spell data is in an array
        // loop over the array and create an element for every spell in the array, with the textcontent set to the spells name. 
// - every other spell should have the class name of even, and the rest the class name of odd (for CSS reasons) 

// [] On click display the spells information in the main element. The endpoint needed is: 'https://www.dnd5eapi.co/api/spells/spell_name_here'
    // Add 'click' eventListener to Li 
    // triggers a fetch call using the spell name 

// - Clicking a new spell should remove the old spell. 
// - name, school, casting time, range components duration, classes, and description should be displayed. 
    // create elements 
// - The main container gains a class name of card (for CSS reasons)
