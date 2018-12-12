


var IdNumber=prompt("Cedula");
var Name=prompt("Nombre del vendedor");
var Salary=prompt("Ingrese el valor de su sueldo mensual");
var Dayslab=prompt("Dias Laborados");
var Sale=prompt("Valor de sus ventas")
var Loans=prompt("Prestamos dilingenciados");

if(Salary<=1562484){
    var work=(Salary*Dayslab)/30;
    var commission=Sale*0.2;
    var transportationAid=(88.211*Dayslab)/30;
    var commission=Sale*0.2;
    var debt=Loans;
   var total =(work+commission+transportationAid)-Loans;

}else if(Salary>1562484){

    var commission=Sale*0.2;
    var work=(Salary*Dayslab)/30;
    var debt=Loans;
    var total =(work+commission)-Loans;
}
document.write("Cedula Empleado :"+IdNumber+ "<br>");
document.write("Nombre Empleado "+Name+ "<br>");
document.write("salario Básico "+Salary+ "<br>");
document.write("Auxilio de Transporte: "+transportationAid+ "<br>");
document.write("Comisión de venta: "+commission+ "<br>");
document.write("Préstamos "+debt+ "<br>");
document.write("Salario Neto a Recibir: "+total+ "<br>");











