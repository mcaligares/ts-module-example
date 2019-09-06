import { Address } from './address';
export declare class User {
    id: number;
    name: string;
    email?: string | undefined;
    address?: Address | undefined;
    constructor(id: number, name: string, email?: string | undefined, address?: Address | undefined);
}
