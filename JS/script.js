function form_going_middle_to_left()
{
  $(document).ready(function()
  {
    $("#edu").click(function()
    {
        $("#education").animate({left: '600px'}, "slow");
        $("#education").animate({left: '523px'}, "slow");
        $("#goright").animate({right: '350px'}, "slow");
        document.getElementById("education").style.display = "block";
    });
  });
}
form_going_middle_to_left();


function closeForm()
{
  document.getElementById("education").style.display = "none";
}