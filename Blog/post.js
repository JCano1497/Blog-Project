function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}
function display() {
    var x = document.getElementById('PostForm');
    if (x.style.display === 'none') {
      x.style.display = '';
    } 
  }

function validateForm() {

    // Retrieving the values of form elements 
    var title = document.Post.title.value;
    var article= document.Post.article.value;
    var image=document.getElementById("img");
    console.log(image.value.length);
    var articleErr = imageErr = titleErr = true;

    // Validate name
    if (title.length==0){
        printError("titleErr","Please enter a title");
    }
    else{
        printError("titleErr","");
        titleErr=false;
    }

    if(article.length==0){
        printError("articleErr", "Please enter a message");
    }
    else{
        printError("articleErr","");
        articleErr = false;

    }
    if(image.files[0]==undefined || image.files[0]==null){
        printError("imageErr", "Please select an image");
    }
    else{
        printError("imageErr","");
        imageErr = false;
    }
    if(articleErr==false && titleErr==false && imageErr==false){
        post(title,article,image);
    }
        return false;
}
function post(title,article,image){
    var card=document.createElement("div");
    card.className="card";
    var ArticleTitle=document.createElement("h2");
    ArticleTitle.textContent=title;
    var img=document.createElement("img");
    img.className="img";
    img.src=URL.createObjectURL(image.files[0]);
    var paragraph=document.createElement("p");
    paragraph.textContent=article;
    card.appendChild(ArticleTitle);
    card.appendChild(img);
    card.appendChild(paragraph); 
    document.getElementById("blogs").appendChild(card);

}