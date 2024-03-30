 const popupLink = document.getElementById("popup-link");
 const popupWindow = document.getElementById("pop_up");
 const closeButton = document.getElementById("close-button");
  

  popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
  });



  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
  });