const comprarBoton = document.querySelector('.comprarBoton');

comprarBoton.addEventListener('click', comprarBotonClicked ); 



function comprarBotonClicked() {};
Swal.fire({
    title: 'Eres mayor de edad?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: '+18',
    cancelButtonText: '-18',
    reverseButtons: false,
    confirmButtonColor: '#28a745',
    cancelButtonColor: '#dc3545',
    color: '#ffffff',
        background:'#212529',
        allowOutsideClick: false,
       
    
    
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Bienvenido a Kira`s',
        text: 'Lo estabamos esperando..',
        icon:'success',
        confirmButtonColor: '#28a745',
        color: '#ffffff',
        background:'#212529',
        
        }
      )
    } else if (
      
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire({
       title: 'Denegado!',
        text: 'Pero... por esta vez podes pasar.',
       icon: 'error',
       
       backdrop:`
       rgba(0,0,0)
     ` ,
     color: '#ffffff',
        background:'#212529',
        confirmButtonColor: '#28a745',
        
        }
      )
    }
  })