
var nombre = document.getElementById("firstName")
var apellidos = document.getElementById("lastName")
var dni = document.getElementById("dni")
var destino_select = document.getElementById('destino_select');

var destino1 = {
    origen: "Arequipa",
    destino: "Trujillo",
    precio: "s/.50",
    hora: new Date(2021, 8, 15, 10),
    reservas: [],
  };
  var destino2 = {
    origen: "Tacna",
    destino: "Pucallpa",
    precio: "s/.60",
    hora: new Date(2021, 8, 20, 16),
    reservas: [],
  };
  var destino3 = {
    origen: "Cuzco",
    destino: "Piura",
    precio: "s/.80",
    hora: new Date(2021, 8, 7, 20),
    reservas: [],
  };
  var destino4 = {
    origen: "Chiclayo",
    destino: "Trujillo",
    precio: "s/.80",
    hora: new Date(2021, 8, 13, 5),
    reservas: [],
  };
  var destino5 = {
    origen: "Nasca",
    destino: "Piura",
    precio: "s/.20",
    hora: new Date(2021, 8, 2, 12),
    reservas: [],
  }

destino_select.addEventListener('change',
  function(){
    var selectedOption = this.options[destino_select.selectedIndex];
    $("#nombre_destino").text(selectedOption.text)

    verificar(selectedOption.text)
  });

$(document).ready(function(){
    $("#verificar").click(function(){
        
    });
});

function verificar(destino) {
    switch(destino) {
        case "Arequipa": alert("AREQUIPA") ;break;
        case "Piura": ;break;
        case "Cusco": ;break;
        case "Nasca": ;break;
        case "Tacna": ;break;
        case "Pucallpa": ;break;
        case "Chiclayo": ;break;
    }
}
