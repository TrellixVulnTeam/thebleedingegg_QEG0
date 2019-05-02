function
tgwork
  ( lpge, foo )
{
  /* toggle view of left bar buttons via position and preset z-index; */

  console.log("hiding" + lpge);
  var dv     =  lpge + "div";
  var dobj   =  document.getElementById( dv );
  dobj.style = "position:absolute;"

  console.log("showing" + foo);
  var vd     =  foo + "div";
  var lobj   =  document.getElementById( vd );
  lobj.style = "position:;"

  return;
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
  tgwork(lpge, foo);

  return;
}



function
tglsplat
   ( svg, lvg )
{
  /* toggles selection splatter */

  console.log("setting stroke for " + svg );

  var stroke = svfz();
  var p1     = document.getElementById( svg );

  p1.setAttribute("d", stroke);

  if ( svg == lvg ) return;

  if ( lvg ) {

     console.log("clearing " + lvg );
     var l1 = document.getElementById( lvg );
     l1.removeAttribute("d");

  } else {
     return

  }
  return;
}


function
dial
   ( chn )
{
  /* rotates dial knob 1 */
  var deg = chn * 27;
  var nob = document.getElementById('dial1');
  var rgt = document.getElementById('furgt');

  console.log("rotation " + deg + " degrees");

    nob.style.webkitTransform = 'rotate('+deg+'deg)';
    nob.style.mozTransform    = 'rotate('+deg+'deg)';
    nob.style.msTransform     = 'rotate('+deg+'deg)';
    nob.style.oTransform      = 'rotate('+deg+'deg)';
    nob.style.transform       = 'rotate('+deg+'deg)';



//    rgt.style.webkitTransform = 'rotate('+deg+'deg)';
//    rgt.style.mozTransform    = 'rotate('+deg+'deg)';
//    rgt.style.msTransform     = 'rotate('+deg+'deg)';
//    rgt.style.oTransform      = 'rotate('+deg+'deg)';
//    rgt.style.transform       = 'rotate('+deg+'deg)';

//    -ms-transform: rotate(20deg);
//  -webkit-transform: rotate(20deg);
//  transform: rotate(20deg);

}


function
tune
   ( chn )
{
  /* highlight selected channel, unselect last */


  console.log("tuning");
  var ch   = "chnl" + chn;
  var svg  = "svg" + chn;

  var cobj = document.getElementById( ch );
  cobj.style.backgroundColor  =  "orange";
  cobj.style.borderColor      =  "brown";
  cobj.style.color            =  "yellow";

  var lst  = document.getElementById('lstchn');
  var lsv  = lst.value;
  var lvg;
  if ( lsv )
     lvg = "svg" + lsv;

  if( lsv ) {
     var lch  = "chnl" + lsv;
     var lobj = document.getElementById( lch );
     lobj.style.backgroundColor  =  "#666";
     lobj.style.borderColor      =  "#444";
     lobj.style.color            =  "#fff";
  }

  if ( chn != lsv ) {
  if ( chn > 0 && chn < 5 ) {
     footfoo('work');
  }
  if ( chn > 4 && chn < 9 ) {
     footfoo('about');
  }
  if ( chn > 8 ) {
     footfoo('contact');
  }
  }

  dial(chn);
  tglsplat( svg, lvg );
  lst.value = chn;
  return;
}
