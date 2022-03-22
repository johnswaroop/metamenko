import React, { useState, useEffect } from 'react'
import styles from './nav.module.scss'
import logo from '../../../assets/logo.png'
import discord from '../../../assets/discord.png'
import twitter from '../../../assets/twitter.png'
import medium from '../../../assets/medium.png'
import menu from '../../../assets/menu.png'

const openNewTab = (url) => {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = url;
    a.click();
}

function Nav({setmobileNavOpen}) {
    const [windowWidth, setwindowWidth] = useState(1000);

    useEffect(() => {
        window.addEventListener('resize', function (e) {
            setwindowWidth(e.srcElement.innerWidth);
        }, true);
    }, [])
    return (
        <nav className={styles.nav}>
            <img onClick={()=>{
                setmobileNavOpen((t)=>{ return !t })
            }} src={menu.src} alt="" className={styles.menu} />
            <ul className={styles.links}>
                <a href='#team'><li>TEAM</li></a>
                <a href='#roadmap'><li>ROADMAP</li></a>
                <a href='#utility'><li>UTILITY</li></a>
            </ul>
            <img className={styles.logo} src={logo.src} alt="" />
            <ul className={styles.icons}>

                <li>
                    <img
                        onClick={() => {
                            openNewTab('https://metamenko.medium.com/');
                        }}
                        src={medium.src} alt="" />
                </li>
                <li>
                    <img
                        onClick={() => {
                            openNewTab('https://discord.gg/metamenko');
                        }}
                        src={discord.src} alt="" />
                </li>
                <li>
                    <img
                        onClick={() => {
                            openNewTab('https://twitter.com/metamenko/');
                        }}
                        src={twitter.src} alt="" />
                </li>

            </ul>
        </nav >
    )
}

export default Nav