
    const ipod = document.getElementById('ipod');
    const screen = document.getElementById('screen');
    const nextBtn = document.getElementById('nextBtn');
    const actionButtons = document.querySelectorAll('.action-btn');

    // Show action text when a button is clicked
    actionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        screen.textContent = btn.textContent + " clicked";
      });
    });

    // Next button changes iPod color and cycles actions
    let currentIndex = -1;
    nextBtn.addEventListener('click', () => {
      ipod.style.background = "pink";
      currentIndex = (currentIndex + 1) % actionButtons.length;
      screen.textContent = actionButtons[currentIndex].textContent + " clicked";
    });
  