import React, {Component} from 'react'
import Popup from '../popup/index'

class Index extends Component{
  constructor(props){
    super(props)
    this.state = {
      showPopup: false
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render(){

    let {subject, cardTitle, faculty, timer, description, footerbg} = this.props

    return(
      <>
          <div className="card mr-4">
            <div className="top-hdr">
                <div className="live">
                  <img src="/images/butterfly.png" />
                  <span>Live</span>
                </div>
                <div className="subject-pill normal-txt">{subject}</div>
            </div>
            <div className="mid-content">
              <h2>{cardTitle}</h2>
              <div className="user-content">
                <div className="user-pic">
                  <span className="upload-icon">
                     <img src="/images/butterfly.png" width="20" />
                  </span>
                  <span className="img">
                    <img src="/images/user.svg" width="100%" />
                  </span>
                </div>
                <div className="user-right-content">
                  <div className="title-time">
                    <div className="title">{faculty}</div>
                    <div className="time">
                      <span className="start-time">starts in</span>
                      <span className="time-number large-txt">{timer}</span>
                    </div>
                  </div>
                  <div className="desc">
                    {description}
                    <a href="" className="know-more">Know more</a>
                  </div>
                </div>
              </div>            
            </div>
            <div id="footer" className={footerbg}>
              <a href="javascript:void(0)" onClick={this.togglePopup.bind(this)} className="enroll-btn">Enroll now</a>
            </div>
          </div>

          {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)} /> : null}

          
      </>
     
    )
  }
}
export default Index
