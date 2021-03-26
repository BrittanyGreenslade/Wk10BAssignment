var itemInCart = Cookies.get("selection");
//stored the VALUE of the cookies with the name "selection" that were created 'on click' with our
//function frm app.js (which will be the equivalents of 'selectedItem' in app.js) in itemInCart variable
var selectionContainer = document.getElementById("checkoutCart");
//grabbed the item with the id "checkoutCart" from my selection.html page and stored it in a variable

//changed the inner HTML of the above element; aligned it centre-ly
selectionContainer.innerHTML = `<h3>Your item is: ${itemInCart}<h3>`;
selectionContainer.style.textAlign = `center`;
beerPic = document.createElement("img");
selectionContainer.append(beerPic);
//created an img element and appended it to the element with ID "checkoutCart"

if (itemInCart === `Jam Rock`) {
  beerPic.setAttribute(
    "src",
    "https://images.squarespace-cdn.com/content/v1/5b4d5c1829711496f9f52d76/1601930983277-B4WWJY0O4IAEI8Y8HN7Y/ke17ZwdGBToddI8pDm48kLXCf88_9uNTKXkq27cF4sB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmwbA6upbL5Bu97tJociXJklKprRMdH2Tl4F1PjaoPT3YUs5wkl5ojCV1O900UJ7ME/16_JamRock_Sleeve_2020.png-square-1024x1024.png?format=750w"
  );
} else if (itemInCart === `Super Saturation`) {
  beerPic.setAttribute(
    "src",
    "https://cdn.shoplightspeed.com/shops/626891/files/29944576/660x880x1/cabin-brewing-super-saturation-nepa-473ml.jpg"
  );
} else if (itemInCart === `Kveik Pilsner`) {
  beerPic.setAttribute(
    "src",
    "https://cdn.shopify.com/s/files/1/0359/3037/4281/products/5584220-ODDCOMPANYkveikpilsner_580x.jpg?v=1615699924"
  );
} else {
  selectionContainer.innerHTML = `<h1> CHOOSE SOMETHING YA DUMMY</h1>`;
}

//conditional statement that shows the item's picture IF that specific item was selected
//if nothing was selected. the innerHTML of the selectionContainer variable changes to show users
//a message that they must choose something

function removeItem(removedItem) {
  Cookies.remove("selection", removedItem);
}
//created a function that takes one argument (which is the value of the removedItem given when the
//function is called in selection.html), and it removes the cookies that have the name "selection" (which the
//ones we created in our app.js function do) and the value equal to the argument when the function is called

//this was fun
