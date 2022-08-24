
////////////////////////global variables////////////////////////

var nameUserInput = document.getElementById('nameUserInput');
var emailInput = document.getElementById('emailInput');
var phoneInput = document.getElementById('phoneInput');
var ageInput = document.getElementById('ageInput');
var passInput = document.getElementById('passInput');
var rePassInput = document.getElementById('rePassInput');


///////////////////////Movies Api//////////////////////
let row = document.getElementById('rowData');
let searchMovie = document.getElementById('searchMovie');
let searchWord = document.getElementById('searchWord');
let result = document.getElementById('result');

let allData = [];
let allSearch =[];

for(let i=0; i<allData.length; i++ ){
    allData[i].addEventListener('click', function(e){

        let term =  e.target.innerHTML;
        console.log(e.target.innerHTML);
        getMovies(term);

    });

}
///////////////////////////////

async function getMovies (){
    let result = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k'); 
    
    let data = await result.json();
    
    console.log(data);

    allData = data.results;

    displayMovie ();

}
getMovies();


function displayMovie (){
    let str = ``;
    for(let i = 0 ; i<allData.length ; i++){
        str +=`<div class="col-md-6 col-lg-4 my-3 shadow overflow-hidden">
                <div class="film shadow rounded position-relative ">
                <img src="https://image.tmdb.org/t/p/w500/${allData[i].poster_path}" class="img-fluid rounded">
                <div class="oneFilm d-flex align-items-center">
                <div class="filmInfo p-0" >
                    <h2>${allData[i].original_title}</h2>
                    <p class="textJustified">${allData[i].overview}</p>
                    <p>${allData[i].vote_average}</p>
                    <p>${allData[i].release_date}</p>
                </div>
            </div>
        </div>
    </div>`
    }
    row.innerHTML = str;
}


///////////////////////////////

function searchInput(){

    var searchStr='';
    for(let i=0;i<allData.length;i++)
    {
        if(allData[i].original_title.toLowerCase().includes(searchWord.value.toLowerCase()))
    { 
        searchStr+=`
        <div class="content  rounded-2 m-3 col-md-3 position-relative">
        <img src="https://image.tmdb.org/t/p/w500/${allData[i].poster_path}" class="w-100 rounded-2">
        <div class=" text bg-white text-dark opacity-75 ">
        <h2 class="text-center">${allData[i].original_title}</h2>
        <p class="text-center">${allData[i].overview}</p>
        <p class="text-center">rate:${allData[i].vote_average}</p>
        <p class="text-center">${allData[i].release_date}</p>
        </div>
        </div>
    `}
    }
    row.innerHTML=searchStr;
}

searchWord.onkeyup = function(){
    searchInput ();
}

////////////////////////////////

async function searchMovies (e){
    let resultmovies = await fetch('https://api.themoviedb.org/3/search/movie?query='+ e +'&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false'); 
    
    let data2 = await resultmovies.json();
    
    console.log(data2);

    allSearch = data2.results;

    let str2 = ``;
    for(let i = 0 ; i<allSearch.length ; i++){
        str2 +=`<div class="col-md-6 col-lg-4 my-3 shadow overflow-hidden">
                <div class="film shadow rounded position-relative ">
                <img src="https://image.tmdb.org/t/p/w500/${allSearch[i].poster_path}" class="img-fluid rounded">
                <div class="oneFilm d-flex align-items-center">
                <div class="filmInfo p-0" >
                    <h2>${allSearch[i].original_title}</h2>
                    <p class="textJustified">${allSearch[i].overview}</p>
                    <p>${allSearch[i].vote_average}</p>
                    <p>${allSearch[i].release_date}</p>
                </div>
            </div>
        </div>
    </div>`
    }
    row.innerHTML = str2;

}

searchMovie.onkeyup = function(){
    searchMovies(searchMovie.value)
};



////////////////////////validation of name/////////////////////////

function validateUserName(){
   var alertNameUserInput = document.getElementById('alertNameUserInput');

    var regaxUserName = /^[A-Za-z][A-Za-z0-9_]{2,}$/;
    

    if(regaxUserName.test(nameUserInput.value)== true)
    {
       // console.log('true');
        alertNameUserInput.classList.add('d-none');
    }
    else
    {
       //console.log('false');
       alertNameUserInput.classList.remove('d-none');
    }
}
nameUserInput.addEventListener('keyup', validateUserName);

///////////////////////validation of email//////////////////////////
function validateEmail(){
  var alertEmailInput = document.getElementById('alertEmailInput');
var regaxEmail = /^[A-Za-z0-9]+@[A-Za-z]+(.com)$/;

if (regaxEmail.test(emailInput.value)== true)
{
    alertEmailInput.classList.add('d-none');
}
else
{
       alertEmailInput.classList.remove('d-none');
}
}
emailInput.addEventListener('keyup', validateEmail);


/////////////////////////validation of phone///////////////////////////
function validatePhoneNumber(){
    var alertPhoneInput = document.getElementById('alertPhoneInput');
    var regaxPhoneNumber = /^\+*[0-9]{1,12}$/;

    if(regaxPhoneNumber.test(phoneInput.value) == true)
    {
        alertPhoneInput.classList.add('d-none');
    }
    else
    {
        alertPhoneInput.classList.remove('d-none');
    }
}
phoneInput.addEventListener('keyup' , validatePhoneNumber);



/////////////////////////validation of Age///////////////////////////
function validateAge(){
   var alertAgeInput = document.getElementById('alertAgeInput');
    var regaxAge = /^([1-9]|[1-9][0-9]{1}|100)$/;
    
    if(regaxAge.test(ageInput.value)== true)
    {
        alertAgeInput.classList.add('d-none');
    }
    else
    {
       alertAgeInput.classList.remove('d-none');
    }
}
ageInput.addEventListener('keyup', validateAge);

/////////////////////////validation of password///////////////////////////
function validatePassword(){
    var alertpassInput = document.getElementById('alertpassInput');
     var regaxPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
     
     if(regaxPassword.test(passInput.value)== true)
     {
         alertpassInput.classList.add('d-none');
     }
     else
     {
        alertpassInput.classList.remove('d-none');
     }
 }
 passInput.addEventListener('keyup', validatePassword);

 /////////////////////////Repassword/////////////////////////
 function validateRePassword(){
  var alertRepassInput = document.getElementById('alertRepassInput');
     if( passInput.value == rePassInput.value)
     {
        
        alertRepassInput.classList.add('d-none');
     }
     else
     {
        alertRepassInput.classList.remove('d-none');
     }
 }
 rePassInput.addEventListener('keyup' , validateRePassword);

 //////////////////////////side menu///////////////////////////////


 $(".open").click( function(){
    
     
    $('.sidenav').css("display" , "block");
    $('.sidenav').animate({width:'16%'} , 500);
    $('.fixedMenuPart').animate({left:'16%'} , 500 );

    $('link').css("display" , "block" , 2000);

 });
$('.sidenav').click( function(){
    $('.sidenav').animate({width:'0'} );
    $('.fixedMenuPart').animate({left:'0'});

})
       
    






//  function animateMenu(){
//     $('.sidenav').animate({width:'16%'},500);
//     $('.fixedMenuPart').animate({left:'16%'},500,function()  {
//         $('.link').slideup(500)})
//     $('.open').hide(0);
//     $('#close').show(0);
//     }
    
    
    
     
    
//      function hideMenu(){
//          $('.sidenav').animate({width:0},500);
         
//          $('#close').hide(0);
//          $('.open').show(0);
// }