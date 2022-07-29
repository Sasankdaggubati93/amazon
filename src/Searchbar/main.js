
import { debouncing } from "../utils";
const userCardTemplate= document.querySelector("[data-user-template]");
const userCardContainer= document.querySelector("[data-user-card-container]");

let users= [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");

            header.textContent = user.name;
            body.textContent = user.email;
            userCardContainer.append(card)
            return { name: user.name, email: user.email, element: card}
        }) 
    })

const searchBar = document.getElementById('search');
searchBar.addEventListener('input', debouncing(handleChange, 300));

function handleChange(e) {
    let searchText = e.target.value.toLowerCase();
    users.forEach(user => {
        const visible = user.name.toLowerCase().includes(searchText) || user.email.toLowerCase().includes(searchText);
        user.element.classList.toggle("hide", !visible);
    })
}