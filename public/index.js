function onDragStart (event) {
    event
        .dataTransfer
        .setData('text/plain' , event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = 'yellow'

    
}

function onDragOver (event) {
    event.preventDefault();
}




// function onDrop (event) {
// const id = event
//     .dataTransfer
//     .getData('text')

// let nodeCopy = document.getElementById(id);


// }


/* 
!!THIS IS OUR WORKING VERSION THAT DOESNT COPY 
*/
// function onDrop (event) {
//     const id = event
//         .dataTransfer
//         .getData('text');
//         // console.log(event.dataTransfer.getData)
//         // console.log(id)

//      const draggableElement = document.getElementById(id);

//      const dropzone = event.target;

//     dropzone.appendChild(draggableElement);

//     event
//         .dataTransfer
//         .clearData();
// }


function onDrop(event) {
    event.preventDefault();
    var data=event.dataTransfer.getData("text")
    console.log(data)

    var nodeCopy = document.getElementById(data).cloneNode(true);
    console.log(nodeCopy)
    nodeCopy.id = "newId";
    event.target.appendChild(nodeCopy);

}


// function so that grabbing from "sidebar" produces a child that can be iterated or organized, themed, blah blah blah