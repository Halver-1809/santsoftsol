import React, { useEffect } from 'react';
import '../styles/style.scss';

const InteractiveBubble: React.FC = () => {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive');
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();

    return () => {
      window.removeEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
      });
    };
  }, []);

  return (
    <div className="interactive">
      {/* Your content here */}
    </div>
  );
};

export default InteractiveBubble;
