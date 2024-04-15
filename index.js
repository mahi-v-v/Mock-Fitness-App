// Function to animate the loading bar
function animateLoading(canvasId, progress, callback) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 30;
    const lineWidth = 3;

    function drawLoadingBar(progress) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, (2 * Math.PI * progress) - 0.5 * Math.PI);
        ctx.strokeStyle = '#9cb0ff';
        ctx.lineWidth = lineWidth;
        ctx.stroke();
    }

    function animate() {
        if (progress < 1) {
            progress += 0.001; // Adjust the speed of animation here
            drawLoadingBar(progress);
            requestAnimationFrame(animate);
        } else if (callback) {
            callback(); // Call the callback function if provided
        }
    }

    animate();
}

// Call the animateLoading function for the first canvas
animateLoading('loadingCanvas', 0, () => {
    switchPage();
    // Start the animation for loadingCanvas1 after the animation for loadingCanvas has finished
    animateLoading('loadingCanvas1', 0, () => {

        window.location.href = 'signup.html';
    });
});

function switchPage(){
    document.querySelector('.main-container').style.display = 'none';
    document.querySelector('.main-container1').style.display = 'block';
    animateLoading('loadingCanvas1', 0, () => {

        window.location.href = 'signup.html';
    });
}

function redirect(){
    window.location.href = 'signup.html';
}