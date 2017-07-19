import React from 'react';
import ReactDOM from 'react-dom';
import * as fetchInstaData from './fetchInstaData.jsx'
import config from './config.json'
import style from './style.css'

// ClientID 145480c63e944a37b50bc0df19b18f52
// RedirectURI https://github.com/Mar0/SelfBaroque
// Authorization URL https://www.instagram.com/oauth/authorize/?client_id=145480c63e944a37b50bc0df19b18f52&redirect_uri=https://github.com/Mar0/SelfBaroque&response_type=token

const ACCESS_TOKEN = config.ACCESS_TOKEN

class SelfBaroque extends React.Component {

    constructor() {
        super();
        this.state = {
            full_name:  new String("Loading"),
            mediaArray: []
        }
    }

    componentDidMount() {

        fetchInstaData.getUserInfo(ACCESS_TOKEN)
            .then(response => {return response.json()})
            .catch(ex => {console.log(ex)})
            .then(json => {
                this.setState({
                    full_name:  json.data.full_name
                })
            })

        fetchInstaData.getUserMedia(ACCESS_TOKEN)
            .then(response => {return response.json()})
            .catch(ex => {console.log(ex)})
            .then(json => {

                json.data.length = 16

                console.log(json.data)

                var mediaArrayLocal = json.data.map((media) =>
                    <li key={media.id} className={style.thumbnail_list}>
                        <div className={style.thumbnail_outer}>
                            <a href={media.link} target="_blank">
                                <img className={style.thumbnail}   src={media.images.standard_resolution.url}/>
                            </a>
                        </div>
                    </li>
                )

                this.setState({
                    mediaArray: mediaArrayLocal
                })

            })

    }

    render() {

        return (
            <div id={style.main}>
                <ul className={style.thumbnail_wrapper}>
                    {this.state.mediaArray}
                </ul>
            </div>
        );

    }

}

ReactDOM.render(
    <SelfBaroque />,
    document.getElementById('selfbaroque')
)

