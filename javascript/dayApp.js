
function highlightCurrentWeekday() {
  var weekdays = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  var currentWeekday = weekdays[new Date().getDay()];
  var elems = document.getElementsByClassName(currentWeekday);
  for (var i = 0; i <elems.length; i++) {
    var today = elems[i];
    today.classList.add('highlight');
  }
}
//
window.onload = highlightCurrentWeekday();
