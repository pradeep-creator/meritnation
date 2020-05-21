import React, {Component, Children} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
// import '../public/static/scss/styles.scss'


class Index extends Component{
  render(){
    return(
      <div className="page-wrapper">
          <Header />
            {this.props.children}
          <Footer />
      </div>
    )
  }
}

export default Index