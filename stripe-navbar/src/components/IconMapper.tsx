import React from "react";




import {
    Building2,
    Rocket,
    Wallet,
    Smartphone,
    ShoppingCart,
    Store,
    Layers,
    LayoutGrid,
    BarChart3,
    Cloud,
    Globe,
    Sparkles,
    Play,
    Lightbulb,
    Heart,
    Plane,
    ShoppingBag,
    Umbrella,
    Package,
    Users,
    CreditCard,
    ExternalLink,
} from "lucide-react";


const iconMap: Record<string, React.ComponentType<any>> = {
    building: Building2,
    rocket: Rocket,
    crypto: Wallet,
    mobile: Smartphone,
    cart: ShoppingCart,
    store: Store,
    layers: Layers,
    grid: LayoutGrid,
    chart: BarChart3,
    cloud: Cloud,
    globe: Globe,
    ai: Sparkles,
    play: Play,
    creator: Lightbulb,
    heart: Heart,
    plane: Plane,
    bag: ShoppingBag,
    umbrella: Umbrella,
    marketplace: Package,
    partners: Users,
    "credit-card": CreditCard,
    external: ExternalLink,
};

type IconProps = {
    name: string;
    size?: number;
    className?: string;
};

export default function Icon({ name, size = 18, className = "" }: IconProps) {
    const Comp = iconMap[name] ?? Cloud;


    return <Comp size={size} className={className} />;
}
