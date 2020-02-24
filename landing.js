let images = ["brownies", "cupcakes", "cookies"];
document.getElementById(images[0]).classList.add("active");
let count = 0;

setInterval(carousel, 5000)

function carousel() {
    document.getElementById(images[count]).classList.remove("active");
    count++;
    if (count >= images.length){
        count = 0;
    }
    document.getElementById(images[count]).classList.add("active");
}