import axios from 'axios';


const getFoodData = async () => {
    try {
        const {data: {data}} = await axios.get()
    }
    catch(error) {
        console.log(error);
    }
};