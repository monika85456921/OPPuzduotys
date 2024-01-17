import { Animal, Cat, Fish, Bird } from "./Modules/animals.js";

const mainContainer = document.getElementById("container");
const catsBtn = document.getElementById("catsBtn");
const fishesBtn = document.getElementById("fishesBtn");
const birdsBtn = document.getElementById("birdsBtn");

let currentForm = null;
catsBtn.addEventListener("click", (e) => {
  displayForm("cat");
});

fishesBtn.addEventListener("click", (e) => {
  displayForm("fish");
});

birdsBtn.addEventListener("click", (e) => {
  displayForm("bird");
});

function displayForm(animal) {
  if (currentForm) {
    currentForm.innerHTML = createFormContent(animal);
  } else {
    const animalForm = document.createElement("div");
    animalForm.id = `${animal}Form`;
    animalForm.innerHTML = createFormContent(animal);
    mainContainer.appendChild(animalForm);
    currentForm = animalForm;
  }
}
function createFormContent(animal) {
  return `
  <form class="${animal}Form">
      <label for="${animal}Name">Name</label><br>
      <input type="text" id="${animal}Name" name="${animal}Name"><br>
      <label for="${animal}Age">Age</label><br>
      <input type="text" id="${animal}Age" name="${animal}Age"><br>
      <label for="${animal}Legs">Legs</label><br>
      <input type="number" id="${animal}Legs" name="${animal}Legs"><br>
      ${additionalFields(animal)}
      <br>
      <button type="button" id="submitBtn" onclick="submitForm('${animal}')">Submit</button>
  </form>`;
}

function additionalFields(animal) {
  if (animal === "cat") {
    return `
    <label for="${animal}Fur">Fur</label><br>
    <input type="text" id="${animal}Fur" name="${animal}Fur"><br>
    <label for="${animal}Tail">Tail</label><br>
    <input type="text" id="${animal}Tail" name="${animal}Tail"><br>
    <label for="${animal}Whiskers">Whiskers</label><br>
    <input type="text" id="${animal}Whiskers" name="${animal}Whiskers"><br>`;
  } else if (animal === "fish") {
    return `
    <label for="${animal}Fins">Fins</label><br>
    <input type="text" id="${animal}Fins" name="${animal}Fins"><br>
    <label for="${animal}Scales">Scales</label><br>
    <input type="text" id="${animal}Scales" name="${animal}Scales"><br>
    <label for="${animal}Whiskers">Whiskers</label><br>
    <input type="text" id="${animal}Whiskers" name="${animal}Whiskers"><br>`;
  } else if (animal === "bird") {
    return `
    <label for="${animal}Wings">Wings</label><br>
    <input type="text" id="${animal}Wings" name="${animal}Wings"><br>
    <label for="${animal}Feathers">Feathers</label><br>
    <input type="text" id="${animal}Feathers" name="${animal}Feathers"><br>
    <label for="${animal}Beak">Beak</label><br>
    <input type="text" id="${animal}Beak" name="${animal}Beak"><br>`;
  }
}

function submitForm(animal) {
  const name = document.getElementById(`${animal}Name`).value;
  const age = document.getElementById(`${animal}Age`).value;
  const legs = document.getElementById(`${animal}Legs`).value;
  let additionalProps = {};
  if (animal === "cat") {
    additionalProps = {
      fur: document.getElementById(`${animal}Fur`).value,
      tail: document.getElementById(`${animal}Tail`).value,
      whiskers: document.getElementById(`${animal}Whiskers`).value,
    };
  } else if (animal === "fish") {
    additionalProps = {
      fins: document.getElementById(`${animal}Fins`).value,
      scales: document.getElementById(`${animal}Scales`).value,
      whiskers: document.getElementById(`${animal}Whiskers`).value,
    };
  } else if (animal === "bird") {
    additionalProps = {
      wings: document.getElementById(`${animal}Wings`).value,
      feathers: document.getElementById(`${animal}Feathers`).value,
      beak: document.getElementById(`${animal}Beak`).value,
    };
  }
  const animalObj = createNewAnimal(animal, name, age, legs, additionalProps);

  displayAnimalInfo(animal, animalObj);
}

function createNewAnimal(animal, name, age, legs, additionalProps) {
  if (animal === "cat") {
    return new Cat(
      name,
      age,
      legs,
      additionalProps.fur,
      additionalProps.tail,
      additionalProps.whiskers
    );
  } else if (animal === "fish") {
    return new Fish(
      name,
      age,
      legs,
      additionalProps.fins,
      additionalProps.scales,
      additionalProps.whiskers
    );
  } else if (animal === "bird") {
    return new Bird(
      name,
      age,
      legs,
      additionalProps.wings,
      additionalProps.feathers,
      additionalProps.beak
    );
  } else {
    console.log("wrong information");
  }
}

function displayAnimalInfo(animal, animalObj) {
  const animalInfo = document.createElement("div");
  animalInfo.innerHTML = `<p>${animal}</p>`;
  displayAnimalInfoCard(animalObj, animalInfo);
  mainContainer.append(animalInfo);
}

function displayAnimalInfoCard(card, container) {
  for (const i in card) {
    if (card.hasOwnProperty(i)) {
      const value = card[i];

      const cardElement = document.createElement("p");
      cardElement.innerHTML = `<p>${i} : ${value}</p>`;
      container.appendChild(cardElement);
    }
  }
}
