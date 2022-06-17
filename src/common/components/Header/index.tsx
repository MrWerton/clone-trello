import React from 'react'
import { useThemeBackground } from '../../context/themes'
import styles from './styles.module.scss'
export const Header = () => {
    const {changeThemeBg} = useThemeBackground()
  return (
    <div className={styles.container}>
lalal
        <button
        onClick={()=>changeThemeBg('dark')}
        >+</button>
        <button
        onClick={()=>changeThemeBg('white')}
        >-</button>
    </div>
  )
}
