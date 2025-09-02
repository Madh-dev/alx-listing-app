
export interface CardProps {
    title: string;
    address: string;
    image: string;
    rating: number;
    price: number;
    tag: string[];
}

export interface ButtonProps {
    label: string;
    onClick: ()=> void;
}
