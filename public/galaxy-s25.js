// Galaxy S25 Page JavaScript - Fix for Now Bar, Widget, and Notification functionality
document.addEventListener('DOMContentLoaded', function() {
    // Fix for video pause buttons in Now Bar, Widget, and Notification sections
    const videoPauseBtns = document.querySelectorAll('.video-pause-btn');
    
    videoPauseBtns.forEach(btn => {
        const video = btn.closest('.relative').querySelector('video');
        
        if (video) {
            // Make sure the button is visible and clickable
            btn.style.zIndex = '10';
            btn.style.cursor = 'pointer';
            
            // Add click event listener to button
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (video.paused) {
                    video.play();
                    btn.innerHTML = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>`;
                } else {
                    video.pause();
                    btn.innerHTML = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
                }
            });
            
            // Add event listeners to video to keep button in sync
            video.addEventListener('play', function() {
                btn.innerHTML = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>`;
            });
            
            video.addEventListener('pause', function() {
                btn.innerHTML = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
            });
            
            video.addEventListener('ended', function() {
                btn.innerHTML = `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
            });
        }
    });
    
    // Fix for Now Bar functionality
    const nowBarVideo = document.querySelector('.now-bar-video');
    const nowBarSection = document.querySelector('[data-section="now-bar"]');
    
    if (nowBarVideo) {
        nowBarVideo.addEventListener('click', function() {
            // Toggle Now Bar visibility or functionality here
            if (nowBarSection) {
                nowBarSection.classList.toggle('active');
            }
        });
    }
    
    // Fix for Widget functionality
    const widgetVideo = document.querySelector('[src*="galaxy-s25-features-one-ui-widget.webm"]');
    const widgetSection = document.querySelector('[data-section="widget"]');
    
    if (widgetVideo) {
        widgetVideo.addEventListener('click', function() {
            // Toggle Widget visibility or functionality here
            if (widgetSection) {
                widgetSection.classList.toggle('active');
            }
        });
    }
    
    // Fix for Notification functionality
    const notificationVideo = document.querySelector('[src*="galaxy-s25-features-one-ui-notification-a.webm"]');
    const notificationSection = document.querySelector('[data-section="notification"]');
    
    if (notificationVideo) {
        notificationVideo.addEventListener('click', function() {
            // Toggle Notification visibility or functionality here
            if (notificationSection) {
                notificationSection.classList.toggle('active');
            }
        });
    }
});