import React from 'react';
import ReactDOM from 'react-dom';
import * as fetchInstaData from './fetchInstaData.jsx'
import style from './style.css'

// ClientID 145480c63e944a37b50bc0df19b18f52
// Authorization URL https://www.instagram.com/oauth/authorize/?client_id=145480c63e944a37b50bc0df19b18f52&redirect_uri=https://github.com/Mar0/SelfBaroque&response_type=token

const ACCESS_TOKEN = '3226651263.145480c.312c86bb039a4fb583a93a2dbfc645dd'
const REDIRECT_URI = 'https://github.com/Mar0/SelfBaroque'

//https://api.instagram.com/v1/users/self/?access_token=3226651263.145480c.312c86bb039a4fb583a93a2dbfc645dd
//'http://www.flickr.com/services/feeds/photos_public.gne?format=json'


class SelfBaroque extends React.Component {

    constructor() {
        super();
        this.state = {userName: new String("Loading")}
    }

    componentDidMount() {
        fetchInstaData.getUserInfo(ACCESS_TOKEN)
            .then(response => {return response.json()})
            .catch(ex => {console.log(ex)})
            .then(json => {
                console.log(json)
                this.setState({
                    userName: json.data.username
                })
            })
    }

    render() {
        return (<h1 className={style.header}>{this.state.userName}</h1>)
    }

}

ReactDOM.render(
    <SelfBaroque />,
    document.getElementById('selfbaroque')
)

