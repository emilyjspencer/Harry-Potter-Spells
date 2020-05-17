
const key = 'fakekey';

const ul = document.getElementById('spells');

const url = new URL('https://www.potterapi.com/v1/spells/'), params = {key: key}

Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

function createNode(element) {
  return document.createElement(element);
}

function appendElement(parent, element) {
  return parent.appendChild(element);
}

fetch(url, {key: key})
  .then((res) => res.json()) 
  .then(function(data) {
  let spells = data;
  
  return spells.map(function(spell) {
    let li = createNode('li');
    li.innerHTML = `Spell type: ${spell.type}   |      Spell name: ${spell.spell}     |        What does it do?:   ${spell.effect}`;
    appendElement(ul, li);
  })
})
.catch(function(error) {
  let h3 = "Server error";
  append(body, h3);
});   
