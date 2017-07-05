import fetchJsonp from 'fetch-jsonp';

export function callInstaFetch(uri) {
    return fetchJsonp(uri + '&callback=?', {})
        .then(function(response) {
            return response.json()
        }).catch(function(ex) {
            return 'parsing error' + ex
        })
}

export function getUserInfo(ACCESS_TOKEN) {
    return this.callInstaFetch('https://api.instagram.com/v1/users/self/?access_token=' + ACCESS_TOKEN)
}

export function getUserMedia(ACCESS_TOKEN) {
    return this.callInstaFetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + ACCESS_TOKEN)
}

export function getMediaInfo(ACCESS_TOKEN, mediaId) {
    return this.callInstaFetch('https://api.instagram.com/v1/media/' + mediaId + '?access_token=' + ACCESS_TOKEN)
}

