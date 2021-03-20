$(document).ready(function() {

    $('.textslug').on("input", function() {
        let VAL = $(this).val();
        VAL = VAL.replace(/ /g, "");
        $(this).val(VAL);
    });

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {

        let $target = $(e.target);
        if ($target.parent().hasClass('disabled')) {
            return false;
        } else {
            $('.nav-tabs > li').removeClass('active');
            $target.parent().addClass('active');
            $target.parent().removeClass('disabled');
        }

        let step = $(this).attr("aria-controls");
        if (step == 'complete') {
            validateDataForm();
        }

    });

    $('#name').maxlength();

    $("#name").on('input', function() {
        verifText(this);
    });

    $("#name").keyup(function(event) {
        if (event.keyCode == 13) {
            if ($("#continue-btn-title").is(':visible')) {
                $("#continue-btn-title").trigger("click");
            }
        }
        event.preventDefault();
    });

    $(".continue-btn").click(function(e) {
        let $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        $active.next().addClass('active');
        $active.removeClass('active');
        /* $active.addClass('disabled'); */
        nextTab($active);
    });

    $("#frm-create").on('submit', function(evt) {
        /*  evt.preventDefault(); */
    });
});

const verifText = (elem) => {
    let cont = $(elem).val().length;
    if (cont > 5) {
        $("#continue-btn-title").fadeIn();
    } else {
        $("#continue-btn-title").fadeOut();
    }
}

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();

}

const textCharacter = function(ch) {
    ch = ch.replace(/[*~^=&%$#{}+<>°|¨¬()"!¡'¿ñ´@/.:,;ª©₡€½?áéíóú]/gi, "");
    return ch;
}

const validateDataForm = () => {
    let name = $("#name").val();
    let color = $("#color").val();
    let logo = $("#logo").val();
    let db_name = $("#db_name").val();
    let db_user = $("#db_user").val();
    let db_password = $("#db_password").val();

    $("#s_name").html(name);
    $("#s_color").html(color);
    $("#s_logo").html(logo);
    $("#s_dbname").html(db_name);
    $("#s_dbuser").html(db_user);
    $("#s_dbpass").html(db_password);

}