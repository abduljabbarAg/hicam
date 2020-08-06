
{
   
}
$('.main').click(function () {
    $(this).children('.hide').slideToggle(1000);
    $(this).children('.show').toggle(2000);
  });

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});
