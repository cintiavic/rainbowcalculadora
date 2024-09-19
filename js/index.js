/* PRECIOS INDIVIDUALES */

const pMost = 6.4;
const pCar = 9.4;
const pCor = 11.5;
const pEst = 11.5;
const pLetNum = 11.5;
const pOji = 18.8;
const pFim = 7.8;
const pGan = 160;/*  por par arandela + gancho */
const pTan = 0.3;/* por centímetro */
const pHil = 1;/* por centímetro */

function calcular () {
    /* 1. Traigo las cantidades que se ingresaron en la grilla */
    
    const cantMost = parseInt(document.getElementById("cMostacillas").value);
    console.log(cantMost);
    const cantCar = parseInt(document.getElementById("cCaritas").value);
    console.log(cantCar);
    const cantCor = parseInt(document.getElementById("cRedondoCorazones").value);
    console.log(cantCor);
    const cantEst= parseInt(document.getElementById("cRedondoEstrellitas").value);
    console.log(cantEst);
    const cantLetNum = parseInt(document.getElementById("cLetrasNumeros").value);
    console.log(cantLetNum);
    const cantOji = parseInt(document.getElementById("cOjosTurcos").value);
    console.log(cantOji);
    const cantFim = parseInt(document.getElementById("cFimos").value);
    console.log(cantFim);
    const cantGan = parseInt(document.getElementById("cGanchitos").value);
    console.log(cantGan);
    const cantTan = parseInt(document.getElementById("cTanzaElastica").value);
    console.log(cantTan);
    const cantHil = parseInt(document.getElementById("cHiloEncerado").value);
    console.log(cantHil);


     /* 2. Calculo los costo individuales */

     const cMost = cantMost * pMost;
     const cCar = cantCar * pCar;
     const cCor = cantCor * pCor;
     const cEst = cantEst * pEst;
     const cLetNum = cantLetNum * pLetNum;
     const cOji = cantOji * pOji;
     const cFim = cantFim * pFim;
     const cGan = cantGan * pGan;
     const cTan = cantTan * pTan;
     const cHil = cantHil * pHil;

     /*3. Inserto los valores en el correpsondiente elemento del DOM*/

    document.getElementById("costoMost").innerText = "$" + Math.round(cMost);
    document.getElementById("costoCar").innerText = "$" + Math.round(cCar);
    document.getElementById("costoCor").innerText = "$" + Math.round(cCor);
    document.getElementById("costoEst").innerText = "$" + Math.round(cEst);
    document.getElementById("costoLetNum").innerText = "$" + Math.round(cLetNum);
    document.getElementById("costoOji").innerText = "$" + Math.round(cOji);
    document.getElementById("costoFim").innerText = "$" + Math.round(cFim);
    document.getElementById("costoGan").innerText = "$" + Math.round(cGan);
    document.getElementById("costoTan").innerText = "$" + Math.round(cTan);
    document.getElementById("costoHil").innerText = "$" + Math.round(cHil);

    const costoTotal = cMost + cCar + cCor + cEst + cLetNum + cOji + cFim + cGan + cTan + cHil;
    document.getElementById("costoTotal").innerText = "$" + Math.round(costoTotal);

    const pv1 = costoTotal * 3;
    const pv2 = costoTotal * 2.75;
    const pv3 = costoTotal * 2.5;

    document.getElementById("precioVenta1").innerText = "$" + Math.round(pv1);
    document.getElementById("precioVenta2").innerText = "$" + Math.round(pv2);
    document.getElementById("precioVenta3").innerText = "$" + Math.round(pv3);

    document.getElementById("seccionTotales").classList.add("visible");


        
};

function borrarTodo(){
    document.getElementById("costoMost").innerText = "$" + 0;
    document.getElementById("costoCar").innerText = "$" + 0;
    document.getElementById("costoCor").innerText = "$" + 0;
    document.getElementById("costoEst").innerText = "$" + 0;
    document.getElementById("costoLetNum").innerText = "$" + 0;
    document.getElementById("costoOji").innerText = "$" + 0;
    document.getElementById("costoFim").innerText = "$" + 0;
    document.getElementById("costoGan").innerText = "$" + 0;
    document.getElementById("costoTan").innerText = "$" + 0;
    document.getElementById("costoHil").innerText = "$" + 0;

    document.getElementById("seccionTotales").classList.remove("visible");
}

let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    calcular();
});

let btnBorrarTodo = document.getElementById("btnBorrarTodo");

btnBorrarTodo.addEventListener("click",()=>{
   
    borrarTodo();
})