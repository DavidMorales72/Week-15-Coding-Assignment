const housesENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesAPI {
    get = async () => {
        try {
            const response = await fetch(housesENDPOINT);
            const data = await response.json();
            return data;
        } catch(e){
            console.log('API call is not working', e);
        }
    }

    put = async (house) => {
        try{
            const response = await fetch(`${housesENDPOINT}/${house._id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(house)
        });
        return await response.json();
        } catch(e){
            console.log('API updating is not working', e)
        }
    }
}
export const housesAPI = new HousesAPI();