import React, { Component } from 'react';
import service from '../api/service';
import { Link} from "react-router-dom";

class MostPopular extends Component {
    state = {
        movies: []
    }

    getMostPopular = async () => {
        let res = await service.getMostPopular();
        console.log('FUNCION GETMOSTPOPULAR APPJS', res.data);
        this.setState({ movies: res })
        console.log('ARRAY MOVIES?', this.state)
    }

    componentDidMount = () => {
        this.getMostPopular();
    }

    render() {
        console.log('THIISSSSSTATEEEEEEEEid', this.state.movies)
        return (
            <div className ="container">
                <h1>MOST POPULAR PAGE</h1>
                {this.state.movies.map((eachMovie) => {
                    return (
                        <div key={eachMovie._id}>
                            <h3>{eachMovie.language}</h3>
                            <h4>{eachMovie.director_name}</h4>
                            <h4>{eachMovie.movie_title}</h4>
                            <img src={eachMovie.poster} />
                            <Link to={`/details/${eachMovie._id}`}><button className="boton azul">More Details</button></Link>
                            <Link to={`/upload/${eachMovie._id}`}><button className="boton azul">Upload the movie</button></Link>
                        </div>
                    );
                })}

            </div>
        );
    }
}

export default MostPopular;