const app = (x) => {
    const container = document.querySelector(".container");
    const colorPickerButton = document.getElementById("color");
    colorPickerButton.addEventListener("change", function() {
        document.getElementById("chooseYourOwn").checked = true;
    })
    const newSizeButton = document.getElementById("newSizeButton");
    const newSizeRange = document.getElementById("newSizeRange");
    newSizeButton.value = 20;
    newSizeButton.textContent = `New grid (${newSizeRange.value}x${newSizeRange.value})`;
    newSizeRange.addEventListener("mousemove", function() {
        newSizeButton.textContent = `New grid (${newSizeRange.value}x${newSizeRange.value})`;
    });

    document.getElementById("reset").addEventListener("click", () => {
        let blocksToReset = container.getElementsByClassName("grid-item");
        for (let i = 0; i < blocksToReset.length; i++) {
            blocksToReset[i].style.setProperty("background-color", "white");
        }
    });

    const radioButtons = document.querySelector("#color-options");
    radioButtons.addEventListener("click", function() {
        color = radioButtons.color.value;
    })


    function generateRandomColor() {
        const color = []
        for (let i = 0; i < 3; i++) {
            color[i] = Math.floor(Math.random() * 256);
        }
        console.log("RANDOM COLOR: " + color);
        return color;
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
                switch (radioButtons.color.value) {
                    case ("random"):
                        const randomColor = generateRandomColor();
                        color = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
                        break;
                    case ("choose"):
                        color = colorPickerButton.value;
                        break;
                    default:
                        color = radioButtons.color.value;
                        break;
                }
                newDiv.style.setProperty("background-color", color);
            })
            container.appendChild(newDiv);
        }
    }

    newSizeButton.addEventListener("click", function(e) {
        makeRows(newSizeRange.value);
    });

    document.documentElement.style.setProperty("--background-colour", "blue");
    makeRows(newSizeRange.value);
    

}

app();