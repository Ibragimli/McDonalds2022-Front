
$(function () {
    var checkValid = true;
    var iconCheck = $("#formButton").click(function (e) {
      if (checkValid) {
        e.preventDefault();  
        $(".formRow").removeClass("d-none");
        $(".formRowDown").removeClass("d-none");
  
        $(".formValidation").addClass("d-none");
        $(".formRow").addClass("d-flex");
        $(".formRowDown").addClass("d-flex");
  
        $("#formButtonClass").removeClass("col-lg-12");
        $("#formButtonClass").addClass("col-lg-6");
        // $("#formButton").unbind('click').click(); 
      } else {
        $("#formSpanValidation").text("Nəticə tapılmadı!");
      }
    });
  });
