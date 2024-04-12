function getKoalas() {
  // axios call to server to get koalas

  axios({
    method: 'GET',
    url: '/koalas',
  })
    .then((response) => {
      console.log("GET /koalas response.data", response.data);
      renderKoalas(response.data);
    })
    .catch((error) => {
      console.log('Error', error);
    });
} // end getKoalas

function renderKoalas(koalasList) {
  let koalaTableBody = document.getElementById('viewKoalas');
  koalaTableBody.innerHTML = '';
  //console.log("koalasList", koalasList)
  //Loop over each song and append data to the DOM
  for (let koala of koalasList) {
    //console.log("koala", koala)
    koalaTableBody.innerHTML += `
      <tr>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.favorite_color}</td>
        <td>${koala.ready_to_transfer}</td>
        <td>${koala.notes}</td>
        <td>
          <button onclick="deleteKoala(${koala.id})">Delete</button>
        </td>
      </tr>
    `;
  }
}

function addKoala(){
let koalaName = document.getElementById('nameIn').value;
let koalaAge = document.getElementById('ageIn').value; 
let koalaColor = document.getElementById('colorIn').value; 
let koalaTransfer = document.getElementById('readyForTransferIn').value;
let koalaNotes = document.getElementById('notesIn').value;

axios({
  method: 'POST',
  url: '/koalas',
  data: {
    name: koalaName, 
    age: koalaAge, 
    favorite_color: koalaColor,
    ready_to_transfer: koalaTransfer,
    notes: koalaNotes
  }
}).then((response) => {
  console.log('response', response)
  getKoalas();
})
// .catch((error) => {
//   console.log('Error', error);
// });

}

function saveKoala() {
  console.log('in saveKoala');
  // axios call to server to get koalas
}

getKoalas();
