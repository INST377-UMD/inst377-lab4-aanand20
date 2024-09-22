function alertFunction() {
    var name = document.getElementById("name").value;
    if (name) {
        alert("Hello " + name);
    }
}

function backgroundColor() {
    if (document.body.style.backgroundColor === "red") {
        document.body.style.backgroundColor = "gold";
    } else {
        document.body.style.backgroundColor = "red";
    }
}

function textTester() {
    var textTest = document.getElementById("textInput").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(textTest)) {
      alert("How about...nah");
    } else {
      alert("How about...yeah");
    }
}

function addText() {
    var pageTitle = document.getElementById("pageTitle");
    if (!pageTitle.innerText.includes("Add Text")) {
        pageTitle.innerText += " - Add Text";
    }
}