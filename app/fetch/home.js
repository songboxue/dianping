import 'whatwg-fetch'
import 'es6-promise'

export function getAd(){
	var adInfo = fetch('/api/homead',{
		credentials: 'include', 
		headers: { 'Accept': 'application/json, text/plain, */*' }
	})
	return adInfo;
}

export function getList(city,page){
	var ListInfo = fetch('/api/homelist/' + encodeURIComponent(city) + '/' + page,{
		credentials: 'include', 
		headers: { 'Accept': 'application/json, text/plain, */*' }
	})
	return ListInfo;
}