import fetchJsonp from 'fetch-jsonp';

export function callInstaFetch(uri) {
    fetchJsonp(uri + '&callback=?', {})
        .then(response => response.json())
        .then(response => {console.log(response)})
}

export function getUserInfo(ACCESS_TOKEN) {
    this.callInstaFetch('https://api.instagram.com/v1/users/self/?access_token=' + ACCESS_TOKEN)
}

export function getUserMedia(ACCESS_TOKEN) {
    this.callInstaFetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + ACCESS_TOKEN)
}

export function getMediaInfo(ACCESS_TOKEN, mediaId) {
    this.callInstaFetch('https://api.instagram.com/v1/media/' + mediaId + '?access_token=' + ACCESS_TOKEN)
}

