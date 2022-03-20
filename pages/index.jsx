import { useState, useEffect, useLayoutEffect } from 'react'
import styles from './index/home.module.scss'
import Nav from './index/components/Nav'
import dragon from './assets/dragon.png'
import egg from './assets/egg.png'
import fan from './assets/fan.png'
import heroLogo from './assets/Metamenko.png'
import leftHero from './assets/leftHero.png'
import crab from './assets/crab.png'
import smallEgg from './assets/smallEgg.png'
import cucumber from './assets/cucumber.png'
import greenfan from './assets/roadmap/Bamboo-3.png'
import sushi from './assets/roadmap/Cucumber-4.png'
import f12 from './assets/roadmap/Frame 12.png'
import warrior from './assets/roadmap/Frame 423.png'
import shrimp from './assets/roadmap/Shrimp-1.png'
import allSocialIcons from './assets/follow-us-icons/Follow-us-graphics.png'
import mediumIcon from './assets/follow-us-icons/Subtract.png'
import twitterIcon from './assets/follow-us-icons/Subtract-1.png'
import discordIcon from './assets/follow-us-icons/Twitter social icons - rounded square - white 1.png'
import discord from './assets/discord.png'
import twitter from './assets/twitter.png'
import medium from './assets/medium.png'
import followMobile from './assets/follow-us-icons/followus-mobile.png'
import wavebg from './assets/wavebg.png'

