// script.js
document.getElementById('valider').addEventListener('click', function() {
    var pseudo = document.getElementById('pseudo').value;
    if (pseudo.trim() !== '') {
        // Cacher le formulaire
        document.getElementById('form-container').style.display = 'none';

        // Afficher la vidéo en plein écran
        var videoContainer = document.getElementById('video-container');
        videoContainer.style.display = 'flex';
        
        var video = document.getElementById('video');
        video.play();

        // Mettre la vidéo en plein écran
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    }
});

// Fermer la vidéo quand la touche Échap est pressée
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        var videoContainer = document.getElementById('video-container');
        videoContainer.style.display = 'none';
        var video = document.getElementById('video');
        video.pause(); // Pause la vidéo
        video.currentTime = 0; // Reprend la vidéo depuis le début si nécessaire
        document.getElementById('form-container').style.display = 'block'; // Remontrer le formulaire
    }
});
