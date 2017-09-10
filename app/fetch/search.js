import 'whatwg-fetch'
import 'es6-promise'

export function getSearchData(page, cityName, category, keyword) {
    const keywordStr = keyword ? '/' + keyword : ''
    const result = fetch('/api/search/' + page + '/' + cityName + '/' + category + keywordStr,{
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*'
		}
    })
    return result
}