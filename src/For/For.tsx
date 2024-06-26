import { Children, Fragment, type ReactNode } from 'react'
import type { OrNull } from '../types'
import { genericMemo } from '../utils/genericMemo'

export type ForProps<T> = {
	of: OrNull<T[] | readonly T[]>
	children: (item: T, index?: number) => ReactNode | ReactNode[]
	keyMapper?: (item: T, index?: number) => string | number
	loading?: boolean
	slots?: {
		loading?: ReactNode | ReactNode[]
    fallback?: ReactNode | ReactNode[]
		empty?: ReactNode | ReactNode[]
	}
}

const ForComponent = <T,>({ children, of, keyMapper, loading = false, slots = {} }: ForProps<T>): ReactNode | ReactNode[] => {
	if (loading && slots.loading) {
		return slots.loading
	}

	if (!of) {
		return slots.fallback ?? null
	}

	if (!of.length && slots.empty) {
		return slots.empty
	}

	return (
    Children.toArray(
      of.map((item, index) => {
        const key = keyMapper?.(item, index) ?? index

        return <Fragment key={key}>{children(item, index)}</Fragment>
      }),
    )
	)
}

export const For = genericMemo(ForComponent)
