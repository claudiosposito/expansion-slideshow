function moveLabel() {
  var div = document.getElementById("dmLabel");
  var tableau = document.getElementById("container");
  if(document.getElementById('dark-mode').checked == false){
      div.innerHTML = 'Light';
       div.style.left = div.offsetLeft + 25 + "px";
       tableau.innerHTML = "<div class='tableauPlaceholder'><tableau-viz id='tableau-viz' src='https://dub01.online.tableau.com/t/sumupglobal/views/AUSScreenDashboardL/Dashboard' width='1000' height='1000' hide-tabs toolbar='bottom' ></tableau-viz></div>"


     }
  else {
    div.innerHTML = 'Dark';
    div.style.left = div.offsetLeft - 25 + "px";
    tableau.innerHTML = "><div class='tableauPlaceholder'><tableau-viz id='tableau-viz' src='https://dub01.online.tableau.com/t/sumupglobal/views/AUSScreenDashboard/Dashboard' width='1000' height='1000' hide-tabs toolbar='bottom' ></tableau-viz></div>"
  }
}
