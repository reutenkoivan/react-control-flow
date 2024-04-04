import { OrNull } from '../types';
import { ReactNode } from '../../node_modules/react';

export type ForProps<T> = {
    of: OrNull<T[] | readonly T[]>;
    children: (item: T, index?: number) => ReactNode | ReactNode[];
    keyMapper?: (item: T, index?: number) => string | number;
    loading?: boolean;
    slots?: {
        loading?: ReactNode | ReactNode[];
        fallback?: ReactNode | ReactNode[];
        empty?: ReactNode | ReactNode[];
    };
};
export declare const For: <T>({ children, of, keyMapper, loading, slots }: ForProps<T>) => ReactNode | ReactNode[];
