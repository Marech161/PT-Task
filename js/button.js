var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if(count % 2 === 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://www.meme-arsenal.com/memes/9d9cefdb657a4845482ff5d32c5df93a.jpg"
        document.getElementById("demo").appendChild(img);
    }
}