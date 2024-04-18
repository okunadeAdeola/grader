var song = "audios/songC.mp3"
var songToPlay = (song)



function calc(){
    console.log(student.value, Eng.value, math.value, phy.value, che.value, bio.value, geo.value);


  if (student.value == "" || Eng.value == "" || math.value == "" || phy.value == "" || che.value == "" || bio.value == "" || geo.value == "") {
    alert ("input the scores")
  } else {
    var confirmation = confirm("Are you sure you want to proceed")
    if (confirmation == true){
      var sum = Number(Eng.value) + Number(math.value) + Number(phy.value) + Number(che.value) + Number(bio.value) + Number(geo.value)
      var cumu = ((sum/600) * 100) .toFixed(2)

      welcome.innerHTML = "Welcome " + document.getElementById("student"). value
      remark.innerHTML = "We appreciate your effort in this semester, work harder next semester "

     if (cumu >= 0 && cumu <40) {
        result.innerHTML = "YOUR SCORE IS " + cumu + "%. Unfortunately you will be repeating this same level next semester"
       songToPlay.play()
      }
       else if(cumu >= 40 && cumu <60) {
        result.innerHTML = "Your score is " + cumu + "%. Work harder next semester to be able to score more than this because you barely escape relegation this semester."
        songToPlay.play()
      } else if (cumu >=60 && cumu <80) {
        result.innerHTML = "Your score is " + cumu + "%. A satisfactory result keep it up next semester and the rest of the semester"
      } else if (cumu >=80 && cumu <100) {
        result.innerHTML = "Your score is " + cumu + "%. A satisfactory result keep it up next semester and the rest of the semester the sky is your limit"
      }  if(cumu > 100){
        font.style.display = 'block'
        setTimeout(() => {
          font.style.display = 'none'
        }, 3000);
      }
    }
  }
  document.getElementById("student"). value = ""
  document.getElementById("Eng"). value = ""
  document.getElementById("math"). value = ""
  document.getElementById("phy"). value = ""
  document.getElementById("che"). value = ""
  document.getElementById("geo"). value = ""
  document.getElementById("yor"). value = ""
  document.getElementById("bio"). value = ""
        
     
}





