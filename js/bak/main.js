function
tgwork
  ( zi )
{
  /* toggle view of work buttons via z-index */
  console.log("hiding");

  document.getElementById("chrm").style.zIndex = "'" + zi + "'";
  document.getElementById("aepg").style.zIndex = "'" + zi + "'";
  document.getElementById("peng").style.zIndex = "'" + zi + "'";
  document.getElementById("wind").style.zIndex = "'" + zi + "'";

}


function
footfoo
   ( foo )
{
  /* footer bar button activation */


  /* last selection value */
  var lobj  =  document.getElementById('lstpge');
  var lpge  =  lobj.value;

  /* current selection */
  var fobj  =  document.getElementById( foo );
  var fbgr  =  fobj.style.backgroundColor;
  var fbcl  =  fobj.style.borderColor;
  var fclr  =  fobj.style.color;

  /* last selection object */
  var tobj  =  document.getElementById( lpge );

  /* set last to clicked */
  tobj.style.borderStyle      =  "solid";
  tobj.style.backgroundColor  =  fbgr;
  tobj.style.borderColor      =  fbcl;
  tobj.style.color            =  fclr;

  /* set clicked to white */
  fobj.style.borderStyle      =  "dotted";
  fobj.style.backgroundColor  =  "#fff";
  fobj.style.borderColor      =  "#ccc";
  fobj.style.color            =  "#444";

  lobj.value = foo;
  console.log("clicked bg " + fbgr);
  tgwork(-2);



}
