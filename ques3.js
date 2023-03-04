let url = "https://kontests.net/api/v1/all"
/*
// let response = fetch(url)
// response.then((v) => {
//     return v.json();
// }).then((contests) => {
//     console.log(contests)
//     var ihtml = ""
//     var arr = ["https://lumen5.com/learn/wp-content/uploads/2019/07/The-6-Best-Contest-Software.jpg", "https://i.pinimg.com/originals/58/8b/2a/588b2a7cc8feda90fbeba669fdcc242e.jpg", "https://i.pinimg.com/736x/ab/ae/64/abae64e5e226ef5f503ce38d140e3ee4.jpg"]
//     for (item in contests) {
//         let i = Math.random() * 3;
//         let n = Math.floor(i)
//         console.log(contests[item])
//         ihtml += `
//         <div class="card mx-2 my-2" style="width: 20rem;border:0px;box-shadow:0px 0px 15px #878787;border-radius:16px">
//         <img style="border-radius:16px" src= ${arr[n]} class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${contests[item].name}</h5>
//                     <p class="card-text"></p>
//                     <p class="card-text">Starts at: ${contests[item].start_time}</p>
//                     <a href=${contests[item].url} class="btn btn-primary">Visit Here</a>
//                 </div>
//             </div>
//         </div>
//         `
//     }
//     cardcontainer.innerHTML = ihtml;
// })
*/

const addFunc = async () => {
    const response = await fetch(url)
    const contests = await response.json()
    console.log(contests)
    var ihtml = ""
    var arr = ["https://lumen5.com/learn/wp-content/uploads/2019/07/The-6-Best-Contest-Software.jpg", "https://i.pinimg.com/originals/58/8b/2a/588b2a7cc8feda90fbeba669fdcc242e.jpg", "https://i.pinimg.com/736x/ab/ae/64/abae64e5e226ef5f503ce38d140e3ee4.jpg"]
    for (item in contests) {
        let i = Math.random() * 3;
        let n = Math.floor(i)
        // console.log(contests[item])
        ihtml += `
        <div class="card mx-2 my-2" style="width: 20rem;border:0px;box-shadow:0px 0px 15px #878787;border-radius:16px">
        <img style="border-radius:16px" src= ${arr[n]} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].name}</h5>
                    <p class="card-text"></p>
                    <p class="card-text">Starts at: ${contests[item].start_time}</p>
                    <p class="card-text">Site: ${contests[item].site}</p>
                    <p class="card-text">Status: ${contests[item].status}</p>
                    <a href=${contests[item].url} class="btn btn-primary">Visit Here</a>
                </div>
            </div>
        </div>
        `
    }
    cardcontainer.innerHTML = ihtml;

}
addFunc()


let noob = document.getElementById("noob")

// console.log(ihtml)