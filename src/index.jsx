import React from 'react';
import ReactDOM from 'react-dom';
import * as fetchInstaData from './fetchInstaData.jsx'
import config from './config.json'
import style from './style.css'

// ClientID 145480c63e944a37b50bc0df19b18f52
// RedirectURI https://github.com/trinchi/SelfBaroque
// Authorization URL https://www.instagram.com/oauth/authorize/?client_id=145480c63e944a37b50bc0df19b18f52&redirect_uri=https://github.com/trinchi/SelfBaroque&response_type=token

const ACCESS_TOKEN = config.ACCESS_TOKEN

class SelfBaroque extends React.Component {

    constructor() {
        super();
        this.state = {
            full_name: new String(""),
            mediaGrid: [<div className={style.loader} key="0"></div>]
        }
    }

    componentDidMount() {

        fetchInstaData.getUserMedia(ACCESS_TOKEN, config.mediaCount)
            .then(response => {return response.json()})
            .then(json => {

                if( /^4.{2}/.test(json.meta.code) ) {

                    this.setState({
                        mediaGrid: [
                            <div className={style.error_outer} key="0">
                                <h2 className={style.error}>{json.meta.error_message}</h2><br/>
                                <h3 className={style.error}>{json.meta.error_type}</h3>
                            </div>
                        ]
                    })

                }
                else {

                    let resolution = config.resolution

                    let mediaGridLocal = json.data.map((media) =>
                        <li key={media.id} className={style.thumbnail_list}>
                            <div className={style.thumbnail_outer}>
                                <a href={media.link} target="_blank">
                                    <img className={style.thumbnail} src={media.images[resolution].url}/>
                                </a>
                            </div>
                        </li>
                    )

                    this.setState({
                        mediaGrid: (
                            <ul className={style.thumbnail_wrapper}>
                                {mediaGridLocal}
                            </ul>
                        )
                    })

                }

            })
            .catch(error => {
                this.setState({
                    mediaGrid: [
                        <div className={style.error_outer} key="0">
                            <h2 className={style.error}>Timeout</h2><br/>
                            <h3 className={style.error}>Unable to receive Instagram data</h3>
                        </div>
                    ]
                })
            })

    }

    render() {

        return (
            <div>
                {this.state.mediaGrid}
            </div>
        );

    }

}

ReactDOM.render(
    <SelfBaroque />,
    document.getElementById('selfbaroque')
)

