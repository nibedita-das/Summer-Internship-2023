const data = [
    {
        image:"https://th.bing.com/th?id=ODL.19401a4efe7e72ebec6035662c1d1093&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.3&pid=13.1",
        title:"Tu Jhoothi mein Makkar",
        rating:5,
    },
    {
        image:"https://th.bing.com/th?id=ODL.19401a4efe7e72ebec6035662c1d1093&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.3&pid=13.1",
        title:"Tu Jhoothi mein Makkar",
        rating:6.1,
    },
    {
        image:"https://th.bing.com/th?id=ODL.19401a4efe7e72ebec6035662c1d1093&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.3&pid=13.1",
        title:"Tu Jhoothi mein Makkar",
        rating:5,
    },
    {
        image:"https://th.bing.com/th?id=ODL.19401a4efe7e72ebec6035662c1d1093&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.3&pid=13.1",
        title:"Tu Jhoothi mein Makkar",
        rating:5,
    },
    {
        image:"https://th.bing.com/th?id=ODL.19401a4efe7e72ebec6035662c1d1093&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.3&pid=13.1",
        title:"Tu Jhoothi mein Makkar",
        rating:5,
    },
    {
        image:"https://th.bing.com/th?id=ODL.19401a4efe7e72ebec6035662c1d1093&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.3&pid=13.1",
        title:"Tu Jhoothi mein Makkar",
        rating:5,
    },
]

const movieBox = document.getElementById("movie_show");

data.forEach((el) => {
    const div = document.createElement("div");
    div.className = "sty1";
    const image = document.createElement("img");
    image.src = el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    movieTitle.className = "sty";
    const rating = document.createElement("p");
    rating.innerText = el.rating;
    rating.className = "sty";
    const button = document.createElement("button");
    button.innerText = "Click Movie";
    button.addEventListener("click", () => {
        alert(`You clicked on ${el.title}`);
    });
    button.className = "sty2";
    div.append(image,movieTitle,rating,button);
    movieBox.append(div);
});