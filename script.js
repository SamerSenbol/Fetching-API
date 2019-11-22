function createNode(element){
    return document.createElement(element);
}

function append(parent,el){
    return parent.appendChild(el);
}

const ul = document.getElementById("samer")

const url = 'https://randomuser.me/api/?results=10';

fetch(url).then((resp) => {
    return resp.json()
}).then((data) => {
    let authors = data.results;

    authors.forEach((author) => {
        let li = createNode("li");
        let img = createNode("img");
        let span = createNode ("span");
        img.src=author.picture.medium;
        
        li.innerHTML = author.name.first;
        span.innerHTML=`${author.name.first} ${author.name.last}`;
        append(li,img);
        append(li,span);
        append(ul,li); 
    });
})

.catch(function(error){
    console.log(error);
})
