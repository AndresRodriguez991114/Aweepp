// /components/Aviso.js
import React, { useState, useEffect } from 'react';

function Aviso() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000); // Oculta el aviso después de 5 segundos
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#ffeb3b',
      padding: '15px',
      borderRadius: '5px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 1000
    }}>
      Este es un aviso importante.
    </div>
  );
}

export default Aviso;
