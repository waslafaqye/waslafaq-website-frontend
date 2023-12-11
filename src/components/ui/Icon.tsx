import {LucideIcon} from 'lucide-react';

const Icon = ({name, color, size, opacity = 1.0}: {
    name: LucideIcon,
    color: string,
    size: number,
    opacity?: number
}) => {
    const LucideIcon = name;
    return <LucideIcon color={color} size={size} opacity={opacity}/>;
};

export default Icon;