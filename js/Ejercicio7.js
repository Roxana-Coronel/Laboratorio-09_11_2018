var Gener=prompt("Por favor ingrese su genero");
var age=parseInt(prompt("Por favor ingrese su edad"));

while(Gener!=isNaN && isNaN(age)){
    alert("Por favor ingrese valores validos");
    Gener=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}
while (age<18){
    alert("Lo sentimos pero no puedes ingresar a la fiesta")
    Gener=prompt("Por favor ingrese su genero");
    age=parseInt(prompt("Por favor ingrese su edad"));
}
var countMen=0;
var countWomen=0;
var ageWomen=0;
var ageMen=0;
while (age!=0) {
    if(Gener=="hombre"){
        countMen++;
        ageMen=ageMen+age;
    }
    else if(Gener=="mujer"){
        countWomen++;
        ageWomenomen=ageWomen+age; 
    }
    Gener=prompt("Por favor ingrese su genero");
    age=prompt("Por favor ingrese su edad");
}

var sum=countMen+countWomen;
var avgWomen=ageWomen/countWomen;
var avgMen=ageMen/countMen;
document.write("<p>A la fiesta ingresaron "+sum+"</p><p>Ingresaron "+countMen+" hombres</p><p>Ingresaron "+countWomen+" mujeres");
document.write("<p>El promedio de edad por hombres es de: "+avgMen+"</p><p>El promedio de edad por mujeres es de: "+avgWomen+"</p>");
