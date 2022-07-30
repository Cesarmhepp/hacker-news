export const getTech = async (tech,page) => {
    return fetch('https://hn.algolia.com/api/v1/search_by_date?query=' + tech + '&page='+page, {
        method: 'GET'
    }).then(data => data.json())
}