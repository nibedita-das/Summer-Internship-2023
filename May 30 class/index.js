const button1 = document.getElementById("clickable1");
const button2 = document.getElementById("clickable2");
const textarea = document.getElementById("content");
const table = document.getElementById("table");

button1.addEventListener("click", () => {
    const div = document.getElementById("head")
    const Image = document.createElement("img")
    Image.src = "https://th.bing.com/th/id/OIP.PxdQ6sBiwAynr5r1rC6TzgHaHO?pid=ImgDet&rs=1"
    Image.style.width = "200px"
    Image.style.height = "200px"
    Image.style.marginLeft = "200px"
    Image.style.marginTop = "50px"
    div.append(Image);
    textarea.innerText = input.value;
});
   button2.addEventListener("click", () => {
    textarea.innerText = "";
   });