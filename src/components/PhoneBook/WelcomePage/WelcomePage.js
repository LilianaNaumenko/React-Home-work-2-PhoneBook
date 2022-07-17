import React from 'react'
import s from '../WelcomePage/WelcomePage.module.css'

function WelcomePage() {
    return (
        <div>
            <h1 className={s.mainTitle}>
                Hello, here you can add your contacts online
            </h1>
            <h2 className={s.text}>Developed by Naumenko Liliana</h2>
            <p className={s.text}>You can contact with me here:</p>
            <ul className={s.list}>
                <li className={s.item}>
                    <a
                        className={s.link}
                        href="https://t.me/kiev_yanochka"
                        target="_blank"
                    >
                        Telegram
                    </a>
                </li>
                <li className={s.item}>
                    <a
                        className={s.link}
                        href="https://www.instagram.com/kiev__lyanochka/"
                        target="_blank"
                    >
                        Instagram
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default WelcomePage
