let targetAnimal = {};

async function load() {
  let response = await fetch("/api/animals.php");
  let animals = await response.json();
  targetAnimal = animals.shift();

  let p = document.createElement("p");
  p.textContent = `The ${targetAnimal.animal} says ${targetAnimal.sound}`;
  document.querySelector("body").append(p);
}

load();

console.log(targetAnimal);
