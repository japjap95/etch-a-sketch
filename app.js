const app = () => {
    const initialSize = 16;
    const container = document.querySelector(".container");
    container.setAttribute("grid-template-columns", initialSize);
    container.setAttribute("grid-row-columns", initialSize);

    function makeRows(rows, cols) {
        container.style.setProperty("--grid-rows", rows);
        container.style.setProperty("--grid-cols", cols);
        for (let i = 0; i < (rows * cols); i++){
            let newDiv = document.createElement("div");
            newDiv.textContent = (i + 1);
            newDiv.classList.add("grid-item");
            container.appendChild(newDiv);
        
        }
    }

    makeRows(initialSize, initialSize);

}

app();