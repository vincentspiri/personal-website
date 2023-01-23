const ppbutton = document.querySelector("#ppbutton");
const h1 = document.querySelector("#hello");
const p = document.querySelectorAll(".pp");
const buttons = document.querySelectorAll("button");
const test = document.querySelector(".test");
test.src = "https://media.istockphoto.com/id/1368264124/photo/extreme-close-up-of-thrashing-emerald-ocean-waves.jpg?b=1&s=170667a&w=0&k=20&c=qha_PaU54cu9QCu1UTlORP4-sW0MqLGERkdFKmC06lI=";
console.log(test.attribute);
console.log(buttons);

console.log(p[1]);

ppbutton.onclick = () => {
    h1.innerText = "penis";
};