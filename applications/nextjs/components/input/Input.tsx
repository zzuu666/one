import React, { FC } from 'react'
import clsx from 'clsx'
import type { InputProps } from './interface'

export const Input: FC<InputProps> = (props) => {
    const { className, ...others } = props
    const classNames = clsx(
        'w-full p-2 border-2 border-gray-200 focus:ring-2 focus:ring-yellow-300 focus:border-yellow-100 rounded-md placeholder-gray-300 outline-none',
        className
    )
  return (
    <input
      className={classNames}
      {...others}
    />
  )
}
