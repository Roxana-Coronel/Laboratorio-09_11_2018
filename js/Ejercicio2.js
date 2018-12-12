


var kilo=parseInt(prompt("Ingrese numero de kilos que desea comprar"));
var totalDiscount;
var total;
total=(kilo)*(4200);
var discount;
var num;

document.write("<h1>La compra de" + kilo + " kilos tiene un valor de:" +total+ "<br>");


 
if(num>=0 && num<=2){
     discount=(kilo-0);
     document.write("<h1>Usted no tiene descuento de 0%</h1>"+discount);
     totalDiscount=(total)-(discount);
     document.write("Por lo tanto su total a pagar es :"+"<br>"+totalDiscount);
    }
   
    else  if(num>=2,01 && num<=5){
        discount=(kilo-0,10) ;
        document.write("<h1>Usted tiene un descuento de 10%</h1>");
        totalDiscount=(total)-(discount);
     }
    else if(num>=5,01&& num<=10){
        discount=(kilo-0,15) ;
        document.write("<h1>Usted tiene un descuento de 15%</h1>");
        totalDiscount=(total)-(discount);
     }
  else if(num>=10,01 ){
        discount=(kilo-0,20) ;
        document.write("<h1>Usted tiene un descuento de 20% </h1>");
        totalDiscount=(total)-(discount);
     }


   