import React from 'react'
import './importIcons.js'
import './icon.scss'
import classnames from './helpers/classnames'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    const { className, ...restProps } = props
    return (
        <svg className={classnames('r-icon', className)} {...restProps}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}
export default Icon