var buscador = $("#table").datatable();

$("#input-search").keyup(function(){
  
  buscador.search($(this).val()).draw();
  
  if($("#input-search").val() ==""){
    $(".content-search").fadeout();
    }else{
      $(".content-search").fadein();
    }
})