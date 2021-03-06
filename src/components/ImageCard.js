import React from 'react';
class ImageCard extends React.Component {

    constructor(props){
        super(props)
        this.state= {span: 0};
        this.imageRef= React.createRef();
    }
    componentDidMount(){
        
        this.imageRef.current.addEventListener("load", this.setSpans);
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil( height/20 );
        this.setState({span})
        
    }

    render(){

        const {urls, alt_description} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.span}`}}>
            <img 
            ref={this.imageRef}
            src={urls.small}
            alt={alt_description}
             />
             </div>
            
        )
    }
}

export default ImageCard;