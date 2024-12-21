// Hàm tạo mưa hoa
function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 290);
    let size = Math.random() * 1.5 + 0.5;
    let duration = Math.random() * 2 + 1;

    const flowerIcons = ['🌸', '💐', '🌷', '🌺', '🌻'];
    let randomIcon = flowerIcons[Math.floor(Math.random() * flowerIcons.length)];

    e.innerText = randomIcon;
    e.style.left = left + 'px';
    e.style.fontSize = size + 'em';
    e.style.animationDuration = duration + 's';

    setTimeout(function () {
        cloud.removeChild(e)
    }, 3000);
}

// Tạo hiệu ứng mưa hoa liên tục
setInterval(function () {
    rain();
}, 100);

// Hàm tạo chim bay
function createBird() {
    const birdsContainer = document.querySelector('.birds-container');
    const bird = document.createElement('div');

    bird.classList.add('bird');
    bird.innerHTML = '💖'; // Biểu tượng chim

    // Thêm random cho vị trí và kích thước chim
    let topPosition = Math.random() * window.innerHeight;
    bird.style.top = topPosition + 'px';
    bird.style.fontSize = Math.random() * 1.5 + 1 + 'em';

    birdsContainer.appendChild(bird);

    // Tạo phiên bản bay ngược
    const reverseBird = bird.cloneNode(true);
    reverseBird.classList.add('reverse');
    birdsContainer.appendChild(reverseBird);
}

// Tạo chim bay liên tục sau mỗi 4 giây
setInterval(function () {
    createBird();
}, 4000);
