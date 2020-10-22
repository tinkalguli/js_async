let form = document.querySelector(".form");
let input = document.querySelector("#search");
let cardContainer = document.querySelector(".card-container");

function fetchUser(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let url = `https://api.github.com/users/${input.value}`;
    xhr.open("GET", url);

    xhr.onload = function () {
        let data = JSON.parse(xhr.response);
        if (data.message == "Not Found") {
            alert("User is not available");
        } else {
            cardContainer.innerText = "";

            let card = document.createElement("div");
            card.id = "card";

            let imgDiv = document.createElement("div");
            let img = document.createElement("img");
            img.src = data.avatar_url;
            img.classList.add("avatar");
            imgDiv.append(img);
            
            let infoDiv = document.createElement("div");
            infoDiv.classList.add("info-div");
            let h3 = document.createElement("h3");
            h3.innerText = data.name;
            infoDiv.append(h3);
            let infoArray = ["id", "bio", "email", "followers", "following"];
            infoArray.forEach((element) => {
                let h5 = document.createElement("h5");
                h5.innerText = `${element} : ${data[element]}`;
                infoDiv.append(h5);
            });

            card.append(imgDiv, infoDiv);
            cardContainer.append(card);
        }
    };

    xhr.onerror = function () {
        console.log("Error");
    };

    xhr.send();
}

form.addEventListener("submit", fetchUser);