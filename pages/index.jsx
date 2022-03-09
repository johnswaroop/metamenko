import styles from './index/home.module.scss'
import Nav from './index/components/Nav'
import dragon from './../assets/dragon.png'
import egg from './../assets/egg.png'
import fan from './../assets/fan.png'
import heroLogo from './../assets/Metamenko.svg'
import leftHero from './../assets/leftHero.png'
import crab from './../assets/crab.png'
import smallEgg from './../assets/smallEgg.png'
import cucumber from './../assets/cucumber.png'
import roadmapline from './../assets/roadmapline.png'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const r1_images = importAll(require.context('./../assets/icons/r1', false, /\.(png|jpe?g|svg)$/));
const r2_images = importAll(require.context('./../assets/icons/r2', false, /\.(png|jpe?g|svg)$/));
// Object.values(images)[0].default.src
function Home() {
  return (
    <div className={styles.page}>

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
          <div className={styles.nftCoinRow1}>
            {
              Object.values(r1_images).map((ele, i) => {
                return (
                  <div key={'r' + i} className={styles.coin}>
                    <img src={ele.default.src} alt="" />
                  </div>
                )
              })
            }
          </div>

          <div className={styles.nftCoinRow2}>
            {
              Object.values(r2_images).map((ele, i) => {
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

      <section className={styles.sec3}>
        <img src={leftHero.src} alt="" className={styles.leftHero} />
        <div className={styles.sec3text}>
          <h1>WHAT IS METAMENKO?</h1>
          <p>MetaMenko is the first ever gaming metaverse built on the Solana blockchain with 7,000 unique mystery packs that can be burned to reveal Menko NFTs with in-game and real-world utility.</p>
          <h1 className={styles.heading2} >OUR MISSION STATEMENT</h1>
          <p>Spotlight worlds imagined by under-represented artists and bring these worlds to life in a competitive strategy-based game built on the Solana blockchain. We reward long term NFT holders via passive income, DAO community membership & voice, and additional utility.</p>
        </div>
      </section>

      <section className={styles.sec4}>
        <div className={styles.titleCon}>
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
        <div className={styles.titleCon}>
          <p className={styles.subTitle}>OUR</p>
          <h1 className={styles.title}>ROADMAP</h1>
        </div>
        <img src={roadmapline.src} alt="" className={styles.roadmapline} />
      </section>
    </div>
  )
}

export default Home