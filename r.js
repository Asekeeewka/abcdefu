<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Embed Example</title>
</head>
<body>
    <div id="videoContainer"></div>

    <script>
        // Create an iframe element
        const iframe = document.createElement('iframe');

        // Set attributes for the iframe
        iframe.width = '560';
        iframe.height = '315';
        iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=7g0BdGfwHjCS7h2d'; // Replace VIDEO_ID with the actual video ID
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
       // Append the iframe to the container
        document.getElementById('videoContainer').appendChild(iframe);
    </script>
</body>
</html>
