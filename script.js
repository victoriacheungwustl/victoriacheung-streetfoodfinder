document.getElementById("searchbtn").addEventListener('click', getData);
document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchbtn").click();
    }
});

function getData(){ 
    // Setting variable for form input (get from HTML form)
    var data = document.getElementById("search").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var vendors = JSON.parse(this.responseText);
        console.log(vendors);

        displayData(vendors); 

        }
    };
    //CORS ERROR: how to fix cors error - have to request temporary access 
    //https://cors-anywhere.herokuapp.com/corsdemo 
    //ask clapp if final project is too simple
    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/" + data, true); //AJAX call GET request to cse 204 API 
    //xhttp.setRequestHeader("x-api-key","cfa315-c56177-5dd181-f969db-726b0f"); //only required for bars api 
    xhttp.send(); 

    document.getElementById("search").value = ""; 
}

//is this necessary? 
// xhttp.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//         var vendors = JSON.parse(this.responseText);
//         console.log(vendors);
//         //render the vendors
//       }
//     };


//FIX: HOW TO DISPLAY DATA FROM API REQUEST? 
function displayData(vendors){
    for (i=0; i < vendors.length; i++) {
        //create a new list element for each vendor
        var initialToDo = document.createElement("li");
        initialToDo.innerHTML=vendors[i].text;
        initialToDo.setAttribute("id", vendors[i].id);
        document.getElementById("list").appendChild(initialToDo);

    }

    xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://data.streetfoodapp.com/1.1/schedule/" + data, true); //AJAX call GET request to cse 204 API 
    //xhttp.setRequestHeader("x-api-key","cfa315-c56177-5dd181-f969db-726b0f"); //only required for bars api 
    xhttp.send(); 
}; 