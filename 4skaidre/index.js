import { Animal, Cat, Fish, Bird } from "./Modules/animals.js";

const mainContainer = document.getElementById("container");
const catsBtn = document.getElementById("catsBtn");
const fishesBtn = document.getElementById("fishesBtn");
const birdsBtn = document.getElementById("birdsBtn");

catsBtn.addEventListener("click", (e) => {
  const catForm = document.createElement("div");
  catForm.id = "catform";
  mainContainer.append(catForm);
  catForm.innerHTML = `
  <form class="catForm">
  <label for="name"></label><br>
  <label for="catName">Name</label><br>
  <input type="text" id="catName" name="catName"><br>
  <label for="catAge">Age</label><br>
  <input type="text" id="catAge" name="catAge"><br>
  <label for="catLegs">legs</label><br>
  <input type="number" id="catLegs" name="catLegs"><br>
  <label for="catFur">Fur</label><br>
  <input type="text" id="catFur" name="catFur"><br>
  <label for="catTail">Tail</label><br>
  <input type="text" id="catTail" name="catTail"><br>
  <label for="catWhiskers">Whiskers</label><br>
  <input type="text" id="catWhiskers" name="catWhiskers"><br><br>
  <button type="submit">Submit</button>
  </form>`;
});
const a = new Cat("dg", 5, "hdfh", "fhfg", "dfhf");
console.log(a);
