import React from 'react'
import styles from './nav.module.scss'
import logo from '../../../assets/logo.png'
import discord from '../../../assets/discord.png'
import twitter from '../../../assets/twitter.png'
import medium from '../../../assets/medium.png'


function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.links}>
                <li>TEAM</li>
                <li>ROADMAP</li>
                <li>UTILITY</li>
            </ul>
            <img className={styles.logo} src={logo.src} alt="" />
            <ul className={styles.icons}>
                <li>
                    <img src={discord.src} alt="" />
                </li>
                <li>
                    <img src={medium.src} alt="" />
                </li>
                <li>
                    <img src={twitter.src} alt="" />
                </li>

            </ul>
        </nav>
    )
}

export default Nav