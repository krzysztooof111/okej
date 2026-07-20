$("body").keyup((event)=>{
    $("h1").text(event.key);
})
$("button").click(()=>{
    
    $("h1").css("color","purple")
})