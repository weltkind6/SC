import React from 'react'
import classes from './Music.module.css'
import pvd from '../../img/PVD.png'
import faa from '../../mp3/Paul Van Dyk ft. Aruna with Mark Eteson - Let Go_(Audio-VK4.ru).mp3'
import pvd2 from '../../mp3/Paul Van Dyk let go feat rea - Позитивненько ))))_(Audio-VK4.ru).mp3'

const Music = () => {
    return (
        <div className={classes.music_block}>
            <div className={classes.music_wrapper}>
                <div><img src={pvd} alt="dj" className={classes.img}/></div>
                <div className={classes.song}>
                    <audio controls>
                        <source src={faa}/>
                    </audio>
                    <h5>Paul Van Dyk let go feat rea - Let go remix</h5>
                </div>
                <div className={classes.song}>
                    <audio controls>
                        <source src={pvd2}/>
                    </audio>
                    <h5>Paul Van Dyk - Let go original mix</h5>
                </div>
            </div>
        </div>
    )
}

export default Music