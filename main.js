$(document).ready(function () {
    $("form").on("submit", function (event) {
        event.preventDefault()

        let emailInput = $("input[type=email]")
        
        if (emailInput[0].checkValidity()) {
            $("#modal").modal("hide")

            setTimeout(function () {
                $("#modal2").modal("show");
            }, 300)
        } else {
            emailInput[0].reportValidity();
        }
    })
})