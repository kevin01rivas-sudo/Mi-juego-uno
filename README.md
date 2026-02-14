<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>UNO Online</title>

<style>
body{
  font-family: Arial;
  background:#0b5;
  color:white;
  text-align:center;
  margin:0;
  padding:20px;
}
input,button{
  padding:10px;
  font-size:18px;
  border-radius:8px;
  border:none;
  margin:5px;
}
button{background:#ffcc00;}
.card{
  display:inline-block;
  background:white;
  color:black;
  padding:15px;
  margin:5px;
  border-radius:10px;
  font-weight:bold;
}
</style>
</head>

<body>

<h1>UNO Online</h1>

<div id="login">
  <input id="name" placeholder="Tu nombre">
  <button onclick="join()">Entrar</button>
</div>

<div id="game" style="display:none">
  <h2 id="playerName"></h2>
  <p>Jugadores en sala:</p>
  <div id="players"></div>
</div>

<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-database-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  databaseURL: "https://TU_PROYECTO-default-rtdb.firebaseio.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "000000",
  appId: "APPID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function join(){
  const name=document.getElementById("name").value;
  if(!name) return alert("Escribe tu nombre");

  const id=Math.random().toString(36).substr(2,9);
  db.ref("players/"+id).set({name});

  document.getElementById("login").style.display="none";
  document.getElementById("game").style.display="block";
  document.getElementById("playerName").innerText="Jugador: "+name;
}

db.ref("players").on("value",snap=>{
  const data=snap.val()||{};
  let html="";
  for(let id in data){
    html+="<div>"+data[id].name+"</div>";
  }
  document.getElementById("players").innerHTML=html;
});
</script>

</body>
</html>
