import React from 'react';
import abhik5 from '../images/abhik5.jpg';
import abhik2 from '../images/abhik2.jpg';
import abhik3 from '../images/abhik3.jpg';
import abhik4 from '../images/abhik4.jpg';
import icon1 from '../icons/icon1.png';
import icon2 from '../icons/icon2.png';
import icon3 from '../icons/icon3.png';
import icon4 from '../icons/icon4.png';
import icon5 from '../icons/icon5.png';
import icon6 from '../icons/icon6.png';
import icon7 from '../icons/icon7.png';
import icon8 from '../icons/icon8.png';
import icon9 from '../icons/icon9.png';
import icon10 from '../icons/icon10.png';
import icon11 from '../icons/icon11.png';
import icon12 from '../icons/icon12.png';
import {Row,Col,Container,Card,Button,Carousel,Image} from 'react-bootstrap';


const Intro = () => {

    return (
        <div>
            <div className="d-flex">
            <img src={abhik5} alt="Abhik1" id="introImages"></img>
            <img src={abhik2} alt="Abhik2" id="introImages"></img>
            <img src={abhik3} alt="Abhik3" id="introImages"></img>
            <img src={abhik4} alt="Abhik4" id="introImages"></img>
            <h1 className="display-1 text-center d-block d-sm-none d-lg-none d-xl-none" style={{position:'absolute',marginTop:'11%',fontSize:'3rem',marginLeft:'15%'}}>Hi, I am Abhik</h1>
            <h1 className="display-1 text-center d-none d-sm-block d-lg-none d-xl-none" style={{position:'absolute',marginTop:'11%',fontSize:'6.3rem',marginLeft:'15%'}}>Hi, I am Abhik</h1>
            <h1 className="display-1 text-center d-none d-sm-none d-lg-block d-xl-none" style={{position:'absolute',marginTop:'11%',fontSize:'8.5rem',marginLeft:'15%'}}>Hi, I am Abhik</h1>
            <h1 className="display-1 text-center d-none d-sm-none d-lg-none d-xl-block" style={{position:'absolute',marginTop:'14%',fontSize:'10rem',marginLeft:'15%'}}>Hi, I am Abhik</h1>
            </div>
            <div style={{width:'100%',height:'1.2%',backgroundColor:'#FFF',position:'absolute',marginTop:'-0.5rem',}}><br>
            </br></div>
            <Container className="text-center">
              <Row>
                <Col>
                <h2><b>Software Engineer</b></h2>
                <Card id="cardFlip">
  <Card.Header as="h5" style={{backgroundColor:'#005a8a',color:'#FFF'}}><b>Career</b></Card.Header>
  <Card.Body>
    <Card.Title>Front-End | Back-End | Games</Card.Title>
    <Card.Text>
    Developing a peak interest in computers since the age of 10. I have always enjoyed working with software and
    technology. I am always learning and debugging! The execution is always near perfection but I don't mind some flaws from
    time to time, it helps me become a better programmer.
    </Card.Text>
    <Button variant="primary">Work History</Button>
    <hr></hr>
    <div className="small py-2"><b>My go-to for development</b></div>
    <div class="d-block-inline">
    <Carousel controls={false}>
  <Carousel.Item interval={2000}>
  <div className="d-block">
    <Image src={icon1} width="20%"></Image>
    <Image src={icon2} width="15%"></Image>
    <Image src={icon3} width="34%"></Image>
    <Image src={icon4} width="30%"></Image>
  </div>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <Image className="mx-2" src={icon5} width="20%"></Image>
    <Image className="mx-2" src={icon6} width="20%"></Image>
    <Image className="mx-2" src={icon7} width="20%"></Image>
    <Image className="mx-2"src={icon8} width="20%"></Image>
  </Carousel.Item>
</Carousel>
    </div>
  </Card.Body>
</Card>
                </Col>
                <Col><h2><b>Illustrator</b></h2>
                <Card id="cardFlip">
  <Card.Header as="h5" style={{backgroundColor:'#005a8a',color:'#FFF'}}><b>Passion</b></Card.Header>
  <Card.Body>
    <Card.Title>Artwork | Logos | Cartoons</Card.Title>
    <Card.Text>
    I remember watching alot of animated series in my younger years, from the golden era of Cartoon
    Network to the late Nickelodeon shows. Having grown up with such warm entertainment, out of interest, 
    I like making my own characters, animating them, creating posters and love artwork. Over time, I have 
    some rough edges or weird fill shapes and such, but it's what brands my passion!
    </Card.Text>
    <Button variant="primary">Gallery</Button>
  </Card.Body>
  <hr></hr>
  <div className="d-block-inline">
    <Image className="mx-2" src={icon9} width="20%"></Image>
    <Image className="mx-2" src={icon10} width="20%"></Image>
    <Image className="mx-2" src={icon11} width="20%"></Image>
    <Image className="mx-2" src={icon12} width="20%"></Image>
    </div>
</Card>
                </Col>
                <Col><h2><b>Musician</b></h2>
                <Card id="cardFlip">
  <Card.Header as="h5" style={{backgroundColor:'#005a8a',color:'#FFF'}}><b>Hobby</b></Card.Header>
  <Card.Body>
    <Card.Title>Rock | Alternative | Indie</Card.Title>
    <Card.Text>

    </Card.Text>
    <Button variant="primary">Stream</Button>
  </Card.Body>
</Card>
                </Col>
              </Row>
            </Container>
        </div>
    )
}

export default Intro
