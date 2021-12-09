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
       // console.log(vendors);

        displayData(vendors.vendors); 

        }
    };
    //CORS ERROR: how to fix cors error - have to request temporary access 
    //https://cors-anywhere.herokuapp.com/corsdemo 
    //ask clapp if final project is too simple
    xhttp.open("GET", "http://data.streetfoodapp.com/1.1/schedule/" + data, true); //AJAX call GET request to cse 204 API 
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
    console.log(vendors);
    var listdata =  document.getElementById("list");

    for (const [key, value] of Object.entries(vendors)) {
        //create a new list element for each vendor
        var vendor = key; 
        var initialToDo = document.createElement("li");
        initialToDo.appendChild(document.createTextNode(vendor));
       // initialToDo.innerHTML=vendors[i].text;
       initialToDo.setAttribute("id", vendor);
       // document.getElementById("list").appendChild(initialToDo);
       listdata.appendChild(initialToDo);
       //makes another unordered list under list item you can append to
       // var sublist = initialToDo.appendChild("ul");
       //console.log(key); 
      initialToDo.addEventListener('click',showVendorData.bind(event, vendor, value), false);
    //initialToDo.addEventListener("click", (event, key, value) => showVendorData(event, key, value));
    }

}; 

var showVendorData = function(event, name, data){
    console.log(name.identifier);
    console.log(data);
    var vendor = document.getElementById(name.identifier);
    console.log(vendor);
    var ul = document.createElement("ul"); 
   // console.log(name); 
    // for (const [key, value] of Object.entries(name)){
    //     var initialToDo = document.createElement("li");
    //     initialToDo.appendChild(document.createTextNode(key + ": " + value));
    //     sublist.appendChild(initialToDo);
    // }
    var description = document.createElement("li");
    description.appendChild(document.createTextNode("description: " + name.description));
    description.id = "description"; 
    //check if we have added description--> ERROR !!!! this only works for the first list element 
    if (!vendor.contains(document.getElementById("description"))){
        var sublist = vendor.appendChild(ul); 
        sublist.appendChild(description);
    }
}

//display cities button
document.getElementById("displayCitiesBtn").addEventListener('click', displayCities);
function displayCities(){
    //make cities array and display it 
}


//cities that work 
//ottawa 
//vancouver
//london
//richmond

// function showVendorData(event, name, data){

//     console.log(data);
//     var vendor = document.getElementById(name);
//     var ul = document.createElement("ul"); 
//     var sublist = vendor.appendChild(ul); //error
//     console.log(name); 
//     for (const [key, value] of Object.entries(data)){
//         var initialToDo = document.createElement("li");
//         initialToDo.appendChild(document.createTextNode(key + ": " + value));
//         sublist.appendChild(initialToDo);
//     }
// }