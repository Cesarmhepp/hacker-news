import './Rectangle.css'

const Rectangle = ({ setAll, all }) => {

    const onClickAll = () => {
        setAll(true)
    }

    const onClickFavs = () => {
        setAll(false)
    }
    return (
        <>
            <button className={all === true ? "btn-button-true" : "btn-button-false"} onClick={onClickAll}>
                All
            </button>
            <button className={all === false ? "btn-button-true" : "btn-button-false"} onClick={onClickFavs}>
                My Favs
            </button>
        </>

    )
}

export default Rectangle