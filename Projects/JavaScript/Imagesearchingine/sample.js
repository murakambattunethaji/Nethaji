const accesskey = "xfHagP0SZyySBvsb6hjF6GkZEqIkSzL49koWS4XhRY0"

const searchform = document.getElementById("search-form")
const searchbox = document.getElementById("search-box")
const searchresult = document.getElementById("search-result")
const showmorebtn = document.getElementById("show-more-btn")

let keyword = ""
let page = 1

async function searchimage() {
    keyword = searchbox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url)
    const data = await response.json()

    if (page === 1) {
        searchresult.innerHTML = ""
    }


    const result = data.results

    result.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small
        const imagelink = document.createElement("a")
        imagelink.href = result.links.html
        imagelink.target = "_blank"        
        imagelink.appendChild(image)
        searchresult.appendChild(imagelink)
    })
    showmorebtn.style.display = "block"

}
searchform.addEventListener("submit", (e) => {
    console.log(e)
    e.preventDefault()
    page = 1
    searchimage()
})

showmorebtn.addEventListener("click", () => {
    page++
    searchimage()
})