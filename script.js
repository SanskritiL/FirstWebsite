
function subscribe(){
    var emailOfCustomer = document.getElementById('emailid').value;

    if(document.getElementById("emailid").value===''){
        alert("Please enter a valid email address");
    }
    else{
        alert(`${emailOfCustomer} has been added to our mailing list` );
       

    }
}

function change(){
    if(document.getElementById("button_2").value==='GET CODE !!!'){
 document.getElementById("button_2").value = 'BRIDETOBE';
    }
    else{
        document.getElementById("button_2").value = 'GET CODE !!!';   
    }
}

function getPrice(){
    if(document.getElementById("option1").checked){
        document.getElementById("text").value='NPR 75,000';
           }
           else if(document.getElementById("option2").checked){
            document.getElementById("text").value='NPR 30,000';
           }
           else{
            document.getElementById("text").value='NPR 12,000';
           }
}
/*
Rating the website. Select a Catagory and input the rating and after the using leaves the input field ratings will be updated.

*/

const ratings = {
 quality: 5,
 price: 3.5,
 variety: 4
}

const starTotal = 5;


document.addEventListener('DOMContentLoaded',getRatings());

const catagorySelect = document.getElementById('select-catagory');
const ratingControl = document.getElementById('rating-control');


//Init catagories
let catagory;

//catagory select change
catagorySelect.addEventListener('change', (e) => {
catagory = e.target.value;
console.log(catagory);

//enable rating control
ratingControl.disabled = false;
ratingControl.value = ratings[catagory];

});



//taking care of actual rating

ratingControl.addEventListener('change', (e) => {
    const rating = e.target.value;

    //checking for validity of rating number (1-5)

  if(rating > 5){
      alert('Rate 1-5');
      return;
  }
 //change/update the rating
 ratings[catagory]=rating;
 getRatings();
});


function getRatings(){
for(const rating in ratings){

    const starPercentage = (ratings[rating] / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded; 


   
}
}