window.onload = function() {
    var button = document.getElementById("one");
    
    button.addEventListener("click", function(event){
      console.log("you have clicked button one");
    });

        const info = document.createElement("div")
        info.id = "information"
        document.body.appendChild(info);

    var button = document.getElementById("two");
    
    button.addEventListener("click", function(event){
        var newElement = document.createElement("p");
        newElement.textContent = `A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).`;
        document.body.appendChild(newElement);
    });

    var button = document.getElementById("three");
    
    button.addEventListener("click", function(event){
        const info document.querySelector("#information").removeChild(newParagraph);
      
    });
}