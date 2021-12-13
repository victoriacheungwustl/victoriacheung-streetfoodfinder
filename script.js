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
      initialToDo.classList.add("vendorname");
      document.getElementById("maindiv").style.display = "block";
    //initialToDo.addEventListener("click", (event, key, value) => showVendorData(event, key, value));
    }

}; 

var showVendorData = function(event, name, data){
    console.log(name.identifier);
    //console.log(data);
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
    description.appendChild(document.createTextNode(name.description));
    description.id = "description-" + name.identifier; 
    //check if we have added description--> ERROR !!!! this only works for the first list element 
    if (!vendor.contains(document.getElementById("description-" + name.identifier))){
        var sublist = vendor.appendChild(ul); 
        sublist.appendChild(description);
    }
    description.classList.add("vendorinfo");


    var url = document.createElement("li");
    url.appendChild(document.createTextNode("Website: " + name.url));
    url.id = "url-" + name.identifier; 
    //check if we have added description--> ERROR !!!! this only works for the first list element 
    if (!vendor.contains(document.getElementById("url-" + name.identifier))){
        var sublist = vendor.appendChild(ul); 
        sublist.appendChild(url);
    }
    url.classList.add("vendorinfo");

    var email = document.createElement("li");
    email.appendChild(document.createTextNode("Email: " + name.email));
    email.id = "email-" + name.identifier; 
    //check if we have added description--> ERROR !!!! this only works for the first list element 
    if (!vendor.contains(document.getElementById("email-" + name.identifier))){
        var sublist = vendor.appendChild(ul); 
        sublist.appendChild(email);
    }
    //email.classList.add("subliststyle") //can replace sublist style with bootstrap class 
    email.classList.add("vendorinfo");

    var phone = document.createElement("li");
    phone.appendChild(document.createTextNode("Phone Number: " + name.phone));
    phone.id = "Phone Number-" + name.phone; 
    //check if we have added description--> ERROR !!!! this only works for the first list element 
    if (!vendor.contains(document.getElementById("Phone Number-" + name.phone))){
        var sublist = vendor.appendChild(ul); 
        sublist.appendChild(phone);
    }


}


//STUFF I NEED TO DO: 
//make a comment on the submission about CORS temporary access request error 
//code a footer 
//make sure links work 


function displayCities(){
    var T = document.getElementById("result"); 
    T.style.display = "block"; 

}

