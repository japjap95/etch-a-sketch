const app = (x) => {
    const size = 16;
    const container = document.querySelector(".container");
    const colorController  = document.querySelector(".permahover");
    const resetButton = document.getElementById("reset").addEventListener("click", () => {
        let blocksToReset = container.getElementsByClassName("grid-item");
        for (let i = 0; i < blocksToReset.length; i++) {
            blocksToReset[i].classList.remove("permahover");
        }
    })

    const colourButton = document.getElementById("color");
    colourButton.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
            changeColor(colourButton.value);
        }
    })

    function changeColor(color) {
        document.documentElement.style.setProperty("--background-colour", color);
    }

    function switchState(object) {
        object.classList.add("permahover");
    }

    function makeRows(size) {
        container.textContent = "";
        container.style.setProperty("--grid-rows", size);
        container.style.setProperty("--grid-cols", size);
        for (let i = 0; i < (size * size); i++){
            let newDiv = document.createElement("div");
            newDiv.setAttribute("id", `grid_item_${i}`)
            newDiv.classList.add("grid-item");
            newDiv.addEventListener("mouseover", () => {
                switchState(newDiv);
            })
            container.appendChild(newDiv);
        }
    }

    const newSizeButton = document.getElementById("newSizeButton");
    newSizeButton.addEventListener("keydown", function(e) {
        if (e.keyCode ===  13) {
            if (newSizeButton.value <= 100) {
                makeRows(newSizeButton.value);
            } else {
                alert("Please enter a number between 1-100. Anything over that and the boxes will be too small!");
            }
            
        }
    }) 

    document.documentElement.style.setProperty("--background-colour", "blue");
    makeRows(size);
    

}

app();