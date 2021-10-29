let jumboContainer = document.querySelector(".jumboConatainer")
let buttonsThreeDots = document.querySelector(".buttonsThreeDots ")

    window.onload = ()=> {
        loadJumboImg()
}
function loadJumboImg (){
fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/412')
.then(response => response.json())
.then((artist) =>{


    console.log(artist)
    displayJumbo(artist)
    displayTable(artist)
})
.catch(error => console.log(error))
};

function displayJumbo(artist){
 // artists.forEach((artist) => {
    jumboContainer.innerHTML +=`

    <div class="verified-artist-container">
    <i class="jumbo-icon bi bi-patch-check-fill"></i>
    <span class="verified-artist-text">${artist.name}</span>
    </div>
    <img class="w-100 jumbo-img" src="${artist.picture_xl}" alt="">
    <h1 class="jumbo-title">Queen</h1>
    <p class="jumbo-parag">37,120,733 listeners</p>
    `
}
    function displayTable(artist){
      buttonsThreeDots.innerHTML +=`
      <div class="row">
      <div class="col-3 mt-n1">
        <div class="play-button-group d-flex">
          <div class="play-btn d-flex justify-content-center mr-5" onclick="playPauseToggle()"">
              <img class=" play-triangle" src="./mp_assets/spotify play triangle.svg" alt="">
            <img class="pause-bars d-none" src="./mp_assets/spotify pause bars bigger.svg" alt="">
            <!-- <ion-icon name="play"></ion-icon> -->
            <!-- <div class="play-btn-triangle"></div> -->
          </div>
        </div>
      </div>
      <div class="col-9 ml-n5 mt-2">
        <div class="secondary-button-group d-flex">
          <button class="follow-btn mr-5">FOLLOW</button>
          <div class="three-dots">
            <img id="three-dots-white" class="" src="./mp_assets/three-dots.svg" alt="">
            <img id="three-dots-black" class="d-none" src="./mp_assets/three-dots-black.svg" alt="">
          </div>
        </div>
      </div>
    </div>
      `

    }
    // ` 
// // // <div class= "col-12 col-sm-6 col-md-4 col-lg-3 py-3"
// // // <div class="card">
// // // <img src="${book.img}" class="card-img" alt="...">
// // // <div class="card-body">
// // //     <h5 class="card-title">${book.title}</h5>
// // //     <button onclick = "addToCart(${book.asin})"id ="add-cart" class="d-inline p-2 bg-success text-white">${book.price}</button>
// // //     <button class="d-inline p-2 bg-dark text-white">omit</button>
// // //     </div>
// // //     </div>
// // //     </div>`


// +=`
