let dropCount = 0
let hoverCounter = 1

function stateChange () {
    //potentially change the class and more?... 
    // create global counters that will switch on and off different dropzones
}

//!drag related stuff\\

function onDragStart (event) {
    event
        .dataTransfer
        .setData('text/plain' , event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = 'rgb(37 , 109 , 133)'

    
}

function onDragOver (event) {
    event.preventDefault();
}


function onDrop(event) {

    event.preventDefault();
    var data=event.dataTransfer.getData("text")
    console.log(data)

    var nodeCopy = document.getElementById(data).cloneNode(true);
    console.log(nodeCopy)
    nodeCopy.id = "newId";
    event.target.appendChild(nodeCopy);

    dropCount++;
    if (dropCount < 2){
    stateChange();

    }
}
//!drag//

function showFirstNodes (res) {
    document.querySelector(`${res}`).remove();
}

function checkCount() {
    // wait(3)
    if (dropCount === 0 && hoverCounter > 2) {
        console.log(dropCount)
        showFirstNodes('span');
    }
}


checkCount();