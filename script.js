const gridContainer = document.getElementById("grid-container");
const resizeButton = document.getElementById("resize-button");

// Function to create the grid
function createGrid(size) {
    gridContainer.innerHTML = ""; // Clear existing grid
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);
  
      // Add hover effect to change color
      gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "#802323"; // Change to red
      });
    }
  }

// Event listener for resizing the grid
resizeButton.addEventListener("click", () => {
  let newSize = prompt("Enter the number of squares per side (max 100):");
  newSize = parseInt(newSize);

  if (newSize && newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
});

// Initialize the default 16x16 grid
createGrid(16);
