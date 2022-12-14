import './News.css'
import LikeBox from './LikeBox/Likebox.jsx'
import ClockImg from './assets/iconmonstr-time-2.png'
import { useEffect, useState } from 'react'
const News = ({ story, likeList, setLikeList, all }) => {


    const { author, story_title, story_url, created_at } = story
    const [like, setLike] = useState(false);

    useEffect(() => {
        const val = likeList.find((item) =>
            item.created_at_i === story.created_at_i
            && item.story_title === story.story_title
            && item.created_at === story.created_at
            && item.story_id === story.story_id
            && item.parent_id === story.parent_id
        )
        if (val) {
            if (like === false) {
                setLike(true)
            }

        }
    }, [likeList, story, like])

    return (
        <>
            {
                author && story_title && story_url && created_at ?
                    all === true ?
                        <div className="Rectangle-news">
                            <a href={story_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                <div className='main'>
                                    <div>
                                        <img src={ClockImg} alt="" className="iconmonstr-time-2" />
                                        <span className="-hours-ago-by-autho">
                                            {created_at} ago by {author}
                                        </span>
                                    </div>
                                    <p className="Event-driven-state-m">
                                        {story_title}
                                    </p>
                                </div>
                            </a>
                            <div className='Rectangle-like menu'>
                                <LikeBox like={like} likeList={likeList} setLikeList={setLikeList} story={story} setLike={setLike} />
                            </div>
                        </div> : like === true ?
                            <div className="Rectangle-news">
                                <a href={story_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                    <div className='main'>
                                        <div>
                                            <img src={ClockImg} alt="" className="iconmonstr-time-2" />
                                            <span className="-hours-ago-by-autho">
                                                {created_at} ago by {author}
                                            </span>
                                        </div>
                                        <p className="Event-driven-state-m">
                                            {story_title}
                                        </p>
                                    </div>
                                </a>
                                <div className='Rectangle-like menu'>
                                    <LikeBox like={like} likeList={likeList} setLikeList={setLikeList} story={story} setLike={setLike} />
                                </div>
                            </div> : null
                    : null
            }
        </>

    )
}



export default News