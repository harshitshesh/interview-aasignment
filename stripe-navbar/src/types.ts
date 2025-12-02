
export type MenuItem = {
    label: string;
    icon: string;
    url: string;
    external?: boolean;
};

export type Section = {
    title: string;
    items: MenuItem[];
};
