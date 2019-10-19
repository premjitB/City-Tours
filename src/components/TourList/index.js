import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    console.log(id);
    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id != id);
    this.setState({
      tours: sortedTours
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourList">
        {tours.map(item => (
          <Tour key={item.id} tour={item} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    );
  }
}
