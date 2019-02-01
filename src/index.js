function extraerdatos (){
  const input = document.getElementById("in").value;
  const key = parseInt(document.getElementById("key").value);
  const output = window.cipher.encode(key,input);
  document.getElementById('output').innerHTML = output;

}
document.getElementById("encrypt").addEventListener("click",extraerdatos);

function extraerdatosdec (){
  let input = document.getElementById("in").value;
  let key = parseInt(document.getElementById("key").value);
  let output = window.cipher.decode(key,input);
  document.getElementById('output').innerHTML = output;
}
document.getElementById("decrypt").addEventListener("click",extraerdatosdec);
