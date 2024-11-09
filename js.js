
        document.getElementById('showFormBtn').addEventListener('click', function() {
            const formContainer = document.getElementById('formContainer');
            formContainer.style.display = "block"; 
            this.style.display = "none"; 
        });

        
        function mostrarDatos() {
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const mensaje = document.getElementById('mensaje').value;
            const tabla = document.getElementById('tablaDatos');
            const tbody = tabla.querySelector('tbody');

          
            if (nombre === "" || correo === "" || mensaje === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }

           
            const nuevaFila = document.createElement('tr');
            nuevaFila.innerHTML = `
                <td>${nombre}</td>
                <td>${correo}</td>
                <td>${mensaje}</td>
            `;

           
            tbody.appendChild(nuevaFila);

         
            tabla.style.display = "table";

        
            document.getElementById('nombre').value = "";
            document.getElementById('correo').value = "";
            document.getElementById('mensaje').value = "";
        }



















/*const listadecompras=document.querySelector('ul');//lista de compras
const li=document.createElement('li');
li.textContent='manzana';//creacion del nuevo elemento
listadecompras.appendChild(li);//agregamos elemento li a la lista*/

/*const a=document.querySelector('ul');
const comida=['huevo','rata','zanahoria','dinosaurio'];
for(let i=0;i<comida.length;i++){
    const li=document.createElement('li');
    li.textContent=comida[i];
    a.appendChild(li);
}*/
/*const comida=['huevo','rata','zanahoria','dinosaurio'];
comida.forEach(item=>{
const li=document.createElement('li');
li.textContent=item;
listadecompras.appendChild(li);
})*/

/*function calcularYCambiarColor() {
    let a = parseInt(prompt("Inserta un número"));
    let b = parseFloat(prompt("Elige el porcentaje a sacar del número ingresado"));

    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, inserta valores válidos.");
        return; // Salir de la función si hay un error
    }

    let resultado = (a / 100) * b;
    alert("El resultado es: " + resultado); // Muestra el resultado
}*/

 // Función para manejar el envío del formulario
