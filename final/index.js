function onDragStart (event) {

    event
        .dataTransfer
        .setData('text/plain' , event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = '#444a'
    
}

function onDragOver (event) {

    event.preventDefault();

}


function onDrop(event) {

    event.preventDefault();
    var data = 
        event
            .dataTransfer
            .getData("text")
    console.log(data)

    var nodeCopy = 
        document
        .getElementById(data)
        .cloneNode(true);
    console.log(nodeCopy)
    nodeCopy.id = "newId";
    event.target.appendChild(nodeCopy);

}