const openNewTab = (url) => {
  let a = document.createElement('a');
  a.target = '_blank';
  a.href = url;
  a.click();
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const r1_images = importAll(require.context('./assets/icons/r1', false, /\.(png|jpe?g|svg)$/));
const r2_images = importAll(require.context('./assets/icons/r2', false, /\.(png|jpe?g|svg)$/));

//team icons
const team = importAll(require.context('./assets/Team-Menkos', false, /\.(png|jpe?g|svg)$/));
//team data 
const teamdata = [['CORE', 'Product'], ['CORE', 'Design'], ['CORE', 'Community'], ['NFT ARTIST', '@fatima'], ['WEB DESIGN', '@afshin'],
['DEV Team', '@Raj'], ['GAME STUDIO', '@AliO'], ['ANIMATION STUDIO', 'Media Production'], ['CREATIVE WRITER', 'Storytelling'], ['CREATIVE WRITER', 'Storytelling']]

// Object.values(images)[0].default.src

const questions =
  [
    ['What is MetaMenko?', 'An NFT-based gaming project built on the Solana blockchain.'],
    ['What are Menkos?', 'These are individual NFTs that enable users to play the MetaMenko game and earn rewards as well as passive income.'],
    ['What utility do Menkos have for gamers?', 'At their core, Menko NFTs unlock the ability to compete in a strategy-based game, MetaMenko. Each Menko has unique characteristics that can either boost your power of attack or augment defensive moves. Some even allow you to unleash magical powers in battle, defeating your opponent or bringing to life a fellow downed Menko. Winning battles in the various worlds of MetaMenko unlocks legendary NFTs hidden in secret vaults, as well as additional rewards that can only be procured via gameplay.'],
    ['What utility do Menkos have for collectors?', 'Menko worlds are imagined by select artists under-represented in the NFT space. Artists skillfully bring to life each character, object, and attribute within their world; and give them purpose within the Menkoverse. Holding Menkos gives you exclusive access to each artist’s community and future projects. Collectors will also be entitled to airdrops of future MetaMenko projects in the pipeline. Additionally, MetaMenko is partnering with other NFT projects to enable whitelisting and early access to their alpha communities.'],
    ['What utility do Menkos have for hodlers?', 'Holding 3 Menkos in your wallet gives you access to the community DAO and allows you to shape the MetaMenko brand and direction for the entire Menkoverse. Along with voting on the MetaMenko roadmap, the DAO also formalizes passive income strategies. Whether it’s setting up a Solana Validator, using innovative yield farming strategies or vaults, or sweeping the MetaMenko floor - income generated from the project will be equitably distributed to diamond hand hodlers.'],
    ['What’s a mystery pack and how do I open it?', 'We are the first Solana-based NFT project to build this mystery pack feature that allows users to decide when to burn their packs and unlock their Menkos. Pack unlock will go live 1 week after mint. Anytime thereafter, users can return to the MetaMenko site, connect their wallet, and choose to tear open their pack. The revealed Menkos will then be automatically found in your wallet.'],
    ['What does the Menkoverse future hodl?', 'The Menkoverse is constantly expanding, and we’re just getting started! At the core of our vision is building a robust brand with the support of an engaged community to provide valuable utility to all who engage with MetaMenko.'],
    ['How is passive income generated?', "We're shortlisting multiple channels of passive income, and decision will ultimately be made by the MetaMenko DAO."],
    ['What is the MetaMenko DAO?', 'Hodlers of Menkos will be able to join the official DAO and give their voice to roadmap, collaborations, game expansion, and various passive income strategies.'],
    ['How do I get on the Whitelist?', 'Join Discord for details.'],
  ]

function Home() {
  const [windowWidth, setwindowWidth] = useState(1920);
  const [sliderRail, setsliderRail] = useState('1000px');

  useEffect(() => {
    setwindowWidth(document.querySelector('body').getBoundingClientRect().width);
    window.addEventListener('resize', function (e) {
      setwindowWidth(e.srcElement.innerWidth);
    }, true);
  }, [])


  useEffect(() => {
    let r1 = document.querySelector('#slider1');
    console.log(r1.getBoundingClientRect().width)
    r1.scrollTo({
      left: r1.getBoundingClientRect().width
    })
    setSlideAnimation();
  }, [windowWidth])

  const setSlideAnimation = () => {
    let w_width = document.querySelector('body').getBoundingClientRect().width;
    let s_width = document.querySelector('#slider1').getBoundingClientRect().width;
    console.log({ "window": w_width, "slider": s_width });
    let slide_width = (s_width - w_width) * (0.95);
    //setsliderRail(`-${slide_width}px`);

    let r1 = document.querySelector('#slider1');
    let r2 = document.querySelector('#slider2');

    try {
      let r1coinlist = r1.querySelectorAll(`.${styles.coin}`);
      r1coinlist.forEach((node) => {
        node.animate([
          // keyframes
          { transform: `translateX(-${slide_width}px)` },
          { transform: 'translateX(0)' }
        ], {
          // timing options
          duration: 50000,
          iterations: Infinity,
          direction: 'alternate'
        });
      })

      let r2coinlist = r2.querySelectorAll(`.${styles.coin}`);
      r2coinlist.forEach((node) => {
        node.animate([
          // keyframes
          { transform: 'translateX(0)' },
          { transform: `translateX(-${slide_width}px)` }
        ], {
          // timing options
          duration: 50000,
          iterations: Infinity,
          direction: 'alternate',
        });
      })
    }
    catch (er) {
      console.log(er);
    }



  }

  return (
    <>
      <div className={styles.page}>
        <img src={wavebg.src} alt="" className={styles.wave_bg} />
        <section className={styles.sec1}>
          <Nav></Nav>

          <img src={dragon.src} alt="" className={styles.float_dragon} />
          <img src={egg.src} alt="" className={styles.float_egg} />
          <img src={fan.src} alt="" className={styles.float_fan} />
          <img src={heroLogo.src} alt="" className={styles.float_heroLogo} />
          <div className={styles.subTitle}>
            <h3>Tear open a mystery pack</h3>
            <h3>AND enter the Menkoverse</h3>
            <p>A reimagined centuries-old game, MetaMenko combines strategy and chance to battle against Shadow Lords and free entrapped Menko spirits. Win battles to unlock secret vaults holding hidden, rare NFTs and other valuable treasures.</p>
            <button>JOIN THE WHITELIST</button>
          </div>
        </section>

        <section className={styles.sec2}>
          <div className={styles.statRow}>
            <div className={styles.stat}>
              <p>PROJECT SIZE</p>
              <h1>7,000</h1>
              <h4>MYSTERY PACKS</h4>
            </div>
            <div className={styles.stat}>
              <p>MINT PRICE</p>
              <h1>TBD</h1>
              <h4>ON SOLANA</h4>
            </div>
            <div className={styles.stat}>
              <p>MINT DATE</p>
              <h1>TBD</h1>
              <h4>IN Q2 2022</h4>
            </div>
          </div>

          <div className={styles.nftSlider}>

            <div id={"slider1"} className={styles.nftCoinRow1}>
              {
                [...Object.values(r1_images), ...Object.values(r1_images), ...Object.values(r1_images)].map((ele, i) => {
                  let last = ''
                  if ((i + 1) == Object.values(r1_images).length) {
                    last = styles.last_r1;
                    console.log(i)
                  }
                  else {
                    last = ''
                  }
                  return (
                    <div key={'r' + i} className={styles.coin} id={last}>
                      <img src={ele.default.src} alt="" />
                    </div>
                  )
                })
              }
            </div>

            <div id={"slider2"} className={styles.nftCoinRow2}>
              {
                [...Object.values(r2_images), ...Object.values(r2_images), ...Object.values(r2_images)].map((ele, i) => {
                  return (
                    <div key={'r' + i} className={styles.coin}>
                      <img src={ele.default.src} alt="" />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>

        <section className={styles.sec3} >
          <img src={leftHero.src} alt="" className={styles.leftHero} />
          <div className={styles.sec3text}>
            <h1>WHAT IS METAMENKO?</h1>
            <p>MetaMenko is the first ever gaming metaverse built on the Solana blockchain with 7,000 unique mystery packs that can be burned to reveal Menko NFTs with in-game and real-world utility.</p>
            <h1 className={styles.heading2} >OUR MISSION STATEMENT</h1>
            <p>Spotlight worlds imagined by under-represented artists and bring these worlds to life in a competitive strategy-based game built on the Solana blockchain. We reward long term NFT holders via passive income, DAO community membership & voice, and additional utility.</p>
          </div>
        </section>
      </div>
      <section className={styles.sec4}>
        <div className={styles.titleCon} id='utility'>
          <p className={styles.subTitle}>NFT</p>
          <h1 className={styles.title}>UTILITY</h1>
        </div>

        <div className={styles.cardCon}>
          <div className={styles.card + ' ' + styles.blue}>
            <img src={crab.src} alt="" />
            <div className={styles.text}>
              <h1>GAMERS</h1>
              <div className={styles.underline}></div>

              <div className={styles.textBlock}>
                <p>Exclusive alpha access to strategy-based game, MetaMenko</p>
                <p>First ever deck-building blockchain game</p>
                <p>Unlock secret vaults holding legendary NFTs</p>
              </div>

            </div>
          </div>
          <div className={styles.card + ' ' + styles.green}>
            <img src={smallEgg.src} alt="" />
            <div className={styles.text}>
              <h1>COLLECTORS</h1>
              <div className={styles.underline}></div>
              {
                <div className={styles.textBlock}>
                  <p>Exclusive alpha access to strategy-based game, MetaMenko</p>
                  <p>First ever deck-building blockchain game</p>
                  <p>Unlock secret vaults holding legendary NFTs</p>
                </div>
              }
            </div>
          </div>
          <div className={styles.card + ' ' + styles.purple}>
            <img src={cucumber.src} alt="" />
            <div className={styles.text}>
              <h1>HODLERS</h1>
              <div className={styles.underline}></div>
              {
                <div className={styles.textBlock}>
                  <p>Exclusive alpha access to strategy-based game, MetaMenko</p>
                  <p>First ever deck-building blockchain game</p>
                  <p>Unlock secret vaults holding legendary NFTs</p>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sec5}>
        <img src={greenfan.src} alt="" className={styles.float_greenfan} />
        <img src={sushi.src} alt="" className={styles.float_sushi} />
        <img src={f12.src} alt="" className={styles.float_f12} />
        <img src={warrior.src} alt="" className={styles.float_warrior} />
        <img src={shrimp.src} alt="" className={styles.float_shrimp} />

        <div className={styles.titleCon}>
          <p className={styles.subTitle}>OUR</p>
          <h1 className={styles.title}>ROADMAP</h1>
        </div>

        <div id='roadmap' className={styles.roadmapContainer}>


          <div className={styles.roadmapLine}>
            <span className={styles.sec + ' ' + styles.topFade}>
              <img src="/roadmapAssets/t0line.png" alt="" />
            </span>
            <div className={styles.marker}>
              <img className={styles.glow} src={'/roadmapAssets/t0.png'} alt="" />
            </div>
            <span className={styles.sec + ' ' + styles.s1}></span>
            <div className={styles.marker}>
              <div className={styles.diamondMarker}></div>
            </div>
            <span className={styles.sec + ' ' + styles.s2}></span>
            <div className={styles.marker}>
              <div className={styles.diamondMarker}></div>
            </div>
            <span className={styles.sec + ' ' + styles.s3}></span>
            <div className={styles.marker}>
              <div className={styles.diamondMarker}></div>
            </div>
          </div>


          <div className={styles.roadmapCard + ' ' + styles.rm1}>
            <h1>01 INCEPTION</h1>

            <ul>
              <li>Artists conceptualize and design unique worlds for the Menkoverse</li>
              <li>Mystery Pack functionality build on Solana blockchain</li>
              <li>Alpha game design and MVP</li>
              <li>Menkoverse Guild</li>
            </ul>

          </div>
          <div className={styles.roadmapCard + ' ' + styles.rm2}>
            <h1>02 AWAKENING</h1>
            <ul>
              <li>Limited Mystery Pack Giveaways</li>
              <li>Whitelist Sale</li>
              <li>Public Sale</li>
              <li>Rarity List reveal</li>
              <li>Exclusive game access to Menko hodlers</li>
              <li>Character background stories reveal</li>
            </ul>
          </div>
          <div className={styles.roadmapCard + ' ' + styles.rm3}>
            <h1>03 EVOLUTION</h1>
            <ul>
              <li>MetaMenko DAO creation</li>
              <li>Passive income channel implementation</li>
              <li>Formation of Gaming Guild</li>
              <li>Game expansion</li>
            </ul>
          </div>
          <div className={styles.roadmapCard + ' ' + styles.rm4}>
            <h1>04 INTO THE MENKOVERSE</h1>
            <ul>
              <li>Menkoverse brand expansion</li>
              <li>Future worlds unlock</li>
              <li>Animated series created by our Emmy-nominated cinematics and animation team</li>
              <li>MetaMenko Community Expansion<br />...and beyond!</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.sec6}>
        <h1>FOLLOW US!</h1>
        {
          (windowWidth >= 750) ? <img className={styles.float_allIcons} src={allSocialIcons.src} alt="" /> : <img className={styles.float_allIcons} src={followMobile.src} alt="" />
        }

        <span className={styles.socialIcons}>
          <img src={mediumIcon.src} alt="" />
          <img src={twitterIcon.src} alt="" />
          <img src={discordIcon.src} alt="" />
        </span>
      </section>

      <section id={"team"} className={styles.sec7}>
        <div className={styles.titleCon}>
          <p className={styles.subTitle}>MEET THE</p>
          <h1 className={styles.title}>TEAM</h1>
        </div>

        <p className={styles.sec7Subtext}>
          Crypto OG team with decades of <br />
          experience designing games and software.
        </p>

        <div className={styles.teamrow}>
          {
            Object.values(team).map((ele, i) => {
              return (
                <span key={"team" + i} name={ele.default.src}
                  style={getGridName(i, windowWidth)}
                >
                  <img src={ele.default.src} alt="" />
                  <h1
                    style={(teamdata[i][0].length < 12) ? { marginBottom: "13px" } : {}}
                  >{teamdata[i][0]}</h1>
                  <p>{teamdata[i][1]}</p>
                </span>
              )
            })
          }

        </div>
      </section>

      <section className={styles.sec8}>
        <h1 className={styles.title}>FAQ</h1>
        <div className={styles.questions}>
          <div className={styles.c1}>
            {
              questions.slice(0, 5).map((data, i) => {
                return (
                  <Qn data={data} i={i} key={'q' + i} />
                )
              })
            }
          </div>
          <div className={styles.c2}>
            {
              questions.slice(5).map((data, i) => {
                return (
                  <Qn data={data} i={i} key={'q' + i} />
                )
              })
            }
          </div>


        </div>
      </section>

      <section className={styles.footer}>
        <img onClick={() => {
          window.location.href = './'
        }} src={heroLogo.src} alt="" />
        <p>ENTER THE MENKOVERSE</p>
        <ul className={styles.iconsFooter}>
          <li>
            <img onClick={() => {
              openNewTab('https://metamenko.medium.com/');
            }} src={medium.src} alt="" />
          </li>

          <li>
            <img onClick={() => {
              openNewTab('https://discord.gg/WSRacjHc/');
            }}
              src={discord.src} alt="" />
          </li>

          <li>
            <img onClick={() => {
              openNewTab('https://twitter.com/metamenko/');
            }}
              src={twitter.src} alt="" />
          </li>

        </ul>
      </section>
    </>
  )
}

function Qn({ data, i }) {
  const [expand, setexpand] = useState(false);
  let arrowPos = (!expand) ? "" : styles.rotate;
  return (
    <div key={'qn' + i} className={styles.qn} onClick={() => { setexpand(!expand) }}>
      <span className={styles.arrow + ' ' + arrowPos}></span>
      <h1>{data[0]}</h1>
      {(expand) && <p>{data[1]}</p>}
    </div>
  )
}

const getGridName = (i, windowWidth, title) => {
  if (windowWidth <= 1260 && windowWidth > 750) {
    if (i == 8) {
      return { gridArea: 'l' }
    }
    if (i == 9) {
      return { gridArea: 'm' }
    }
    else {
      return {}
    }
  }
  return {}
}

export default Home