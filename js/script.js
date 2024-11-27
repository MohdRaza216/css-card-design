let cards = document.querySelectorAll(".inner");
let displayArea = document.createElement("div");
displayArea.className = "display-area";
document.body.appendChild(displayArea);

cards.forEach((card) => {
    card.addEventListener("click", () => {
        let title = card.querySelector(".heading").innerText;
        displayArea.innerText = `You clicked on: ${title}`;
    });
});
