
const searchInput = document.querySelector("#searchJS");
const searchBtn = document.getElementById("fa-search");

searchInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        focus();
        search();
    }
});

// searchInput.addEventListener("keypress", function(event){
    // if(event.keyCode !== 13){
        // focus();
    // }
    // else{
        // 
    // }
// });
function focus(){
    searchBtn.style.backgroundColor = "#66ad57"
    searchBtn.style.position = "absolute";
    searchBtn.style.backgroundColor = "#66ad57";
    searchBtn.style.color = "white";
    searchBtn.style.padding = "11px";
    searchBtn.style.borderTopRightRadius = "5px";
    searchBtn.style.borderBottomRightRadius = "5px";
    searchBtn.style.top = "1px";
    searchBtn.style.bottom = "1px";
    searchBtn.style.right = "1px";
}

function search(){
    const Input = searchInput.value;
    
    if(Input == ""){
        
    }
    else {
        window.location.href = "https://duckduckgo.com/?q=" + Input + "&t=h_&ia=web";
    }
    
}