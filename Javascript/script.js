const track = document.getElementById('track');
    const bike = document.getElementById('bike');

    let bikePosition = 0;
    let bikeSpeed = 0;

    const update = () => {
      bikePosition += bikeSpeed;

      if (bikePosition > track.getBoundingClientRect().width) {
        bikePosition = 0;
      }

      bike.style.left = bikePosition + 'px';
    };

    window.addEventListener('keydown', (event) => {
      if (event.keyCode === 37) { // Left arrow
        bikeSpeed -= 1;
      } else if (event.keyCode === 39) { // Right arrow
        bikeSpeed += 1;
      }
    });

    window.addEventListener('keyup', (event) => {
      if (event.keyCode === 37 || event.keyCode === 39) {
        bikeSpeed *= 0.9;
      }
    });

    setInterval(update, 10);