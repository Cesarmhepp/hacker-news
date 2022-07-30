import LikeImg from './assets/iconmonstr-favorite-2.png'
import LikeImg2 from './assets/iconmonstr-favorite-3.png'

const LikeBox = ({ like, likeList, setLikeList, story, setLike }) => {

    const handleLike = () => {
        if (story) {
            if (like === false) {
                story.like = true;
                setLikeList([...likeList, story])
                setLike(true)
            } else if (like === true) {
                setLikeList(likeList.filter((item) => item.parent_id !== story.parent_id && item.story_id !== story.story_id))
                setLike(false)
            }

        }
    }

    return (
        <input type="image" src={like === true ? LikeImg2 : LikeImg}
            onClick={handleLike}
        />
    )

}

export default LikeBox