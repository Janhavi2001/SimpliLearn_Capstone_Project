import React, { Component } from 'react'
import MovieService from '../services/MovieService'
import NavbarUser from './NavbarUser';
import { Link } from 'react-router-dom';

export default class ListMovies extends Component {
    
  constructor(props){
    super(props)
    this.state={
        movies:[]
    }
  }
  componentDidMount(){
    MovieService.getMovies().then((res)=> {
      this.setState({movies: res.data});
    });
  }
  render() {
    return (
      <>
      <NavbarUser/>
      <div className="my-3 r">
        <h2 className="text-center">Movies List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Movie Name</th>
              <th>Movie Description</th>
              <th>Movie Language</th>
              <th>Movie Genere</th>
              <th>Movie Date And Time</th>
              <th>Movie Ticket Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.movies.map(
                movie=>
                <tr key={movie.id}>
                  <td>{movie.name}</td>
                  <td>{movie.description}</td>
                  <td>{movie.language}</td>
                  <td>{movie.genere}</td>
                  <td>{movie.date_time}</td>
                  <td>{movie.ticketprice}</td>
                  <td><Link to="/userdashboard/cart"><button type="submit" className="btn btn-dark">Add to Cart</button></Link></td>
                </tr>
              )
            }
          </tbody>
          </table>
        </div>
      </div>
      </>
    )
  }
}

