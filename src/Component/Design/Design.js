import React, { Component } from "react";
import { Button, Card,CardDeck , Image} from 'react-bootstrap';
import axios from "axios";
import "./Design.css"
import { CgArrowLongRight } from "react-icons/cg";

class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: [],
        };
    }

    componentDidMount(){
        this.getCardDeta();
    }

    getCardDeta = async () => {
        let headers = {
            "Content-Type": "application/json",
        };
        let url = "https://dev-util.edyst.com/challenge/pokemons/random";
        await axios.get(url, {
          headers: headers
        }).then(response => {
          this.setState({ 
            cardData: response.data,
          });
          console.log(response.data)
        });
    }

    render(){
        const { cardData } = this.state;
        return(
            <div className="main-div">
                <CardDeck>
                    {
                        cardData.map(ele => {
                            return(
                                <Card className="main-card" style={{backgroundColor: ele.cardColors.bg}}>
                                    <Card.Header className="c-header">
                                        <span className="tag-name" style={{backgroundColor: ele.cardColors.tagbg}}>{ele.tag}</span>
                                        <CgArrowLongRight className="r-arrow" />
                                        </Card.Header>
                                    {/* <Card.Img variant="top" src={ele.sprite}  roundedCircle/> */}
                                    <div className="c-body-div" style={{backgroundColor: ele.cardColors.textbg}}>
                                        <Card.Body className="c-body">
                                            <Card.Title className="c-title" style={{fontWeight:'bold'}}>{ele.name}</Card.Title>
                                            <Card.Text>
                                                {ele.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    
                                    <Image className="img-css" src={ele.sprite} style={{backgroundColor: ele.cardColors.imgbg}} roundedCircle />
                                </Card>
                            )
                        })
                    }
                </CardDeck>
            </div>
        )
    }
}

export default Design;