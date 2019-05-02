function
splats()
{
  return;
  var stroke = svfz();
  console.log("stroke " + stroke);
  var p1  = document.getElementById( 'svg9' );
  var p2  = document.getElementById( 'svg10' );
  var p3  = document.getElementById( 'svg11' );
  var p4  = document.getElementById( 'svg12' );
  p1.setAttribute("d", stroke);
  p2.setAttribute("d", stroke);
  p3.setAttribute("d", stroke);
  p4.setAttribute("d", stroke);
  return;
}
