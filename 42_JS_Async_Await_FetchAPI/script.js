// async function getData() {
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text()
    return data
}

async function main(){
    console.log("Loading Modules")
    console.log('Do Something Else');
    console.log("Load data")
    let data = getData()
    console.log(data)
    console.log("Process data");
    console.log('Task 2');
}


// data.then((v)=>{
//     console.log(data)
//     console.log("Process data");
//     console.log('Task 2');
// })



main()
