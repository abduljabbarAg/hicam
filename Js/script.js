
{
   
}
$('.main').click(function () {
    $(this).children('.hide').slideToggle(1000);
    $(this).children('.show').toggle(2000);
  });

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

//############################################################### Progress Bar
(function($){  
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
}(jQuery));
