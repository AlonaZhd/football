$(document).ready(function () {
    $(".header-burger").click(function (event) {
        $(".header-burger,.header__nav").toggleClass("active");
        $("body").toggleClass("lock");
    });
});
