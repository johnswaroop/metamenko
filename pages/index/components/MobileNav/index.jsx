import React from 'react'
import styles from './mobileNav.module.scss'
import closeBtn from '../../../assets/closebtn.png'
import medium from '../../../assets/follow-us-icons/Subtract.png'
import twitter from '../../../assets/follow-us-icons/Subtract-1.png'
import discord from '../../../assets/follow-us-icons/Twitter social icons - rounded square - white 1.png'

const openNewTab = (url) => {
  let a = document.createElement('a');
  a.target = '_blank';
  a.href = url;
  a.click();
}

function MobileNav({ setmobileNavOpen }) {
  return (
    <div className={styles.MobileNav}>
      <img onClick={() => {
        setmobileNavOpen((t) => { return !t })
      }} className={styles.closeBtn} src={closeBtn.src} alt="" />
      <div className={styles.fitScreen}>
        <ul>
          <li><a onClick={() => { setmobileNavOpen((t) => { return !t }) }} href='#'>HOME</a></li>
          <li><a onClick={() => { setmobileNavOpen((t) => { return !t }) }} href='#team'>TEAM</a></li>
          <li><a onClick={() => { setmobileNavOpen((t) => { return !t }) }} href='#roadmap'>ROADMAP</a></li>
          <li className={styles.last} ><a onClick={() => { setmobileNavOpen((t) => { return !t }) }} href='#utility'>UTILITY</a></li>
        </ul>
        <div className={styles.socialIcon} >
          <img onClick={() => {
            openNewTab('https://twitter.com/metamenko/');
          }}
            src={discord.src} alt="" />
          <img onClick={() => {
            openNewTab('https://discord.gg/metamenko');
          }} src={twitter.src} alt="" />
          <img onClick={() => {
            openNewTab('https://metamenko.medium.com/');
          }} src={medium.src} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MobileNav