$(document).ready(function(){
    
    $('.slide').mousemove(function(){
        var docWidth =$( document ).width();
        if((event.pageX - docWidth/2) < -40) {
            $('.slide').css("cursor", "url(Images/MSC/ArrowLeft.png), auto");
        } else if ((event.pageX - docWidth/2) > 30) {
            $('.slide').css("cursor", "url(Images/MSC/ArrowRight.png), auto");
        } else {
            $('.slide').css("cursor", "inherit");
        }
    });
    
    var loc =1;
    $(".slide").click(function(){
        var images = $("img");
        var that = $(this).find(images);
        
        var docWidth =$( document ).width();
        
        //get slide size
        var totalPics=$(that).attr('class');
        console.log(totalPics);
        
        //get img src
        var src= $(that).attr('src');
        //pull out last two numbers
        var myRe = /(\d.)\./;
        var myArray = myRe.exec(src);
        
        //click left
        if(event.pageX< docWidth/2) {
            loc --;
            var next = Math.floor(myArray[1]) + -1;
            if (next<1) {
                next=Math.floor(totalPics);
                console.log('loop');
                loc=next;
            }
            if (next<10) {
                next="0" + next;
            }
            
        //click right
        } else {
            loc++;
            var next = Math.floor(myArray[1]) + 1;
            if (next>Math.floor(totalPics)) {
                next=1;
                loc=1;
            }
            if (next<10) {
                next="0" + next;
            }
            
        }
        
        if (true) {
            var spans = $("span");
            var par = $(this).parent().find(spans).html(loc);
        }
  
        var newSrc=src.replace(/\d.(\.[\w\d_-]+)$/i, next + '$1');
        $(that).attr('src',newSrc);
        
    });
});