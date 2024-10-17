import { Feedback } from "./feedback.model";
import { Specifications } from "./specifications.model";

export class Products{
    id: string;
    name: string;
    document: string;
    price: number;
    image: string;
    category: string;
    feedbacks: Feedback[];
    specifications: Specifications;
}