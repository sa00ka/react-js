import React from 'react'
import './style.css';
import Typed from 'typed.js';

function FullName() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['First Name is Sami', 'Last Name is Karouf'],
        typeSpeed: 150,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return (
      <div className="fullname">
        <h1>My <span ref={el} /></h1>
      </div>
    );
  }

export default FullName
