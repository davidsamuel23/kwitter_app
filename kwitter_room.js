

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcgMHmFV9vCwDfwN4FDLfW60eZfJFm5d0",
  authDomain: "classtest-63a10.firebaseapp.com",
  databaseURL: "https://classtest-63a10-default-rtdb.firebaseio.com",
  projectId: "classtest-63a10",
  storageBucket: "classtest-63a10.appspot.com",
  messagingSenderId: "448529056789",
  appId: "1:448529056789:web:c0a7257b26fc5d4dce3a1c"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
   
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

