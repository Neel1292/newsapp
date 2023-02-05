import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
   const [articles, setArticles] =  useState([])
   const [loading, setLoading] =  useState(true)
   const [page, setPage] =  useState(1)
   const [totalResults, setTotalResults] = useState(0)
   
   
   const capitalizeFirstLetter = (string) => {
       return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    
    
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${  page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
        let parseData = await data.json();
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults)
        setLoading(false)
        
    }
    
    useEffect(()=>{
        document.title = `NewsMonkey - ${ capitalizeFirstLetter(props.category)} `;
        updateNews();
        // eslint-disable-next-line
    },[])
    

    const fetchMoreData = async () => {
    setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        let data = await fetch(url)
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles)) 
        setTotalResults(parseData.totalResults)
        
    }

        return (
            <>
                <h1 className="text-center" style={{ margin: '40px 0px', marginTop: '90px' }}><strong>NewsMonkey - Top { capitalizeFirstLetter(props.category)} Headlines</strong></h1>
                {  loading}
                <InfiniteScroll
                    dataLength={  articles.length}
                    next={ fetchMoreData}
                    hasMore={articles.length !==  totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row">
                            {!loading       &&  articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
                                        newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                            {/* <div className="container d-flex justify-content-between md-4 my-4" >
                             <button disabled={  page <= 1} type="button" className="btn btn-dark" onClick={ handlePrevsClick}>&larr; Previous</button>
                             <button disabled={  page + 1 > Math.ceil(  totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={ handleNextClick}>Next &rarr;</button>
                         </div> */}
                        </div>
                    </div>
                </InfiniteScroll>

            </>
        )
}

News.defautlProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
}

export default News
