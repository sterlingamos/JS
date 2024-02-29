// Merchandise

//Declare variables
const openLI = "<li>"; 
const closeLI = "</li>";
const imgname = "prod"; //filename
const imgext = ".png"; //file extension
let img; //assemble full image file name
const startIMG = "<img src='images/merchandise/"; //first part of image tag
const endIMG = "'>"; //second part of image tag
const imgID = "' id='info"; //id
let imgTag; //assemble image tag
let listTag; //assemble image tag within list
let listTags = []; //empty array

let addCart = "Add to Cart"; //for product info box
let dismiss = "Close"; //for product info box

//Loop to create each image by assembling the parts together
for(let count=0; count < 6; count++) {
    img = imgname + (count+1) + imgext; // ex: prod.png
    imgTag = startIMG + img + imgID + (count+1) + endIMG; //ex: <img src='images/prod3.png id='info3'>
    listTag = openLI + imgTag + closeLI; //ex: <li><img src+'images/prod3.png'></li>
    //store each markup in an array
    //ex: [<li><img src='images/prod1.png'></li>,<li><img src='images/prod2.png'></li>,]
    listTags.push(listTag);
}

//display images
//use join() method to remove comma between items
document.getElementById('products').innerHTML = listTags.join(" ")


/* PRODUCT INFO BOX */

//Product details
const prodNum = [
    'T-4028','T-4360','D-8121','H-6923','T-4188','S-0274','P-7743','T-4650','H-7341'
];
const prodPrice = [
    35,38,48,24,35,6,19,38,24
];

//Defining function call by user click on a product
const moreDetails = function(evt) {

    //Find index number from id name
    let idname = evt.target.id;
    let idnum = idname[4]-1;

    //Info box content
    document.getElementById("info_box").style.visibility="visible";
    document.getElementById("info_num").innerHTML = "Item No. " + prodNum[idnum]
    document.getElementById("info_price").innerHTML = "Price $" + prodPrice[idnum]
    document.getElementById("addBtn").innerHTML = addCart;
    document.getElementById("closeInfo").innerHTML = dismiss;

    //Info box location
    switch(idnum) {
        case 0:
        document.getElementById("info_box").style.top="20%"
        document.getElementById("info_box").style.left="7%"
        break;
        case 1:
        document.getElementById("info_box").style.top="20%"
        document.getElementById("info_box").style.left="39%"
        break;
        case 2:
        document.getElementById("info_box").style.top="20%"
        document.getElementById("info_box").style.left="71%"
        break;
        case 3:
        document.getElementById("info_box").style.top="50%"
        document.getElementById("info_box").style.left="7%"
        break;
        case 4:
        document.getElementById("info_box").style.top="50%"
        document.getElementById("info_box").style.left="39%"
        break;
        case 5:
        document.getElementById("info_box").style.top="50%"
        document.getElementById("info_box").style.left="71%"
        break;
        case 6:
        document.getElementById("info_box").style.top="80%"
        document.getElementById("info_box").style.left="7%"
        break;
        case 7:
        document.getElementById("info_box").style.top="80%"
        document.getElementById("info_box").style.left="39%"
        break;
        case 8:
        document.getElementById("info_box").style.top="80%"
        document.getElementById("info_box").style.left="71%"
        break;
    }
}

//Gather all product images and store in a variable
const prodImgs = document.getElementsByTagName("img");

//Listen for image click
for (let prodImg of prodImgs) {
    prodImg.addEventListener("click", moreDetails);
}

//Create close info box link
let closeinfo = document.getElementById("closeInfo");
closeinfo.addEventListener("click", hideInfo);

//Close info box
function hideInfo() {
    document.getElementById("info_box").style.visibility="hidden";
}