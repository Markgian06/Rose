function createElements() {
    const elemTypes = ['heart', 'flower', 'love-text'];
    const colors = ['#ff69b4', '#ff1493', '#ff77aa', '#ff9dce', '#c377e0', '#ff3399'];
    const loveTexts = ['Love', 'Love 😍❤️', '💌', '🌹', '♥'];
    
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      
      const duration = Math.random() * 5 + 2;
      star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
      
      document.body.appendChild(star);
    }
    
    for (let i = 0; i < 40; i++) {
      const type = elemTypes[Math.floor(Math.random() * elemTypes.length)];
      const elem = document.createElement('div');
      elem.className = type;
      
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      elem.style.left = `${left}%`;
      elem.style.top = `${top}%`;
      
      if (type === 'heart') {
        elem.innerHTML = '♥';
        elem.style.color = colors[Math.floor(Math.random() * colors.length)];
        elem.style.fontSize = `${Math.random() * 30 + 20}px`;
        elem.style.textShadow = '0 0 5px rgba(255, 105, 180, 0.7)';
      } else if (type === 'flower') {
        elem.innerHTML = '✿';
        elem.style.color = colors[Math.floor(Math.random() * colors.length)];
        elem.style.fontSize = `${Math.random() * 30 + 15}px`;
        elem.style.textShadow = '0 0 5px rgba(255, 105, 180, 0.7)';
      } else {
        elem.innerHTML = loveTexts[Math.floor(Math.random() * loveTexts.length)];
        elem.style.color = colors[Math.floor(Math.random() * colors.length)];
        elem.style.fontSize = `${Math.random() * 24 + 12}px`;
        elem.style.textShadow = '0 0 8px rgba(255, 105, 180, 0.9)';
      }
      
      const duration = Math.random() * 10 + 5;
      const delay = Math.random() * 5;
      elem.style.animation = `float ${duration}s ease-in-out ${delay}s infinite, fadeInOut ${duration * 2}s ease-in-out ${delay}s infinite`;
      
      document.body.appendChild(elem);
    }
  }
  
  createElements();