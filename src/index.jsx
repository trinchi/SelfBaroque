import React from 'react';
import ReactDOM from 'react-dom';
import * as fetchInstaData from './fetchInstaData.jsx'

// ClientID 145480c63e944a37b50bc0df19b18f52
// Authorization URL https://www.instagram.com/oauth/authorize/?client_id=145480c63e944a37b50bc0df19b18f52&redirect_uri=https://github.com/Mar0/SelfBaroque&response_type=token

const ACCESS_TOKEN = '3226651263.145480c.312c86bb039a4fb583a93a2dbfc645dd'
const REDIRECT_URI = 'https://github.com/Mar0/SelfBaroque'

//https://api.instagram.com/v1/users/self/?access_token=3226651263.145480c.312c86bb039a4fb583a93a2dbfc645dd
//'http://www.flickr.com/services/feeds/photos_public.gne?format=json'



class SelfBaroque extends React.Component {
    constructor() {
        super();
        this.state = {userName: new String("sfdfd")}
    }

    componentDidMount() {
        this.setState({
            userName: fetchInstaData.getUserInfo(ACCESS_TOKEN)
        })

        console.log(this.state.userName)
    }

    render() {
        return (<h1>{this.state.userName.toString()}</h1>)
    }

}

ReactDOM.render(
    <SelfBaroque />,
    document.getElementById('selfbaroque')
)

