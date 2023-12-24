import {LucideIcon} from 'lucide-react';

const Icon = ({name, color, size, opacity = 1.0, center = false, className}: {
    name: LucideIcon,
    color: string,
    className?: string,
    size: number,
    center?: boolean,
    opacity?: number
}) => {
    const LucideIcon = name;
    return <LucideIcon className={`${center ? "mx-auto" : ""}  ${className}`} color={color} size={size}
                       opacity={opacity}/>;
};

export default Icon;