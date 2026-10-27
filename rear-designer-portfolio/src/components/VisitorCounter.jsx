import React, { useEffect, useState, useRef } from 'react';
import { db } from '../firebase';
import { ref, onValue, runTransaction } from 'firebase/database';

function VisitorCounter() {
  const [count, setCount] = useState(() => {
    // Persistent local count so user always sees the counter
    const stored = localStorage.getItem('visitor_local_count');
    return stored ? parseInt(stored, 10) : 48;
  });
  const [animate, setAnimate] = useState(false);
  const prevCountRef = useRef(null);

  useEffect(() => {
    // If Firebase isn't configured, increment a persistent local visit counter
    const isConfigured = Boolean(db && db.app && db.app.options && db.app.options.apiKey && !db.app.options.apiKey.includes('YOUR_'));

    if (!isConfigured) {
      const current = parseInt(localStorage.getItem('visitor_local_count') || '48', 10) + 1;
      localStorage.setItem('visitor_local_count', current);
      setCount(current);
      return;
    }

    try {
      const visitorRef = ref(db, 'visitorCount');

      // Only increment once per browser session / mount
      const sessionKey = 'has_counted_this_session';
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, 'true');
        runTransaction(visitorRef, (currentCount) => {
          return (currentCount || 0) + 1;
        }).catch(() => { });
      }

      const unsubscribe = onValue(
        visitorRef,
        (snapshot) => {
          const val = snapshot.val();
          if (val !== null && val !== undefined) {
            setCount(val);
            if (prevCountRef.current !== null && prevCountRef.current !== val) {
              setAnimate(true);
              setTimeout(() => setAnimate(false), 500);
            }
            prevCountRef.current = val;
          }
        },
        () => { }
      );

      return () => unsubscribe();
    } catch { }
  }, []);

  return (
    <div className={`visitor-counter ${animate ? 'visitor-counter--pop' : ''}`} title="Live visitor count">
      <span className="visitor-counter__dot" />
      <span className="visitor-counter__icon">👁</span>
      <span className="visitor-counter__label">
        {count.toLocaleString()}
        <small>Viewers</small>
      </span>
    </div>
  );
}

export default VisitorCounter;
