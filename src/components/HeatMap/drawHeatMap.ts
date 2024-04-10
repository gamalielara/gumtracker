import { THabitsData } from '../../type/habits';

// Function to convert contribution data object to a 2D array
export const drawHeatmapScript = (data: THabitsData) => `
function convertDataToObject(dataObject) {
  const sortedDates = Object.keys(dataObject).sort(
    (a, b) => new Date(a) - new Date(b),
  );
  const startDate = new Date(sortedDates[0]);
  const endDate = new Date(sortedDates[sortedDates.length - 1]);

  const numDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
  const numRows = Math.ceil(numDays / 7);
  const numCols = 7;

  const contributionDataArray = Array.from({ length: numRows }, () =>
    Array(numCols).fill(0),
  );

  sortedDates.forEach((dateString, index) => {
    const date = new Date(dateString);
    const row = Math.floor((date - startDate) / (1000 * 60 * 60 * 24 * 7));
    const col = date.getDay();
    const value = dataObject[dateString];
    contributionDataArray[row][col] = value;
  });

  return contributionDataArray;
}

/**
* data = [
    [0, 1, 2, 3, 4, 5, 6,],
    [0, 1, 2, 3, 4, 5, 6,],
  ]
 */
function drawHeatMap(data) {
  let contributionData = convertDataToObject(data);

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const cellSize = 25; // Width and height of each cell in pixels

  const gridSize = {
    width: contributionData.length,
    height: contributionData[0].length,
  };

  canvas.width = (gridSize.width * cellSize) + (1.1 * gridSize.width);
  canvas.height = (gridSize.height * cellSize) + (1.1 * gridSize.height)

  // Define colors for the contribution levels
  const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];

  // Function to draw the contribution graph
  function drawContributionGraph() {
    for (let y = 0; y < gridSize.height; y++) {
      for (let x = 0; x < gridSize.width; x++) {
        const value = contributionData[x][y];
        const color = colors[value];
        ctx.fillStyle = color;
        ctx.fillRect(x * cellSize * 1.1, y * cellSize * 1.1, cellSize, cellSize);
      }
    }
  }

  // Clear canvas before drawing
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Draw the graph initially
  drawContributionGraph();

  document.body.appendChild(canvas);

  return document.body.innerHTML;
};


drawHeatMap(${JSON.stringify(data)});
`;
