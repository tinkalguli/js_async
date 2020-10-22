let imgContainer = document.querySelector(".img-div");
let suffleBtn = document.querySelector(".btn");

function fetchData () {
    let url = "https://api.unsplash.com/photos/random/?client_id=GmCAyMYvE8RDlhCODLT0XJQoM_90UmSkwvYBeZsvLfA";

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function() {
        let data = JSON.parse(xhr.response);
        imgContainer.innerHTML = "";
        let img = document.createElement("img");
        img.src = data.urls.small;
        img.classList.add("unsplash-img");
        img.alt = data.alt_description;

        imgContainer.append(img);
    };

    xhr.onerror = function() {
        console.log("error");
    };

    xhr.send();
}

fetchData();

suffleBtn.addEventListener("click", fetchData);