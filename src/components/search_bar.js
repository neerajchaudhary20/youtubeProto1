import React,{Component} from 'react';

//functional component
/**
const SearchBar = () => {
  return <input/>// generates call to React.createElement()
};**/

//class-based component, every classs must have a render function
class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state={term:''};

  }
  render(){
    return (
      <div className="search-bar">
      <input
        value={this.state.term}
       onChange = {(event) =>this.onInputChange(event.target.value)}/>
    </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar; // so that this component imported in other documents
