/* function validate() will validate form data */
function validate() {
    var sid = $("#sid").val();
    var pwd1 = $("#pwd1").val();
    var pwd2 = $("#pwd2").val();
    var uname = $("#uname").val();
    var genm = $("#genm").prop("checked");
    var genf = $("#genf").prop("checked");

    var errMsg = "";
    var result = true;
    var pattern = /^[a-zA-Z ]+$/;

    if (sid == "") {
        errMsg += "<li>User ID cannot be empty.</li>";
    }
    if (pwd1 == "") {
        errMsg += "<li>Password cannot be empty.</li>";
    }
    if (pwd2 == "") {
        errMsg += "<li>Retype password cannot be empty.</li>";
    }
    if (uname == "") {
        errMsg += "<li>User name cannot be empty.</li>";
    }
    if ((!genm) && (!genf)) {
        errMsg += "<li>A gender must be selected.</li>";
    }

    if (sid.indexOf('@') == 0) {
        errMsg += "<li>User ID cannot start with an @ symbol.</li>";
    }
    if (sid.indexOf('@') < 0) {
        errMsg += "<li>User ID must contain an @ symbol.</li>";
    }

    if (pwd1 != pwd2) {
        errMsg += "<li>Passwords do not match.</li>";
    }

    if (!uname.match(pattern)) {
        errMsg += "<li>User name contains symbols.</li>";
    }

    if (errMsg != "") {
        errMsg = "<div id='scrnOverlay'></div>"
            + "<section id='errWin' class='window'><ul>"
            + errMsg
            + "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";

        var numOfItems = ((errMsg.match(/<li>/g)).length) + 6;

        $("body").after(errMsg);
        $("#scrnOverlay").css("visibility", "visible");
        $("#errWin").css("height", numOfItems.toString() + "em");
        $("#errWin").css("margin-top", (numOfItems / -2).toString() + "em");
        $("#errWin").show();

        $("#errBtn").click(function () {
            $("#scrnOverlay").remove();
            $("#errWin").remove();
        });

        result = false;
    }

    return result;
}

/* collapse / expand function */
function toggle() {
    $(this).parent().next().slideToggle();

    if ($(this).html() == "[-]") {
        $(this).html("[+]");
    } else {
        $(this).html("[-]");
    }
}

/* link HTML elements to event functions */
function init() {
    $(".collapse").click(toggle);
    $("#regform").submit(validate);
}

$(document).ready(init);