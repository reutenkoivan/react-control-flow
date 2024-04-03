import { TruthyValue } from '../types';
import { FC, ReactNode } from '../../node_modules/react';

export type ShowProps<T> = {
    when: T;
    fallback?: ReactNode | ReactNode[];
    children: FC<TruthyValue<T>> | ReactNode | ReactNode[];
};
export declare const Show: <T>({ children, fallback, when }: ShowProps<T>) => ReactNode | ReactNode[];
