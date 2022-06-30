/*
 * @Author: Lin Ya
 * @Date: 2022-06-30 15:02:30
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-30 16:36:16
 * @Description: file content
 */
const configMock = {
    api: "http://localhost:53000/",
}

const configDev = {
    api: "",
}

const configPrd = {
    api: "",
}

export function getConfig() {
    let env = process.env.NODE_ENV || "production";
    env = env.toLocaleLowerCase();
    if (env == "mock") {
        return configMock;
    }
    if(env == "development"){
        return configDev;
    }
    return configPrd;
}
