$(document).ready(function() {
  $("#goButton").on("click", function() {
    const pokemonName = $("#name").val();
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`,
      success: function(data) {
        console.log(data);
        const pic = data.sprites.front_default;
        $("#pokeName").html(data.name);
        $("#pokeImage").attr("src", pic);
        $("#pokeInfo").html(data.weight+ " pokeWeight lbs.");
      },
      error: function(request, error) {
        alert("not a valid pokemon");
      }
    });
  });
});
