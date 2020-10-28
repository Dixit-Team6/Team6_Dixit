function votepage1() {
    setInterval(function(){window.location.href = "./votepage1.html"},4000);
    
  }
  var myVar;
    
  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }