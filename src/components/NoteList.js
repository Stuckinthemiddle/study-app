import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';

export default class NoteList extends React.Component {
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
		
      <ListGroup>
        <ListGroupItem active tag="a" href="#">
					<div onClick={() => this.play("https://s3.amazonaws.com/study.tmp3")}>
          	<ListGroupItemHeading> RDS Multi-AZ deployment?</ListGroupItemHeading>
          	<ListGroupItemText>
            You may observe elevated latencies..
          </ListGroupItemText>
					</div>
					<div>
				<ReactAudioPlayer
					src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
					controls
				/>
			</div>
        </ListGroupItem>
        <ListGroupItem tag="a" href="#">
					<div onClick={() => this.play("https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3")}>
						<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
						<ListGroupItemText  >
						Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
						</ListGroupItemText>
					</div>
					<ReactAudioPlayer
					src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
					controls
					/>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
					<ReactAudioPlayer
					src="https://s3.amazonaws.com/study.tmksolutions-mp3/618f0e6c-6c48-433e-b23a-62ddb9b0fd01.mp3"
					controls
				/>
        </ListGroupItem>
      </ListGroup>
			
      </div>
    );
  }
}