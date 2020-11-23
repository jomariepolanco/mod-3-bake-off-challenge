// your code here!
// console.log("🥧")
const bakeSideBar = document.querySelector("#bakes-container")
const mainView = document.querySelector("#detail")

bakeSideBar.addEventListener("click", event => {
    const id = event.target.dataset.id 
    getOneBake(id)
})

const renderMainView = bake => {
    const img = mainView.querySelector("img")
    const h1 = mainView.querySelector("h1")
    const p = mainView.querySelector(".description")
    const rateForm = mainView.querySelector("#score-form")
    img.src = bake.image_url
    img.alt = bake.name 
    h1.textContent = bake.name 
    p.textContent = bake.description
    rateForm.dataset.id = bake.id 
    rateForm.score.value = bake.score
}
const renderBakeSideBar = bake => {
    const li = document.createElement("li")
    li.textContent = bake.name
    li.dataset.id = bake.id 
    bakeSideBar.append(li)
}

const getOneBake = id => {
    return fetch(`http://localhost:3000/bakes/${id}`)
        .then(resp => resp.json())
        .then(oneBake => renderMainView(oneBake))
}

const getBakes = () => {
    fetch('http://localhost:3000/bakes')
        .then(resp => resp.json())
        .then(allBakes => allBakes.forEach(bake => renderBakeSideBar(bake)))
}
getBakes()
getOneBake(1)
