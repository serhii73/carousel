var elementsList = $('.carousel-list');
var pixelsOffset = 125;
var currentLeftValue = 0;
var elementsCount = elementsList.find('li').length;
var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
var maximumOffset = 0;
$('.carousel-arrow-right').rightUIEl();
$('.carousel-arrow-left').leftUIEl();

$('img').click(function (e) {
    e.preventDefault();
    $('#largeImage').attr('src',$(this).attr('src').replace());
});

