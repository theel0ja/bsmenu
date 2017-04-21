/* Original code: https://stackoverflow.com/questions/17717025/how-to-active-nav-bar-in-bootstrap-with-jquery#17737393 */
$(document).ready(function () {
  var url = window.location;
  $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
  $('ul.nav a').filter(function() {
    return this.href == url;
  }).parent().addClass('active');
});
