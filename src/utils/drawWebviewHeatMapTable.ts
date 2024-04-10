//@ts-nocheck

export const drawWebviewHeatMapTable = (data: unknown) => `
function formatDateToMMDDYY(date) {
    // Extracting month, day, and year components
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns zero-based index
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear().toString();
  
    // Formatting the date as MM-dd-YY
    const formattedDate = \`\$\{month\}-\$\{day\}-\$\{year\}\`;
  
    return formattedDate;
  }
  
  const generateThisYearArrayOfWeeks = () => {
    const now = new Date();
    const WEEK_IN_YEAR = 52;
  
    const thisYear = now.getFullYear();
  
    let temp = new Date(\`1-1-\$\{thisYear}\`);
  
    const arr = [];
  
    for (let i = 0; i < WEEK_IN_YEAR; i++) {
      if (temp.getFullYear() !== now.getFullYear()) break;
  
      const firstDateOfWeek = temp.getDate() - temp.getDay() + 1;
      const lastDateOfWeek = firstDateOfWeek + 6;
  
      let tempDate = new Date(temp.setDate(firstDateOfWeek));
  
      const localArr = [];
  
      for (let i = 1; i <= 7; i++) {
        localArr.push(formatDateToMMDDYY(tempDate));
  
        tempDate = new Date(tempDate.getTime() + 24 * 3600 * 1000);
  
        if (tempDate.getFullYear() !== now.getFullYear()) break;
      }
  
      temp = new Date(temp.setDate(lastDateOfWeek));
  
      arr.push(localArr);
    }
  
    return arr;
  };
  
  const processData = rawData => {
    const weeksThisYear = generateThisYearArrayOfWeeks();
  
    return weeksThisYear.map(weekArr => weekArr.map(date => rawData[date] ?? 0));
  };
  
  const drawTile = color => {
    const tile = document.createElement('td');
  
    tile.style.backgroundColor = color;
  
    return tile;
  };
  
  const drawTable = data => {
    const dataToProcess = processData(data);
  
    const COLORS = [
      '#cfe0e8',
      '#a3bfcc',
      '#91b9cc',
      '#7bb0c9',
      '#5ba4c7',
      '#246e91',
    ];
  
    const table = document.createElement('table');
  
    for (let i = 0; i < dataToProcess[0].length; i++) {
      const tr = document.createElement('tr');
  
      for (let j = 0; j < dataToProcess.length; j++) {
        const value = dataToProcess[j][i];
  
        if (value === undefined) continue;
  
        const tile = drawTile(COLORS[value]);
  
        tr.appendChild(tile);
      }
  
      table.appendChild(tr);
    }
  
    const style = document.createElement('style');
  
    const globalCSS = \`body{overflow: scroll; margin: 0;} table{border-spacing: 10px} td{min-width: 50px; height: 50px; border-radius: 20px; padding:0;}\`;
  
    style.type = 'text/css';
  
    if (style.styleSheet) {
      // This is required for IE8 and below.
      style.styleSheet.cssText = globalCSS;
    } else {
      style.textContent = globalCSS;
    }
  
    document.head.appendChild(style);
  
    document.body.appendChild(table);
  };

  drawTable(${JSON.stringify(data)});
`;
