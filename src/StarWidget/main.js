const stars = document.querySelectorAll('#starIcon');
let selected = 0
stars.forEach((star, index) => {
    star.dataset.rating = index+1;
    star.addEventListener('mouseover', handleFocus);
    star.addEventListener('mouseleave', handleBlur);
    star.addEventListener('click', handleClick);
})


function handleClick(star) {
    const rating = star.target.dataset.rating;
    if(selected === rating) {
        selected = 0;
        return;
    }
    selected = rating;
    stars.forEach((star, index) => {
        if(index<rating) {
            star.innerHTML = `&#9733;`
        } else {
            star.innerHTML = `&#9734;`
        }
    })
}

function handleFocus(star) {
    const rating = star.target.dataset.rating;

    stars.forEach((star, index) => {
        if(index<rating) {
            star.innerHTML = `&#9733;`
        } else {
            star.innerHTML = `&#9734;`
        }
    })
}

function handleBlur(star) {
    const rating = star.target.dataset.rating;

    stars.forEach((star, index) => {
        if(index<selected) {
            star.innerHTML = `&#9733;`
        } else {
            star.innerHTML = `&#9734;`
        }
    })
}