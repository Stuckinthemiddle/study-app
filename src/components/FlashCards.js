import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';

export default class FlashCards extends React.Component {
	constructor(props) {
		super(props);
		// Don't call this.setState() here!
		this.state = { counter: 0 };
		this.play = this.play.bind(this);
	}
	play = (noteUrl) => {
		console.log('play the note' + noteUrl)
	}
  render() {
    return (
	  <div>  
        <div>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>  
            </CardBody>
            <ReactAudioPlayer
              src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
              controls
              />
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>  
            </CardBody>
            <ReactAudioPlayer
              src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
              controls
              />
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>  
            </CardBody>
            <ReactAudioPlayer
              src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
              controls
              />
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>  
            </CardBody>
            <ReactAudioPlayer
              src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
              controls
              />
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>  
            </CardBody>
            <ReactAudioPlayer
              src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
              controls
              />
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>  
            </CardBody>
            <ReactAudioPlayer
              src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
              controls
              />
          </Card>
        </div>
        <div>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>  
            </CardBody>
            <ReactAudioPlayer
              src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
              controls
              />
          </Card>
        </div>
        
      </div>
    );
  }
}