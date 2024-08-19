



let myfunc = (bookss) =>{

    let names = process.argv[2];
    let bookName = bookss[names-1].name
    let days = process.argv[3];

    console.log(`Books allotted, name ${bookName}, duration ${days}days`)
}

let books = [{
    name: 'Harrypotter',
    id: 1
},{
    name: 'fairytales',
    id: 2
},{
    name: 'atomichabits',
    id: 3
}]

myfunc(books)

