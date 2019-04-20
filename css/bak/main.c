body {
  background-color: #fff;
}

header {
  grid-column: 1 / 4;
  width: 100%;
  height: 8%;
  left:0;
  top:0;
  position:fixed;
  z-index: 1;
  background-color: #b6b6b6;
}

footer {
  background-color: #444;
  position: fixed;
  width: 100%;
  height: 7%;
  bottom: 0;
  left: 0;
  overflow: hidden;
  grid-column: 1 / 4;
}



article {
  background-color: #b6b6b6;
  width: 80%;
  height: 70%;
  margin-top:5%;
/*  margin-right:10%; */
  margin-left:10%; 
  position:absolute;
/*  border-radius: 0px 0px 225px 225px; */
}

amid{
  width: 70%;
  height: 60%;
  position: fixed;
  margin: 5%;
/*  padding: 5%; */
  background-color: purple;
}

ahead {
  grid-column: 1 / 4;
  height:70%;
  top: 0;
  width: 70%;
  position: reletive;
  background-color: orange;
}


afoot {
  grid-column: 1 / 4;
  height: 5%;
/*  bottom: 0;
  float: bottom; */
  width: 100%;
  position:fixed;
  background-color: coral;
}


alft {
  background-color: yellow;
  height: 90%;
  width: 5%;
/*  left: 0;
  float: left;  */
  position:fixed; 
  border-radius: 0px 50px 0px;
}

argt {
  background-color: green;
  height: 90%;
  width: 5%;
/*  right: 0;
  float :right; */
  position:fixed;
  border-radius: 50px 0px 5px 0px;
}


.grid {
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: repeat(3, 100px);
  /* grid-gap: 1em; */
}

.sidebar-left {
  background-color: #444;
  height: 70%;
  margin-top: 4.5%;
  position: fixed;
  border-radius: 0px 25px 50px 50px;
/*  border-color: #b6b6b6 #fff #fff */
  z-index: 1;
}

.sidebar-right {
  background-color: #b6b6b6;
  right:0;
  top: 8%;
  height:75%;
  position: absolute;
  border-radius: 0px 0px 150px 0px;
}

.slft {
  background-color: #fff;
  width: 1%;
  height: 75%;
  margin:auto;
/*  margin-top:4.5%;*/
  position: fixed;
  display:inline;
  border-radius: 0px 175px 0px 0px;
}


.foowork {
  width: 30%;
  height: 120%;
  border-radius: 15px 50px 30px 0px;
  background-color: #fff;
  text-align:center;
  margin:auto;
  margin-left:10%;
  display:inline;
  position: fixed;
}

.fooabout {
  width: 30%;
  height: 100%;
  border-radius: 15px 50px 30px 0px;
  background-color: #444;
  text-align:center;
  margin: auto;
  display:inline;
  margin-left:35%;
  position: fixed;
}

.foocontact {
  width: 30%;
  height: 100%;
  border-radius: 15px 50px 30px 0px;
  background-color: #b6b6b6;
  text-align:center;
  margin: auto;
  margin-left: 60%;
  display:inline;
  position:fixed;

}


