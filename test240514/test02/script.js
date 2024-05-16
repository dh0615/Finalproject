import people from "./name.js";

const filterPeople = (ageLimit) => {
  return people.filter((person) => person.age >= ageLimit);
};
console.log(people);

const twenty = document.querySelector("#twenty");
const thirty = document.querySelector("#thirty");
const fourty = document.querySelector("#fourty");

twenty.addEventListener("click", () => {
  const overAgePeople = filterPeople(20);
  displayPeople(overAgePeople);
});
thirty.addEventListener("click", () => {
  const overAgePeople = filterPeople(30);
  displayPeople(overAgePeople);
});
fourty.addEventListener("click", () => {
  const overAgePeople = filterPeople(40);
  displayPeople(overAgePeople);
});

const displayPeople = (people) => {
  const results = document.querySelector("#results");
  results.innerHTML = "";
  people.forEach((person) => {
    const personElement = document.createElement("div");
    personElement.textContent = `${person.name} : ${person.age}세`;
    personElement.style.color = "white";
    personElement.style.textAlign = "center";
    personElement.style.marginTop = "20px";
    results.appendChild(personElement);
  });
};
