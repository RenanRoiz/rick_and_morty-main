const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export function validate(inputs){
  let errors={}
  
  if (!regexEmail.test(inputs.email)){
    errors.email="Debe ser un correo electrónico"
  }
  if (!inputs.message){
    errors.message="Se requiere un mensaje"
  }
  return errors;
}