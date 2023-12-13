import {LucideIcon} from 'lucide-react';

const Icon = ({name, color, size, opacity = 1.0, center = false}: {
    name: LucideIcon,
    color: string,
    size: number,
    center?: boolean,
    opacity?: number
}) => {
    const LucideIcon = name;
    return <LucideIcon className={center ? "mx-auto" : ""} color={color} size={size} opacity={opacity}/>;
};

export default Icon;