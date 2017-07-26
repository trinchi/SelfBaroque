import fetchJsonp from 'fetch-jsonp';

export function callInstaFetch(uri) {
    return fetchJsonp(uri + '&callback=?', {timeout: 10000})
}

export function getUserInfo(ACCESS_TOKEN) {
    return this.callInstaFetch('https://api.instagram.com/v1/users/self/?access_token=' + ACCESS_TOKEN)
}

export function getUserMedia(ACCESS_TOKEN, mediaCount) {
    return this.callInstaFetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + ACCESS_TOKEN
        + '&count=' + mediaCount)
}

export function getMediaInfo(ACCESS_TOKEN, mediaId) {
    return this.callInstaFetch('https://api.instagram.com/v1/media/' + mediaId + '?access_token=' + ACCESS_TOKEN)
}

