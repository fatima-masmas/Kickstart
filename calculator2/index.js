var buttons = document.querySelectorAll("input[type=button]");
    var display = document.getElementById("display");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            if (this.value === "c") {
                display.value = "";
            } else if (this.value === "=") {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = "Error";
                }
            } else {
                display.value += this.value;
            }
        });
    });