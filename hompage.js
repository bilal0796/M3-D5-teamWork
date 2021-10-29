fetch("https://striveschool-api.herokuapp.com/books")
.then(resp=>resp.json())
.then((data) => {
const img=data.title
console.log(img)
})
