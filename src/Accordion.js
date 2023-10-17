import { useState } from "react";


export default function AccordionItem({ label, content }) {
    const [isActive, setIsActive] = useState(false);
  
    const toggleAccordion = () => {
      setIsActive(!isActive);
    };
  
    return (
      <div className={`detail-item ${isActive ? 'active' : ''}`}>
        <div className="detail-label" onClick={toggleAccordion}>
          {label}
          <span className={isActive ? "minus" : "plus"}>{isActive ? "-" : "+"}</span>
        </div>
        {isActive && <span className="detail-value">{content}</span>}
      </div>
    );
  }
 
  