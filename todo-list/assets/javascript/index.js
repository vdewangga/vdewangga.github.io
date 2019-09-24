// marking todo jika sudah selesai dengan garis lurus
$("ul").on("click","li", function(){
    // $(this).css({
    //     "text-decoration": "line-through",
    //     "color": "grey"
    // });
    $(this).toggleClass("completed");
});

// delete saat span di klik menggunakan event bubbling
// $("span").on("click", function(){
//     $("li").on("click", function(){
//         $(this).remove();
//     });
// });

$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    // stopPropagation() digunakan agar mencegah event bubbling dimana setiap parent element yg 
    // memiliki event listener akan terpanggil ketika event di childnya ter trigger
    e.stopPropagation();
});

// Untuk menambahkan todo

$(".fa-plus").on("click", function(){
    $("input").fadeToggle(500);
})

$("input").on("keypress",  function(e){
    if(e.which === 13){
        $("ul").append("<li class=\"list\"><span><i class=\"fas fa-trash-alt\"></i></span> "+$(this).val()+"</li>");
        $(this).val("");
    }
})