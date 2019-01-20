import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';

export default class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.URL = "https://xz9ki8lesa.execute-api.us-east-1.amazonaws.com/prod?postId=*";
		// Don't call this.setState() here!
		this.state = { 
			notes: [],
			isLoaded: false
		}
	}
	
	componentDidMount() {
		const url = "https://xz9ki8lesa.execute-api.us-east-1.amazonaws.com/prod?postId=*";
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					notes: json
				});
			})

	
	}
  render() {
		let {isLoaded, notes} = this.state;

			if (this.state.isLoaded ) { return (
				<div> 
						<ListGroup>
							{notes.map( note => (
								<ListGroupItem  key={note.id}>
										<ListGroupItemHeading> {note.voice}</ListGroupItemHeading>
										<ListGroupItemText>
											{note.text.substring(0,80).concat('...')}
										</ListGroupItemText>
										<ReactAudioPlayer
											src={note.url}
											controls
										/>
								</ListGroupItem>
								)
							)};
						</ListGroup>
				</div>
				); 
			}
			else { return   (
				<div>Data Loading...</div>
				)
			}
  }
}