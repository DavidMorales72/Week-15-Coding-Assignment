import { housesAPI } from '../REST/housesAPI';
import React from "react";
import { House } from './house';;


export class HouseList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount(){
        this.fetchHouses();
    };

    fetchHouses =  async () => {
        const houses = await housesAPI.get();
        this.setState({ houses });
    };

    // updateHouse = async (updatedHouse) => {
    //     await housesAPI.put(updatedHouse);
    //     this.fetchHouses();
    // };

    updateHouse = async (updatedHouse) => {
        await housesAPI.put(updatedHouse);
        this.fetchHouses();
    }

    render() {
        return(
            <div className="houses-list">
                {this.state.houses.map((house) => (
                    <House 
                    house = {house}
                    key = {house._id}
                    updatedHouse = {this.updateHouse}
                    />
                ))}
            </div>
        )
    };
}

    

                    