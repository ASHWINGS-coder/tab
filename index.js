let index = 0;

var arr = ["https://www.sololearn.com","https://www.tutorialrepublic.com","http://typingtest.com","https://www.codedamn.com"]

// Add new Tab
function newtab(uri) {
    let i = ++index
    $(".tab").append(`
    <button  class="tablinks" onclick="opentab(event,${i})">
       New Tab 
    </button>
    `);

    $(".contents").append(
        `
        <div id=${i} class="tabcontent">
           <iframe src=${uri}></iframe>
        </div>
        `
    )
}

// Close Tabs
function closetab(index){
    var n = document.getElementsByClassName("tablinks")
    for(let i=0 ; i<n.length ; i++){
        n[i].addEventListener('click',function(){
            n[i].remove()
        })
    }
}

// Active tabs
function opentab(evt, id) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

// Open Url's
function openUrl(){
    for(let i=0 ; i<arr.length ; i++){
        newtab(arr[i])
    }
}

openUrl()