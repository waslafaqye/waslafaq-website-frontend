import React from 'react';


function GradiantCard({children, className = ''}: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`gradiantCard ${className}`}>
            {children}
        </div>
    );
}

export default GradiantCard;