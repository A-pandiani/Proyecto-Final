/* console.log("correcto"); */
document.querySelector('#json').addEventListener('click', traerDatos);

function traerDatos(){
   /*  console.log("dentro de la funcion"); */

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'promos.json', true);

    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            /* console.log(this.responseText) */;
            let datos = JSON.parse(this.responseText);
            /* console.log(datos); */
            let res = document.querySelector('#res');
            res.innerHTML = ' ';

            for(let item of datos){
                /* console.log(item); */
                res.innerHTML += `
                <tr>
            <td>${item.Tarjeta}</td>
            <td>${item.Promo}</td>
            
          </tr>
                
                
                `
            }
        }
    }
}


