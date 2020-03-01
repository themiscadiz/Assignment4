
window.addEventListener('DOMContentLoaded', async () => {

    
    let showVotes = false;
    let voteCat = true; 
    let catCount = 0;

    let voteDog= true; 
    let dogCount = 0;

    let voteHorse= true; 
    let horseCount = 0;

    let voteUnicorn= true; 
    let unicornCount = 0;

    let voteEagle= true; 
    let eagleCount = 0;

    document.getElementById("cat").addEventListener("click", function addVoteCat(){
        
        if(voteCat){
            catCount = catCount + 1; 
            showVotes = true; 
            showAllVotes(showVotes); 
        }
    });
     
    document.getElementById("dog").addEventListener("click", function addVoteDog(){
        if(voteDog){
            dogCount = dogCount + 1; 

            showVotes = true;  
            showAllVotes(showVotes);           
        }
    });

    document.getElementById("horse").addEventListener("click", function addVoteHorse(){
        if(voteHorse){
            horseCount = horseCount + 1; 
            showVotes = true;
            showAllVotes(showVotes);             
        }
    });

    document.getElementById("unicorn").addEventListener("click", function addVoteUnicorn(){
        if(voteUnicorn){
            unicornCount = unicornCount + 1; 
            showVotes = true; 
            showAllVotes(showVotes);            
        }
    });

    document.getElementById("eagle").addEventListener("click", function addVoteEagle(){
        if(voteEagle){
            eagleCount = eagleCount + 1; 
            showVotes = true; 
            showAllVotes(showVotes);            
        }
    });
   


    
    function showAllVotes(showVotes){
    if(showVotes){
        document.getElementById("catNum").innerHTML = catCount;
        document.getElementById("dogNum").innerHTML = dogCount;
        document.getElementById("horseNum").innerHTML = horseCount;
        document.getElementById("unicornNum").innerHTML = unicornCount;
        document.getElementById("eagleNum").innerHTML = eagleCount;
            }
        }



})
