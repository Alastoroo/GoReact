let channels = [
  {name: 'Hardware Support'},
  {name: 'Software Support'}
];

// COPONNENT PARENT
class Channel extends React.Component{ // class = objet, Channel = nom objet, extends = herité de React.Component
  onClick(){
    console.log('I was clicked', this.props.name);
  }
  render(){ // render = rendre (un rendu)
    return (
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    )
  }
}


//COPONNENT ENFANT
class ChannelList extends React.Component{
  render(){&
    return (
      <ul>
        {this.props.channels.map( channel => {
          return (
            <Channel name={channel.name} />
          )
         }
       )}
      </ul>
    )
  }
}

//COPONNENT ENFANT
class ChannelForm extends React.Component{

  constructor(props){
    super(props);
    this.state ={};
  }

  onChange(e){
    this.setState({
      channelName: e.target.value
    });
  }

  onSubmit(e){
    let {channelName} = this.state;
    console.log(channelName);
    channels.push({
      name: channelName
    });
    this.setState({
      channelName: ''
    });
    this.props.addChannel(channelName);
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type='text' onChange={this.onChange.bind(this)} value={this.state.channelName}/>
      </form>
    )
  }
}
//COPONNENT ENFANT
class ChannelSection extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      channels : [
        {name: 'Hardware Support'},
        {name: 'Software Support'}
      ]
    };
  }

  addChannel(name){
    let {channels} = this.state;
    channels.push({name: name});
    this.setState({
      channels: channels
    });
  }

  render(){
    return(
      <div>
        <ChannelList channels={channels} />
        <ChannelForm addChannel={this.addChannel.bind(this)}/>
      </div>
    )
  }
}
// COMPONENT FIN
ReactDOM.render(<ChannelSection />, document.getElementById('app'));
