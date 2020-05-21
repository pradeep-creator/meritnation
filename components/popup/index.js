import React, { Component } from 'react'

class Index extends Component{
    render(){
        return(
            <>
                <div className="popup">
                    <div className="popup_inner">
                        <button className="close-popup" onClick={this.props.closePopup}>
                            <img src="/images/close.svg" width="10" />
                        </button>
                        <img src="/images/success-icon.png" width="50" />
                        <h3 className="large-txt mb-0">You have been successfully enrolled</h3>
                        <p className="normal-txt">To get notified every time there is a class, install the Merination App</p>
                        <div className="badge-items mt-2">
                            <a href="">
                                <img src="/images/google-play-badge.svg" width="130" />
                            </a>
                            <a href="">
                                <img src="/images/app-store-badge.svg" width="130" />
                            </a>
                        </div>                        
                    </div>
                </div>
            </>
        )
    }
}
export default Index