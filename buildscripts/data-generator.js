const fs = require("fs/promises");
const path = require("path");

async function walk(directory) {
  let fileList = [];

  const files = await fs.readdir(directory);
  for (const file of files) {
    const p = path.join(directory, file);
    if ((await fs.stat(p)).isDirectory()) {
      fileList = [...fileList, ...(await walk(p))];
    } else {
      fileList.push(p);
    }
  }

  return fileList;
}

function getNonRelPath(p) {
  return p.replace(path.join(__dirname, '../public/images/'), '')
}

async function build(directory) {
  const data = {};
  const gamesList = await fs.readdir(directory);
  for (const game of gamesList) {
    const p = path.join(directory, game);
    const isDir = (await fs.stat(p)).isDirectory();
    const gameData = {};
    if (isDir) {
      // Game folder lets build the assets
      // gadget, map, operator
      const maps = await genMapData(p);
      gameData["MAPS"] = maps;
      const operators = await genOperatorData(p);
      gameData["OPERATORS"] = operators;
      const gadgets = await genGadgetData(p);
      gameData["GADGETS"] = gadgets;
    }
    data[game.toUpperCase()] = gameData
  }

  return data;
}

async function genMapData(directory) {
  const mapPath = path.join(directory, 'map');
  const mapsList = await fs.readdir(mapPath);
  const mapsData = {};
  for (const map of mapsList) {
    const p = path.join(mapPath, map);
    const isDir = (await fs.stat(p)).isDirectory();
    const mapData = {};
    if (isDir) {
      // Map folder lets build the assets
      // Each file is a floor
      const floorList = await fs.readdir(p);
      if (floorList.length > 0) {
        mapData["thumbnail"] = getNonRelPath(path.join(p, floorList[0]))
      }
      const floors = [];
      let i = 0;
      for (i = 0; i < floorList.length; i++) {
        const imgPath = path.join(p, floorList[i])
        floors.push({
          floorNum: i,
          img: getNonRelPath(imgPath)
        })
      }
      mapData["floors"] = floors
    }
    mapsData[map.toUpperCase()] = mapData;
  }
  return mapsData;
}

async function genOperatorData(directory) {
  const operatorPath = path.join(directory, 'operator');
  const operatorList = await fs.readdir(operatorPath);
  const operatorData = operatorList.map(operator => {
    const iconPath = path.join(operatorPath, operator);
    return {
      name: operator.split('.').slice(0, -1).join('.'),
      icon: getNonRelPath(iconPath)
    }
  });
  return operatorData;
}

async function genGadgetData(directory) {
  const gadgetPath = path.join(directory, 'gadget');
  const gadgetList = await fs.readdir(gadgetPath);
  const gadgetsData = gadgetList.map(gadget => {
    const iconPath = path.join(gadgetPath, gadget)
    return {
      name: gadget.split('.').slice(0, -1).join('.'),
      icon: getNonRelPath(iconPath)
    }
  });
  return gadgetsData;
}


build(path.join(__dirname, '../public/images/')).then(val => {
  fs.writeFile(path.join(__dirname, "../public/javascripts/data.json"), JSON.stringify(val, null, '  '), function(err) {
      if (err) throw err;
      console.log('complete');
    }
  );
});
