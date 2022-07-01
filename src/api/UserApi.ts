import { getConfig } from "../config/config";
import Fetcher from "../utils/Fetcher";

class UserApi {
    constructor() {
        let config = getConfig();
        Fetcher.BaseUrl = config.api;

        Fetcher.ErrorResponse = (error: string) => {
            return {
                Status: false,
                Error: error,
                ErrorCode: "",
            };
        }
    }

    public async GetUserList(): Promise<User[]> {
        let api = "users";
        let params = "";

        let result = await Fetcher.Get<User[]>(api)
            .then(res => {
                if (res) {
                    return res;
                }
                return [];
            });
        return result;
    }



}

export interface User {
    id: string;
    name: string;
    year: number;
}

export default new UserApi();