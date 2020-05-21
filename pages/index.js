import React, {Component} from 'react'
import Layout from '../layouts/default'
import Card from '../components/card'

class Index extends Component{

  constructor(props){
    super(props)

    this.state = {
                  cards: [
                    {
                      _id: 101, subject: "Math", 
                      cardTitle: "Relationship between zero...", 
                      faculty: "Math Faculty", 
                      timer: "00:44:41",
                      desc: "Introduction to polynomials, zeros of a polynomial, Relationship between zeroes...",
                      footerClass: 'green-bg'
                    },
                    {
                      _id: 102, subject: "Science", 
                      cardTitle: "Acids and Bases, Indicato", 
                      faculty: "Science Faculty", 
                      timer: "01:58:39",
                      desc: "Acids and bases, indicators...",
                      footerClass: 'yellow-bg'
                    }
                  ]
                };
  }

  render(){

    let {cards} = this.state
    console.log(cards);
    
    return(
      <Layout>
        <div className="container">
          <div className="row">

            {
              cards.map((card) => {
                return(
                  <Card 
                  subject={card.subject}  
                  cardTitle={card.cardTitle}
                  faculty={card.faculty}
                  timer={card.timer}
                  description={card.desc}
                  footerbg={card.footerClass}
                  />
                )
              })
            }

          </div>
        </div>
      </Layout>

      
    )
  }
}
export default Index
