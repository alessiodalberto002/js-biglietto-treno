const km = prompt("quanti km vuoi percorrere?");
const eta = prompt("inserisci la tua età");

const price = 0.21 * km;
const scontoMinori = price * (20/100);
const scontoAnzini = price * (40/100)
const prezzoFinaleMinori = price - scontoMinori; 
const prezzoFinaleAnziani = price - scontoAnzini;

if(eta < 18 || eta > 65){
    console.log(prezzoFinaleMinori);
    console.log(prezzoFinaleAnziani);
}