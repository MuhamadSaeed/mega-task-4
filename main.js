let links = document.querySelectorAll("nav ul li");

links.forEach((link) => {
   link.addEventListener("click", () => {
            links.forEach(item => item.classList.remove("active")
        );
        link.classList.add("active");
   })    
})


let Mode = document.getElementById("Mode")
Mode.onclick = () => {
    document.body.classList.toggle("mode-dark")
}
