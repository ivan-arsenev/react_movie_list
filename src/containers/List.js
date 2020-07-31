import React, { Component } from "react"
import Card from "../components/Card/Card"

class List extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const movies = await fetch("../../assets/data.json")
    const moviesJson = await movies.json()

    if (moviesJson) {
      this.setState({
        data: moviesJson,
        loading: false,
      })
    }
  }

  render() {
    const { data, loading } = this.state
    if (loading) {
      return <div>Loading ⌛</div>
    }
    return (
      <div className="row">
        {data.map((movie) => (
          <div className="col-sm-2" key={movie.id}>
            <Card key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    )
  }
}

export default List
