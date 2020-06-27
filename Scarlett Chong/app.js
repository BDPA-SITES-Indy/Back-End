//calculations
  function calculate(){
    var bill = getElementById('input-bill').value;
    var people = getElementById('input-users').value;
    var tip = getElementById('input-service').value;
    var total = (bill * (tip/100));
    console.log(total)
    var eachPerson= (total / people);
    console.log(eachPerson)
  }


//results
function resultsFunc () {
  onpress(){
    getElementsByClassName('results text-center my-3');
  };
}

//timeout
var timeout;
function myFunction() {
  timeout = setTimeout(resultsFunc, 6000);
}
