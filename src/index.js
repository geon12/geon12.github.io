const bookList = [
    {title: "The Code Breaker", author: "Walter Isaacson", url: "https://www.amazon.com/Code-Breaker-Jennifer-Doudna-Editing/dp/1982115858"},
    {title:"Beginners", author: "Tom Vanderbilt", url: "https://www.amazon.com/Beginners-Transformative-Power-Lifelong-Learning/dp/1524732168"},
    {title: "Dawn of the Belle Epoque", author: "Mary McAuliffe", url:"https://www.amazon.com/Dawn-Belle-Epoque-Bernhardt-Clemenceau/dp/1442209283/ref=sr_1_1?crid=1QMW267WGJ3WP&dchild=1&keywords=dawn+of+the+belle+epoque&qid=1616710230&s=books&sprefix=dawn+of+the+bell%2Cstripbooks%2C692&sr=1-1"}
];

const tvList = [
    {title: "The Falcon and the Winter Soldier", url: "https://www.youtube.com/watch?v=IWBsDaFWyTE"},
    {title: "Formula 1: Drive to Survive", url: "https://www.youtube.com/watch?v=GMrHKc58aIA"},
    {title: "WandaVIsion", url: "https://www.youtube.com/watch?v=sj9J2ecsSpo"}
];

const listenList = [
    {title: "History of the Twentieth Century Podcast", url: "https://historyofthetwentiethcentury.com/"},
    {title: "Revolutions Podcast", url: "https://thehistoryofrome.typepad.com/revolutions_podcast/"},
    {title: "Planet Money", url: "https://www.npr.org/sections/money/"}

];


function createInterestHTML(interest, id) {
    const element = document.getElementById(id);
    const h3 = element.getElementsByTagName("h3")[0];
    const ul = document.createElement('ul');

    for (let i = 0; i < interest.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.appendChild(a)
        a.href = interest[i].url
        if (id === "read"){
            a.innerText = `${interest[i].title} by ${interest[i].author}`
        } else {
            a.innerText = interest[i].title
        }
        ul.appendChild(li);
    }

    h3.appendChild(ul);

}


createInterestHTML(bookList,"read");
createInterestHTML(tvList,"watch");
createInterestHTML(listenList,"listen");

