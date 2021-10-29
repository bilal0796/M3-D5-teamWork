fetch("https://striveschool-api.herokuapp.com/books")
.then(Response=>Response.json())
.then(body=>{
    const row = document.querySelector(".row")
    for(let loop = 0; loop < 10; loop++){
        const obj = body[loop]
        console.log(obj)
        const col = document.createElement("div")
        col.className ="col"
        col.innerHTML = `
        <div class="carbon-example flex-wrapper" style="position: relative">
              <img
                src="${obj.img}"
                style="
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  height: 70px;
                  object-fit: cover;
                  border-top-left-radius: 6px;
                  border-bottom-left-radius: 6px;
                "
                alt="example design logo"
              />
              <div
                class="inner-wrapper"
                style="position: static; padding-left: 70px"
              >
                <p onclick="document.location='album.html'" style="font-size:xx-small">
                ${obj.title}
                </p>
              </div>
            </div>
          </div>
        `
        row.appendChild(col)
    }
})
.then(body=>{

    const container = document.querySelector(".container1")
    const row1 = document.createElement("div")
    row1.className="row"
    const coldiv=row1
    coldiv.innerHTML=document.createElement("div")
    coldiv.className
    for(let loop = 0; loop < 10; loop++){
    const obj2 = body[loop]
        console.log(obj2)
        const col2 = document.createElement("div")
        col2.className ="col"
        col2.innerHTML = `
        <div class="card" style="
        width: 8rem;
        height: 200px;
        background-color: rgb(41, 40, 40);
      ">
            <img src=${obj2.img} class="card-img-top" style="position: absolute; width: 110px; top: 9px; left: 8px" alt="...">
            <div class="card-body" style="
            position: absolute;
            top: 120px;
            left: -10px;
            font-size: x-small;
          ">
                
            <p class="title" style="font-size: xx-small; color: rgb(156, 157, 158)">${obj2.title}</p>
                <div>
                <p>${obj2.category}</p>
                <p>$${obj2.price}</p>
                </div>
                
            </div>
        </div>
        `
        row1.appendChild(col2)
        container.appendChild(row1)
    }
})


// .then((body)=>{
//     const row = document.querySelector(".row")
//     for(let loop = 0; loop < 6; loop++){
//         const obj = body[loop]
//         console.log(obj)
//         const col = document.createElement("div")
//         col.className ="col-9"
//         col.innerHTML = `
//         <div class="card" style="
//         width: 8rem;
//         height: 200px;
//         background-color: rgb(41, 40, 40);
//       ">
//             <img src=${obj.img} class="card-img-top" style="position: absolute; width: 110px; top: 9px; left: 8px" alt="...">
//             <div class="card-body" style="
//             position: absolute;
//             top: 120px;
//             left: -10px;
//             font-size: x-small;
//           ">
                
//             <p class="title" style="font-size: xx-small; color: rgb(156, 157, 158)">${obj.title}</p>
//                 <div>
//                 <p>${obj.category}</p>
//                 <p>$${obj.price}</p>
//                 </div>
                
//             </div>
//         </div>
//         `
//         row.appendChild(col)
//     }
// })
