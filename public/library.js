var coll = document.getElementsByClassName("collapsible");
var i;

//toggle collapse ~~ try to replace this with https://developer.chrome.com/blog/performant-expand-and-collapse/
//right?
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
  coll[i].addEventListener("mouseover" , function () {
    wait(10)
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
//quarantined temporarily. Maybe


//dragable events
function onDragStart (event) {
    event
        .dataTransfer
        .setData('text/plain' , event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = 'black';
}