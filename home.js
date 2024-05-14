// 1

    function displayPopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    }

    function closePopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "none";
    }

    document.getElementById("createAccount").addEventListener("click", displayPopup);


    // 2
    function displayPopup1() {
        var popup = document.getElementById("popup1");
        popup.style.display = "block";
    }

    function closePopup1() {
        var popup = document.getElementById("popup1");
        popup.style.display = "none";
    }

    document.getElementById("content").addEventListener("click", displayPopup1);


    // 3

    function displayPopup2() {
        var popup = document.getElementById("popup2");
        popup.style.display = "block";
    }

    function closePopup2() {
        var popup = document.getElementById("popup2");
        popup.style.display = "none";
    }

    document.getElementById("onlineexam").addEventListener("click", displayPopup2);

    // 4
    
    function displayPopup3() {
        var popup = document.getElementById("popup3");
        popup.style.display = "block";
    }

    function closePopup3() {
        var popup = document.getElementById("popup3");
        popup.style.display = "none";
    }

    document.getElementById("viewResults").addEventListener("click", displayPopup3);


