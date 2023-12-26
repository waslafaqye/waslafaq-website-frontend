import React from 'react';


function GradiantCard({children, className = ''}: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`gradiantCard p-[1.5rem] hover:bg-white/10  transition-all duration-300  ${className}`}>
            {children}
        </div>
    );
}

export default GradiantCard;