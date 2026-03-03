const form = document.getElementById("recipe-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("rname").value.trim();
  const country = document.getElementById("rcountry").value.trim();
  const ingredientsInput = document.getElementById("ringredients").value.trim();
  const stepsInput = document.getElementById("rsteps").value.trim();
  const tips = document.getElementById("rtips").value.trim();

  if (!name || !country || !ingredientsInput || !stepsInput) {
    alert("Please fill in all required fields.");
    return;
  }

  const ingredients = ingredientsInput.split(",").map(i => i.trim()).filter(i => i.length > 0);
  const steps = stepsInput.split(",").map(s => s.trim()).filter(s => s.length > 0);

  const newRecipe = { name, country, ingredients, steps, tips: tips || null };

  // Retrieve stored recipes or initialize
  const storedRecipes = JSON.parse(localStorage.getItem("userRecipes") || "[]");

  // Add new recipe and save back
  storedRecipes.push(newRecipe);
  localStorage.setItem("userRecipes", JSON.stringify(storedRecipes));

  alert("Recipe submitted successfully!");
  form.reset();
});
