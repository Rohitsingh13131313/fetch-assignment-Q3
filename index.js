let select = document.querySelector("select")
let box = document.querySelector("#container")



select.addEventListener("change",function(){
    fetchdata(select.value)

})

async function fetchdata (order){

    let link = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"

    
    if(order){
        link += "?sort=population&order="+order;
    }
    
    try{
        let res =  await fetch(link)
        let data = await res.json()
        console.log(data.data)
        showdata(data.data)
    }
    catch(error){
       console.log(error)
    }

    console.log(order)
    


}
fetchdata()



function showdata (arr){
    box.innerHTML = ""
    arr.forEach(function(ele){
        let div = document.createElement("div")

        let h4 = document.createElement("h4");
        h4.textContent = ele.country;

        let p = document.createElement("p");
        p.textContent = ele.id;

        let rank  = document.createElement("p")
        rank.textContent = ele.Rank

        let population = document.createElement("p")
        population.textContent = ele.population

        div.append(h4,rank,population)
        box.append(div)




    })
}