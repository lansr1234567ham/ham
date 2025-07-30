        const urlParams = new URLSearchParams(window.location.search);
        const videoFile = urlParams.get('video');
        const title = urlParams.get('title');

        if (videoFile && title) {
            document.getElementById('video-title').textContent = title;
            document.getElementById('video-source').src = 'videos/' + videoFile;
            document.getElementById('video-player').load();
        } else {
            document.getElementById('video-title').textContent = 'الفيديو غير متاح';
        }