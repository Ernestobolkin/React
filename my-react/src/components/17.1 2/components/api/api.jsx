import axios from 'axios';

const mokeApi = axios.create({ baseURL: "https://61c2f79b9cfb8f0017a3e80b.mockapi.io/", });

export class MoackApi {
    static getUsersData = async () => {
        const data = await mokeApi.get("UsersData")
        return data
    };

    static deleteItem = async (id) => {
        await mokeApi.delete('UsersData/' + id)
    }

    static editItem = async (id) => {
        await mokeApi.delete('UsersData/' + id)
    }
}

