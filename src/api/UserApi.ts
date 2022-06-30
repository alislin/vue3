/*
 * @Author: Lin Ya
 * @Date: 2022-06-08 10:53:42
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-30 14:41:20
 * @Description: Api 示例
 */
import Fetcher from "../utils/Fetcher";

class UserApi {
    constructor() {
        Fetcher.BaseUrl = "/";
        Fetcher.Hearders = {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        Fetcher.ErrorResponse = (error: string) => {
            return {
                Status: false,
                Error: error,
                ErrorCode: "",
            };
        }
    }

    public async GetUserList(): Promise<User[]> {
        let url = "studentgroup/schools";
        let params = "";

        let result = await Fetcher.Get<User[]>(url)
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