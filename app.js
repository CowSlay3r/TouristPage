
// ================ navbar toggle function ================================

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// ======================= CARD ============================

var arr = [
    {
        img: "./img/plane.png",
        title: "FLIGHT BOOKING",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur assumenda, earum'
    },

    {
        img: "./img/hotel.png",
        title: "HOTEL & RESORT BOOKING",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur assumenda, earum'
    },

    {
        img: "./img/family.png",
        title: "FAMILY TRIP PLANNER",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur assumenda, earum'
    },

    {
        img: "./img/cruise.png",
        title: "CRUISE TOUR",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur assumenda, earum'
    },

    {
        img: "./img/fire.png",
        title: "FIRE CAMP",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur assumenda, earum'
    },

    {
        img: "./img/corporate.png",
        title: "CORPORATE HOLIDAYS",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur assumenda, earum'
    }
];


arr.forEach(function(element, index) {
    var mylist = document.getElementById('make-card');
    mylist.insertAdjacentHTML('beforeend', '<div onClick="openmodal('+index+')"  class= "card"><div class="content"><div class="head"><img src="'+element.img+'" alt="plane image" id="img" id="img"></div><div class="title"><h3>'+element.title+'</h3></div><div class="text"><p>'+element.desc+'</p></div></div></div>');
});



// ==================== MODAL ===========================

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openmodal(id)  {
    console.log(arr[id]);
    document.getElementById("modal-img").src = arr[id]['img'];
    document.getElementById("modal-h3").innerHTML = arr[id]['title'];
    document.getElementById("modal-p").innerHTML = arr[id]['desc'];
    modal.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



