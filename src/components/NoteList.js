import React from 'react';
import { InputGroup, InputGroupAddon,  ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText, Spinner, Button, ButtonGroup , Input} from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';

export default class NoteList extends React.Component {
	constructor(props) {
		super(props);
		this.URL = "https://xz9ki8lesa.execute-api.us-east-1.amazonaws.com/prod?postId=*";
		// Don't call this.setState() here!
		this.state = { 
			allNotes: [],
			notes:[],
			isLoaded: false,
			filterText:''
		}
		this.fetchNotes = this.fetchNotes.bind(this);
	}
	
	componentDidMount() {
		const url = "https://xz9ki8lesa.execute-api.us-east-1.amazonaws.com/prod?postId=*";
		fetch(url)
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					notes: json,
					allNotes: json
				});
			})
	}

	fetchNotes() {
		console.log('entered fetch');
		
	}

	filterTextChanged(event) {
		console.log('filter text changed');
		this.setState({filterText: event.target.value });
		console.log(this.state.filterText);
	}

	clearFilter() {
		console.log('clearfilter');
		this.setState({
			filterText:'',
			notes: this.state.allNotes		
		});

	}
	
	applyFilter(event) {
		console.log('apply filter entered');
		const filteredNotes = this.state.allNotes
			.filter( note => {
				return note.text.substring(0, 80).toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
			});
		console.log(this.state.filterText);
		console.log('filtered notes' + filteredNotes.length);
		this.setState({notes: filteredNotes});
	}

  render() {
		let {isLoaded, notes} = this.state;

			if (this.state.isLoaded ) { return (
			<div>
				<div>
				<InputGroup>
        	<InputGroupAddon addonType="prepend">Filter</InputGroupAddon>
					<Input   placeholder="" value={this.state.filterText} onChange={evt => this.filterTextChanged(evt)} />
      	</InputGroup>
			 
					<Button color="primary" onClick={() => this.applyFilter()}>Apply</Button>{' '}
					<Button color="secondary" onClick={() => this.clearFilter()}>Clear</Button>{' '}
					{'   '}{this.state.notes.length} Cards
				</div>
				<div> 
						<ListGroup>
							{notes.map( note => (
								<ListGroupItem  key={note.id}>
										<ListGroupItemHeading tag="a" href="#" > {note.voice}</ListGroupItemHeading>
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
				</div>
				); 
			}
			else { return   (
				<div>  
        	<Spinner color="primary" />
					Data Loading...
				</div>
				)
			}
  }
}