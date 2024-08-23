window.onload = function(){
    let pageTitle = document.title;
    let attentionMsg = "Come Back!!";
    let blinkEvent = null;

    document.addEventListener('visibilitychange', (e)=>{
        let isPgActive = !document.hidden;

        if(!isPgActive){
            document.title = attentionMsg;
            blink();
        } else{
            clearInterval(blinkEvent); // Clear the interval
            document.title = pageTitle;
        }
    })

    function blink(){
        blinkEvent = setInterval(()=>{
            document.title = document.title === attentionMsg ? pageTitle : attentionMsg;
        }, 1000); // Add a time interval
    }
}