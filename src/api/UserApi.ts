/*
 * @Author: Lin Ya
 * @Date: 2022-06-08 10:53:42
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-29 21:41:42
 * @Description: Api 示例
 */
import Fetcher from "../util/Fetcher";

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
                return null;
            });
        return [];
    }


}

export interface User {
    id: string;
    name: string;
    year: number;
}

export default new UserApi();