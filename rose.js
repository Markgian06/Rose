        const rose = document.getElementById('rose');
        const container = document.querySelector('.rose-container');
        
        let rotateX = -20;
        let rotateY = 0;
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            rotateY = ((e.clientX - centerX) / rect.width) * 30;
            rotateX = -20 + ((e.clientY - centerY) / rect.height) * 20;
            
            rose.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        container.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            rotateY = ((touch.clientX - centerX) / rect.width) * 30;
            rotateX = -20 + ((touch.clientY - centerY) / rect.height) * 20;
            
            rose.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }, { passive: false });
        
        let time = 0;
        const animate = () => {
            time += 0.005;
            
            if (!container.matches(':hover')) {
                const breatheAmount = Math.sin(time) * 3;
                rose.style.transform = `rotateX(${rotateX + breatheAmount * 0.5}deg) rotateY(${rotateY + breatheAmount}deg)`;
            }
            
            requestAnimationFrame(animate);
        };
        
        animate();
        
        container.addEventListener('click', () => {
            const fallingPetal = document.createElement('div');
            fallingPetal.className = 'petal';
            fallingPetal.style.position = 'absolute';
            fallingPetal.style.left = Math.random() * 200 + 50 + 'px';
            fallingPetal.style.top = Math.random() * 100 + 50 + 'px';
            fallingPetal.style.transform = 'scale(0.6) rotate(' + (Math.random() * 90) + 'deg)';
            fallingPetal.style.opacity = '0.7';
            fallingPetal.style.zIndex = '100';
            document.body.appendChild(fallingPetal);
            
            let posY = parseInt(fallingPetal.style.top);
            let posX = parseInt(fallingPetal.style.left);
            let rotation = Math.random() * 360;
            let rotSpeed = Math.random() * 3 - 1.5;
            let speedY = 1;
            let speedX = Math.random() * 2 - 1;
            
            const fall = () => {
                posY += speedY;
                speedY += 0.05;
                posX += speedX;
                rotation += rotSpeed;
                
                fallingPetal.style.top = posY + 'px';
                fallingPetal.style.left = posX + 'px';
                fallingPetal.style.transform = 'scale(0.6) rotate(' + rotation + 'deg)';
                
                if (posY < window.innerHeight) {
                    requestAnimationFrame(fall);
                } else {
                    fallingPetal.remove();
                }
            };
            
            fall();
        });
    


    




      