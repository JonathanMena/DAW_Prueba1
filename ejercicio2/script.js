function calcularSalario() {
  const nombre = document.getElementById("nombre").value;
  const cargo = document.getElementById("cargo").value;
  const horasTrabajadas = parseFloat(document.getElementById("horas").value);
  const pagoPorHora = parseFloat(document.getElementById("pagoPorHora").value);
  
  const salarioBase = horasTrabajadas * pagoPorHora;
  const descuentoISSS = salarioBase * 0.03; // 3% de descuento isss
  const descuentoAFP = salarioBase * 0.0725; // 7.25% de descuento AFP
  const salarioNeto = salarioBase - descuentoISSS - descuentoAFP;

  let mensajeRenta = "";
  let salarioRenta = salarioNeto;

  if (salarioBase >= 0.01 && salarioBase < 472.00) {
    mensajeRenta = "No paga renta";
  } if(salarioBase >=473.00 && salarioBase < 892.00 ) {
    mensajeRenta = "Paga 10 %";
    salarioRenta = salarioNeto - 17
  } if(salarioBase >=893.00 && salarioBase < 2000.00 ) {
    salarioRenta = salarioNeto - 60
    mensajeRenta = "Paga 20 %";
  } if(salarioBase >=2001.00 && salarioBase < 5000.00 ) {
    salarioRenta = salarioNeto - 288
    mensajeRenta = "Paga 30 %";
    
  }

  document.getElementById("resname").textContent = nombre;
  document.getElementById("resposition").textContent = cargo;
  document.getElementById("resSalariBase").textContent = salarioBase.toFixed(2);
  document.getElementById("discountISSS").textContent = descuentoISSS.toFixed(2);
  document.getElementById("discountAFP").textContent = descuentoAFP.toFixed(2);
  document.getElementById("resSalariNeto").textContent = salarioNeto.toFixed(2);
  document.getElementById("resRent").textContent = mensajeRenta;
  document.getElementById("resSalariRent").textContent = salarioRenta.toFixed(2);
}
