$(".modal_btn").click(function (e) {
    var item = $(".modal_box");
    var el = $(this).data('modal_classe')
    for (var i = 0; i < item.length; i++) {
        if (item[i].classList.contains(el)) {
            item[i].style.display = "block";
        }
        else {
            item[i].style.display = "none";
        }
    }
    bodyModalAtivo();
    $(".modal_close").click(function (e) {
        $(".modal_box").hide()
        bodyModalInativo()
    });

    function bodyModalAtivo() {
        $("body").addClass('bodymodal');

    }
    function bodyModalInativo() {
        $("body").removeClass('bodymodal')
    }
});