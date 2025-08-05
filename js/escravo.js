const input = document.querySelector('.input');
const ul = document.getElementById("ul");
const li = ul.getElementsByTagName("li");

input.addEventListener("keyup", (Event) => {

const filter = input.ariaValueMax.toLowerCase();

for(let i = 0; i < li.length; i++)
{
    let text = li[i].textContent.toLowerCase();
    li[i].style.display = text.includes(filter) ? "" : "none";
}

});