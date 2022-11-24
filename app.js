// Link 20 by 20 grid with array index?



// Have an initial selected spot on grid

// Have goal block on grid

// Relate selected spot and array goal block with array index / number assign

// Selected spot move towards goal block on grid
let blockSelect = document.querySelectorAll('.block')


let block
let goal
let grid

function init() {
  grid = [
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
  ]
   block = Math.floor(Math.random()*24)
   goal = Math.floor(Math.random()*24)

   grid[block] = 1
   grid[goal] = 2
   render()
}


function render() {
for (let i=0; i<grid.length; i++) {
    if (grid[i] === 1) {
      blockSelect[i].textContent = 'B'
    }
    if (grid[i] === 2) {
      blockSelect[i].textContent = 'G'
    }
  }
}


init()
console.log(grid)