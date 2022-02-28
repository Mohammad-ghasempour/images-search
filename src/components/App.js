import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {

    state = { images: [] }

    // onSearchSubmit(term){
    //     axios.get('https://api.unsplash.com/search/photos',{
    //         params: {query: term},
    //         headers: {
    //             Authorization: "Client-ID nNn3SSDzJIsEOs7qkDt9hi_bVZeoeVAEZxMkI7qOAUI"
    //         }
    //     }).then( response=>{
    //         console.log(response.data.results);
    //     }
    //     )
    // }

    onSearchSubmit = async term => {
        const result = await unsplash.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: result.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )

    }

}

export default App;