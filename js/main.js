$(window).on("load",function(){
    $('.loader-container').fadeOut(2000);
});


var songs = ["./music/song1.mp3","./music/song2.mp3","./music/song3.mp3"];
        var poster = ["./img/poster1.png","./img/poster2.png","./img/poster3.png"];
        
        var songTitle = document.getElementById("songTitle");
        var fillBar = document.getElementById("fill");
        
        var song = new Audio();
        var currentSong = 0;   
        
        window.onload = playSong;   
        
        function playSong(){
            
            song.src = songs[currentSong];  
            
            songTitle.textContent = songs[currentSong]; 
            
            song.play();   
        }

        function playOrPauseSong(){
            
            if(song.paused){
                song.play();
                $("#play img").attr("src","./img/Pause.png");
            }
            else{
                song.pause();
                $("#play img").attr("src","./img/Play.png");
            }
        }
        
        song.addEventListener('timeupdate',function(){ 
            
            var position = song.currentTime / song.duration;
            
            fillBar.style.width = position * 100 +'%';
        });
        
    
        function next(){
            
            currentSong++;
            if(currentSong > 2){
                currentSong = 0;
            }
            playSong();
            $("#play img").attr("src","./img/Pause.png");
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }
    
        function pre(){
            
            currentSong--;
            if(currentSong < 0){
                currentSong = 2;
            }
            playSong();
            $("#play img").attr("src","./img/Pause.png");
            $("#image img").attr("src",poster[currentSong]);
            $("#bg img").attr("src",poster[currentSong]);
        }