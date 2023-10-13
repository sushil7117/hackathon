import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly questionText: string;
    readonly solution: string;
    readonly level: number;
    readonly jumbledText: string;
    readonly mappedRow: [number[]];
    readonly created_at: Date;
}