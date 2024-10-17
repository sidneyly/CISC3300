//NYC Temperature Function
function getTemperature() {
    const apiUrl ="https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true&temperature_unit=fahrenheit";
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current_weather.temperature;
            document.getElementById('temperature').textContent = `${temperature} °F`;
        })

        .catch(error => {
            document.getElementById('temperature').textContent = 'Error getting temperature';
            document.getElementById('temperature').classList.add('error');
        });
}
window.onload = getTemperature;


//Recipes
$(document).ready(function () {
  const apiUrl = "http://localhost:3000/recipes";

  //display recipe list
  function getRecipes() {
    $('#recipe-list').empty();

    $.get(apiUrl, function (recipes) {      
      recipes.forEach(function (recipe) {
        $('#recipe-list').append(`
          <div class="recipe-item">
          <h3> ${recipe.title} </h3>
          <p> ${recipe.description} </p>
          </div> `);
      });
    });
  }

  getRecipes();

  //recipe form
  $('#recipe-form').submit(function (e) {
    e.preventDefault();

    const newRecipe = {
      title: $('#title').val(),
      description: $('#description').val()
    };

    $.ajax({
      url: apiUrl,
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(newRecipe),
      success: function() {
        $('#title').val('');
        $('#description').val('');

        getRecipes();
      },

      error: function() {
        alert("Error adding recipe");
      }
    });
  });
});
