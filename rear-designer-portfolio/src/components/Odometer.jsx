import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Odometer = ({ value, delay = 0.2 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };
    
    // Animate obj.val from 0 to value with the configured delay
    const animation = gsap.to(obj, {
      val: value,
      duration: 2,
      delay: delay,
      roundProps: 'val',
      ease: 'power1.out',
      onUpdate: () => {
        if (elementRef.current) {
          elementRef.current.innerText = obj.val;
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, [value, delay]);

  return <span ref={elementRef} className="odometer">0</span>;
};

export default Odometer;
