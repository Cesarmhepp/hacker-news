import './Home.css'
import BasicPagination from '../components/Pagination/BasicPagination.jsx'
import Header from "../components/Header/Header.jsx"
import Rectangle from "../components/Rectangle/Rectangle.jsx"
import DropDownMenu from "../components/DropDownMenu/DropDownMenu.jsx"
import News from '../components/News/News.jsx'
import * as service from '../services/Services.js'
import { useState, useEffect } from 'react'
import Angular from '../components/DropDownMenu/img/image-138.png'

const Home = () => {

    const [tech, setTech] = useState({ value: 'angular', label: 'Angular', image: Angular })
    const [news, setNews] = useState([])
    const [pages, setPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [all, setAll] = useState(true)
    const [likeList, setLikeList] = useState([])

    useEffect(() => {
        let mounted = true;
        service.getTech(tech.value, currentPage).then(item => {
            if (mounted) {
                setNews(item.hits)
                setPages(item.nbPages)
            }
        })
    }, [tech, currentPage, pages, likeList])

    useEffect(() => {
        const items = JSON.parse(window.localStorage.getItem('likelist'))
        if (items) {
            if (items.length > 0) {
                setLikeList(items)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('likelist', JSON.stringify(likeList));
    }, [likeList])

    return (
        <>
            <Header />
            <div className='container'>
                <div className='flex-container'>
                    <Rectangle setAll={setAll} all={all} />
                </div>
                <div>
                    <div className='flex-container-dropdown'>
                        <DropDownMenu setTech={setTech} tech={tech} />
                    </div>
                    <div className="scroll">
                        <div className='flex-container-list'>
                            {
                                news.map((story, i) => {
                                    return <News key={i} story={story} likeList={likeList} setLikeList={setLikeList} all={all} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='flex-container-footer'>
                    <BasicPagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                </div>
            </div>

        </>
    )
}

export default Home