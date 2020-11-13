const app = (x) => {
    const container = document.querySelector(".container");
    const newSizeButton = document.getElementById("newSizeButton");
    const newSizeRange = document.getElementById("newSizeRange");
    newSizeButton.value = 20;
    newSizeButton.textContent = `New grid (${newSizeRange.value}x${newSizeRange.value})`
    newSizeRange.addEventListener("mousemove", function() {
        newSizeButton.textContent = `New grid (${newSizeRange.value}x${newSizeRange.value})`;
    });

    let color = "gray";
    const resetButton = document.getElementById("reset").addEventListener("click", () => {
        let blocksToReset = container.getElementsByClassName("grid-item");
        for (let i = 0; i < blocksToReset.length; i++) {
            blocksToReset[i].style.setProperty("background-color", "white");
        }
    })

    const colourButton = document.getElementById("color");
    colourButton.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
            color = colourButton.value;
        }
    })

    function generateRandomColor() {
        const colors = []
        for (let i = 0; i < 3; i++) {
            colors[i] = Math.floor(Math.random() * 256);
        }
        return colors;
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
                newDiv.style.setProperty("background-color", color);
            })
            container.appendChild(newDiv);
        }
    }

    newSizeButton.addEventListener("click", function(e) {
        makeRows(newSizeRange.value);
    }) 

    document.documentElement.style.setProperty("--background-colour", "blue");
    makeRows(newSizeRange.value);
    

}

app();