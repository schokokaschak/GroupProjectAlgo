toptext = document.querySelector("#textTop")
bottomtext = document.querySelector("#textBottom")
memeURL = document.querySelector("#imgURL")
memetemplate = document.querySelector(".template")
imgsubmitbtn = document.querySelector(".imgsubmit")
defaulttop = document.querySelector(".toptextbox")
defaultbottom = document.querySelector(".bottomtextbox")


imgsubmitbtn.addeventlistener("click", function(){
    memetemplate.innerHTML = memeURL
})

defaulttop = toptext
defaultbottom = bottomtext