const url = "https://vvri.pythonanywhere.com/api/courses";

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data) {
      let tabla = `<table id="tabble"><tr><th>Id</th><th>Name</th></tr>`;
      data.forEach(element => {
        tabla += `<tr>
          <td>${element.id}</td>
          <td class="tdClass">${element.name}</td>
        </tr>`;
      });
      tabla += `</table>`; 
      document.getElementById("kurzus").innerHTML = tabla;
    }
  })
  .catch(error => console.log("Hiba történt: " + error));