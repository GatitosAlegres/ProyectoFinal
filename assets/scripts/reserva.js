var app = new (function () {
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
      precio: "s/.50",
      hora: new Date(2021, 8, 20, 16),
      reservas: [],
    };
    var destino3 = {
      origen: "Cuzco",
      destino: "Piura",
      precio: "s/.50",
      hora: new Date(2021, 8, 7, 20),
      reservas: [],
    };
    var destino4 = {
      origen: "Chiclayo",
      destino: "Trujillo",
      precio: "s/.50",
      hora: new Date(2021, 8, 13, 5),
      reservas: [],
    };
    var destino5 = {
      origen: "Nasca",
      destino: "Piura",
      precio: "s/.50",
      hora: new Date(2021, 8, 2, 12),
      reservas: [],
    };
  
    this.destinos = [destino1, destino2, destino3, destino4, destino5];
  
    this.mostrarDestinos = function () {
      var data = "<br>";
      if (this.destinos.length > 0) {
        for (i = 0; i < this.destinos.length; i++) {
          var hora =
            this.destinos[i].hora.getHours() < 10
              ? "0" + this.destinos[i].hora.getHours()
              : this.destinos[i].hora.getHours();
          var minutos =
            this.destinos[i].hora.getMinutes() < 10
              ? "0" + this.destinos[i].hora.getMinutes()
              : this.destinos[i].hora.getMinutes();
          data += "<tr>";
          data +=
            "<td>SALIDAS # " +
            (i + 1) +
            " / ORIGEN: " +
            this.destinos[i].origen +
            ", DESTINO: " +
            this.destinos[i].destino +
            " / PRECIO: " +
            this.destinos[i].precio +
            ", HORA: " +
            this.destinos[i].hora.toDateString() +
            " " +
            hora +
            ":" +
            minutos +
            "</td>";
          data +=
            '<td><button onclick="app.Reservar(' +
            i +
            ')">Reservar</button></td>';
          data += "</tr>";
        }
      }
      document.getElementById("destinos").innerHTML = data;
      document.getElementById("destinos").style.display = "block";
    };
  
    this.Reservar = function (item) {
      var el = document.getElementById("documento");
      document.getElementById("documento").value = "";
      document.getElementById("datosdestino").style.display = "block";
      document.getElementById("destinos").style.display = "none";
      document.getElementById("menu1").style.display = "none";
      document.getElementById("menu2").style.display = "none";
      document.getElementById("btnback").style.display = "block";
  
      var hora =
        this.destinos[item].hora.getHours() < 10
          ? "0" + this.destinos[item].hora.getHours()
          : this.destinos[item].hora.getHours();
      var minutos =
        this.destinos[item].hora.getMinutes() < 10
          ? "0" + this.destinos[item].hora.getMinutes()
          : this.destinos[item].hora.getMinutes();
  
      document.getElementById("datosdestino").innerHTML =
        "SALIDAS # " +
        (item + 1) +
        ":<br>ORIGEN: " +
        this.destinos[item].origen +
        "<br>DESTINO: " +
        this.destinos[item].destino +
        "<br>PRECIO: " +
        this.destinos[item].precio +
        "<br>SALIDA: " +
        this.destinos[item].hora.toDateString() +
        " " +
        hora +
        ":" +
        minutos;
      document.getElementById("campodoc").style.display = "block";
      self = this;
      document.getElementById("reserva-edit").onsubmit = function () {
        var d = el.value * 1;
        if (isNaN(d) || d == 0) {
          window.alert("Ingrese un dato correcto");
        } else {
          var flag = false;
          for (j = 0; j < self.destinos.length; j++) {
            var auxDoc = self.destinos[j].reservas.indexOf(d);
            if (auxDoc != -1) {
              if (
                self.destinos[j].hora.getFullYear() ==
                  self.destinos[item].hora.getFullYear() &&
                self.destinos[j].hora.getMonth() ==
                  self.destinos[item].hora.getMonth() &&
                self.destinos[j].hora.getDate() ==
                  self.destinos[item].hora.getDate()
              ) {
                flag = true;
                break;
              }
            }
          }
          if (flag) {
            window.alert(
              "Error: usted ya tiene reservado un destino para esta fecha"
            );
          } else {
            self.destinos[item].reservas.push(d);
            window.alert("Vuelo reservado correctamente");
            document.getElementById("menu1").style.display = "block";
            document.getElementById("menu2").style.display = "block";
            document.getElementById("datosdestino").style.display = "none";
            document.getElementById("campodoc").style.display = "none";
            document.getElementById("btnback").style.display = "none";
          }
        }
      };
    };
  
    this.consultarReserva = function () {
      var el = document.getElementById("docConsulta");
      var d = el.value * 1;
      if (isNaN(d) || d == 0) {
        window.alert("Ingrese un dato correcto");
      } else {
        var data = "<br>DESTINOS RESERVADOS DE " + d;
        for (i = 0; i < this.destinos.length; i++) {
          var auxDoc = this.destinos[i].reservas.indexOf(d);
          if (auxDoc != -1) {
            var hora =
              this.destinos[i].hora.getHours() < 10
                ? "0" + this.destinos[i].hora.getHours()
                : this.destinos[i].hora.getHours();
            var minutos =
              this.destinos[i].hora.getMinutes() < 10
                ? "0" + this.destinos[i].hora.getMinutes()
                : this.destinos[i].hora.getMinutes();
            data += "<tr>";
            data +=
              "<td>Vuelo # " +
              (i + 1) +
              "= ORIGEN: " +
              this.destinos[i].origen +
              ", DESTINO: " +
              this.destinos[i].destino +
              ", PRECIO: " +
              this.destinos[i].precio +
              ", SALIDA: " +
              this.destinos[i].hora.toDateString() +
              " " +
              hora +
              ":" +
              minutos +
              "</td>";
            data += "</tr>";
          }
        }
        if (data == "<br>DESTINOS RESERVADOS DE " + d) {
          window.alert("No existen destinos asociados a dicho documento");
        } else {
          document.getElementById("menu1").style.display = "none";
          document.getElementById("menu2").style.display = "none";
          document.getElementById("destinos").style.display = "block";
          document.getElementById("destinos").innerHTML = data;
          document.getElementById("btnback").style.display = "block";
        }
      }
    };
  
    this.Volver = function () {
      document.getElementById("datosdestino").style.display = "none";
      document.getElementById("campodoc").style.display = "none";
      document.getElementById("destinos").style.display = "none";
      document.getElementById("btnback").style.display = "none";
      document.getElementById("menu1").style.display = "block";
      document.getElementById("menu2").style.display = "block";
      document.getElementById("docConsulta").value = "";
    };
  })();
  
  