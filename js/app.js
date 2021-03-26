function selectItem(selectedItem) {
  Cookies.set("selection", selectedItem);
  window.location.href = "/pages/selection.html";
}
//declared a function that selects items from the html
//and then creates cookies when those items are clicked on that have the name "selection" and the value of
//the item on which the function is called in my HTML (either 'Jam Rock', 'Super Saturation' or 'Kveik Pilsner')
//btw I can't remember what you said that %20 was from in between the words when there are spaces but I left
//it there so I could ask here
//the object window.location redirects the user to the selection.html oage when the function selectItem is called
