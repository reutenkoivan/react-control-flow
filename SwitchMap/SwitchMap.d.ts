import { ReactNode } from '../../node_modules/react';

export type SwitchMapProps<T extends string> = {
    case: T;
    default?: ReactNode | ReactNode[];
    children: Partial<Record<T, ReactNode | ReactNode[]>>;
};
export declare const SwitchMap: <T extends string>({ case: caseProp, default: defaultProp, children, }: SwitchMapProps<T>) => ReactNode | ReactNode[];
