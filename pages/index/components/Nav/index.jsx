import React, { useState, useEffect } from 'react'
import styles from './nav.module.scss'
import logo from '../../../assets/logo.png'
import discord from '../../../assets/discord.png'
import twitter from '../../../assets/twitter.png'
import medium from '../../../assets/medium.png'
import menu from '../../../assets/menu.png'

function Nav() {
    const [windowWidth, setwindowWidth] = useState(1000);

    useEffect(() => {
        window.addEventListener('resize', function (e) {
            setwindowWidth(e.srcElement.innerWidth);
        }, true);
    }, [])
    return (
        <nav className={styles.nav}>
            <img src={menu.src} alt="" className={styles.menu} />
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