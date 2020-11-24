import React, { Component } from 'react';
import service from '../api/service'
import {withAuth} from '../lib/AuthProvider'
import Paginacion from './Paginacion';
// import { Link } from "react-router-dom";


class MostPopular extends Component {
    state = {
        movies: []
    }

    getAllMovies = async () => {
        let res = await service.getAllMovies();
        this.setState({ movies: res })
    }

    componentDidMount = () => {
        this.getAllMovies();
    }

    render() {
        console.log('PROPS ALLMOVIES???', this.props)
        return (
            <div className="container2">
                <h2>All Movies</h2>
                {this.state.movies.map((allMovie) => {
                    return (
                        <div key={allMovie._id} className="movie_card" id="bright" style={{backgroundImage: `url(${allMovie.fan_art})`, backgroundSize: `100%`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={allMovie.poster} />
                                    <h4>{allMovie.movie_title}</h4>
                                    <h4>{allMovie.title_year}, {allMovie.director_name}</h4>
                                    <span className="minutes">{allMovie.duration} min</span>
                                    <p className="type">{allMovie.genres}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">{allMovie.description}</p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        <li><a href={`/upload/${allMovie._id}`} className="material-icons">Edit Movie</a></li>
                                        <li><a href={`/details/${allMovie._id}`} >More Details</a></li>
                                        <li><a onClick={()=> this.addToFavourite(allMovie._id)} className="material-fav">Add to fav</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back bright_back"></div>
                        </div>
                    );
                })}
                <div>
                    <Paginacion 
                        // paginaAnterior= {this.props.paginaAnterior()}
                        // paginaSiguiente= {this.props.paginaSiguiente()}
                    />
                </div>
            </div>
        );
    }
}

export default MostPopular;


{/* <div key={allMovie._id}>
                            <h3>{allMovie.language}</h3>
                            <h4>{allMovie.director_name}</h4>
                            <h4>{allMovie.movie_title}</h4>
                            <img src={allMovie.poster} />
                            <Link to={`/details/${allMovie._id}`}><button>More Details</button></Link>
                        </div> */}