// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event){
  event.preventDefault();
  const height = inputHeight.value;
  const width = inputWidth.value;

  makeGrid(height, width);
});

//When sizes are submitted, this grid function is called
function makeGrid(height, width) {
  const tableCanvas = document.getElementById('pixelCanvas');
  tableCanvas.innerHTML = '';
  for (let i = 0; i < height; i++){
    const row = document.createElement('tr');
    for (let x = 0; x < width; x++){
      const column = document.createElement('td');
      column.setAttribute('id', 'col');
      row.appendChild(column);
    }
    tableCanvas.appendChild(row);
  }
}

//When the boxes are clicked, background changes to the color selected
const pixelCanvas = document.getElementById('pixelCanvas');
pixelCanvas.addEventListener('click', function(evt){
  const color = colorPicker.value;
  if (evt.target.nodeName==='TD'){
    evt.target.style.backgroundColor = color;
  }
})

