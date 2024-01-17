import React from 'react';
import '../../styles/App.css';
import Schedule from "../../assets/schedule.png";

class DataMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="projectBody">
                <h2>Datamatch</h2>

                <p>
                    At the start of 2021, I joined Datamatch, an organization at Harvard that provides an annual matchmaking service on Valentine's Day.
                    In 2021, Datamatch connected over 40,000 students from colleges all over the U.S. and even around the world!
                    As a web developer on the team, my specific task was to create a scheduling component that allows users to select their available time preferences in order to coordinate an optimal time to set up a potential date.
                    Here below is a picture of the frontend of the component I built using React JS on the frontend and connecting the scheduling data from our database in Google Firebase on the backend.
                </p>

                <p>
                    Rejoining the organization again in 2022 for our annual service launch on Valentine's Day, I refactored much of the codebase on the backend and worked on creating emoji reactions in our chat function on the frontend.
                    In 2022, we connected over 50,000 college students from around the world!
                </p>

                <br/><br/>

                <img src={Schedule} style={{height: "50%", width: "50%"}}></img>
            </div>
            
        );
    }
}

export default DataMatch;