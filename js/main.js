function
tgwork
  ( lpge, foo )
{
  /* toggle view of left bar buttons via position and preset z-index; */
  console.log("hiding" + foo);
  var dv    =  lpge + "div";
  var dobj  =  document.getElementById( dv );
  dobj.style="position:absolute;"

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
  //tgwork(lpge, foo);

}
