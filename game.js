const field = document.getElementById("field");
const moneyDisplay = document.getElementById("money");

let selectedTool = null;
let selectedSeed = null;
let money = 0;
let activeTool = null;

const cropPrices = {
  potato: 10,
  carrot: 20,
  lettuce: 30,
  cauliflower: 40,
};

// képek
const images = {
  soil: "assets/images/soil.png",
  dug: "assets/images/dirt_dug.png",
  potato_stage1: "assets/images/advanced_sprout.png",
  potato_ready: "assets/images/potato.png",
};

class Tile {
  constructor(container, baseImg, overlayImg) {
    this.container = container;
    this.baseImg = baseImg;
    this.overlayImg = overlayImg;
    this.dug = false;
    this.planted = null;
    this.watered = false;
    this.grown = false;
  }

  setImage(src, isOverlay = false) {
    if (isOverlay) {
      this.overlayImg.src = src;
    } else {
      this.baseImg.src = src;
    }
  }

  hoe() {
    if (!this.dug) {
      this.dug = true;
      this.setImage(images.dug, true);
      this.container.classList.add("dug");
    }
  }

  plant(seed) {
    if (this.dug && !this.planted) {
      this.planted = seed;
      this.setImage(images.potato_stage1);
    }
  }

  water() {
    if (this.planted && !this.watered) {
      this.watered = true;

      setTimeout(() => {
        this.grown = true;
        this.setImage(images.potato_ready);
      }, 2000);
    }
  }

  harvest() {
    if (this.grown) {
      money += cropPrices[this.planted];
      moneyDisplay.innerText = money;
      this.reset();
    }
  }

  reset() {
    this.dug = false;
    this.planted = null;
    this.watered = false;
    this.grown = false;
    this.setImage(images.soil);
    this.overlayImg.src = "";
    this.container.classList.remove("dug");
  }
}

const tiles = [];

// 🔥 Itt történik a 16 kép kiosztása
for (let i = 0; i < 16; i++) {
  const container = document.createElement("div");
  container.classList.add("tile");

  const baseImg = document.createElement("img");
  baseImg.src = images.soil;
  baseImg.classList.add("base");

  const overlayImg = document.createElement("img");
  overlayImg.classList.add("overlay");

  container.appendChild(baseImg);
  container.appendChild(overlayImg);

  field.appendChild(container);

  const tile = new Tile(container, baseImg, overlayImg);
  tiles.push(tile);

  container.addEventListener("click", () => {
    if (selectedTool === "hoe") tile.hoe();
    if (selectedSeed) tile.plant(selectedSeed);
    if (selectedTool === "water") tile.water();
    if (selectedTool === "harvest") tile.harvest();
  });
}

// eszköz választás
document.querySelectorAll("[data-tool]").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Ha ugyanarra kattintunk, kiválasztás feloldása
    if (activeTool === btn) {
      selectedTool = null;
      activeTool = null;
      btn.classList.remove("active");
    } else {
      // Ha más eszközre kattintunk
      if (activeTool) {
        activeTool.classList.remove("active");
      }
      selectedTool = btn.dataset.tool;
      selectedSeed = null;
      activeTool = btn;
      btn.classList.add("active");
    }
  });
});

// mag választás
document.querySelectorAll("[data-seed]").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (activeTool) {
      activeTool.classList.remove("active");
      activeTool = null;
    }
    selectedSeed = btn.dataset.seed;
    selectedTool = null;
  });
});
