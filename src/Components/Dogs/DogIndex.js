import React, {Component} from 'react';
url = "https://images.dog.ceo/breeds/";
newURL = document.createElement(Image);

export default class DogIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstImage: [`${url}cotondetulear/100_2013.jpg`]
        };
    };

    render(){
        return(
            <div>
                <firstImage />
                <button onClick={document.removeChild(firstImage).newURL}>Random Pup!</button>
            </div>
        )
    }
}