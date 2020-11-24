import React, { FC } from 'react'
import clsx from 'clsx'
import { CardProps } from './interface'

export const Card: FC<CardProps> = props => {
    const { className, children, ...others } = props

    return (
        <div className={clsx('rounded-2xl bg-white shadow', className)} {...others} >
            {children}
        </div>
    )
}