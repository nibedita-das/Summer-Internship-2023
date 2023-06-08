const button1=document.getElementById("tab1");
const button2=document.getElementById("tab2");
const p=document.getElementById("para")

button1.addEventListener("click" ,()=>{
    const show=document.createElement("para");
    const image=document.createElement("img");
    image.src = "https://th.bing.com/th?id=OIP.ngrriLkPVYpJ0cFQQlB0YwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    show.innerHTML="<b><u> Biryani </u></b> <br> <br> A world-renowned Indian dish, biryani takes time and practice to make but is worth every bit of the effort. Long-grained rice (like basmati) flavored with fragrant spices such as saffron and layered with lamb, chicken, fish, or vegetables and a thick gravy. The dish is then covered, its lid secured with dough, and then the biryani is cooked over a low flame. This is definitely a special occasion dish.There is much debate of how this dish came to be, but most agree that its origins began in Persia as a rustic rice-and-meat dish and then traveled to India. The various recipes of biryani were then born, mainly where there was culinary influence from Muslim foods, particularly in the city of Hyderabad in south India, but also along the southern coast. Biryani's many, many variations depend on where the dish is based. Some differences are subtle while others are distinguished by added or substituted ingredients."; 
p.append(image,show);
})
button2.addEventListener("click" ,()=>{
    window.location.reload();
})