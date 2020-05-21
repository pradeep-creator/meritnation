import React, {Component} from 'react'
import Head from 'next/head'
import Link from 'next/link'


class Index extends Component{
  render(){
    return(
      <>
        <Head>          
            <title>Meritnation</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

             {/* <!-- Google Fonts --> */}
             <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,100;1,300&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="static/scss/app.css" />
            <link rel="stylesheet" href="static/scss/responsive.css" />
        </Head>
        
        <header className="main-header" style={{'background': '#00a478', 'padding':10}}>
            <div className="logo">
                <img src="/images/logo.png" width="100" alt="meritnation" />
            </div>
        </header>
        <style jsx>{`
        body{
          padding:0px;
          margin:0px;
        }
      `}</style>
      </>
    )
  }
}

export default Index