export function myMove() {
    console.log("moving");
    var elem = document.getElementById("monkey1");
    var stock = document.getElementsByClassName("anime")[0];
    var pos = 0;
    var check = window.innerHeight-350;
    var id = setInterval(frame, 1);
    var reverse = 0
    stock.style.display = "none"
    function frame() {
        if (pos ==0 && reverse == 1 ){
          clearInterval(id);
        }
        else if(reverse==1){
          pos--;
          elem.style.top = pos + 'px';
        }
        else if (pos === check) {
            reverse = 1;
            stock.style.display = "block"
        } else {
            pos++;
            elem.style.top = pos + 'px';
        }
    }
    console.log("done");
}
