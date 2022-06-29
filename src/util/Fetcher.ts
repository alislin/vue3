class Fetcher {

    /** 错误数据返回对象 */
    public ErrorResponse: (error: string) => {};
    public Hearders: HeadersInit = {};
    public BaseUrl: string = "";
    // public DefaultRequestInit: RequestInit = {};
    /** 加载状态 */
    public Loading: boolean = false;

    public Get<T>(url: string, requestInit?: RequestInit) {
        return this.Fetch<T>(url, requestInit);
    }

    public Post<T>(url: string, data: any, requestInit?: RequestInit) {
        if (!requestInit) {
            requestInit = {
                method: "POST",
                headers: this.Hearders,
                body: JSON.stringify(data),
            };
        }
        return this.Fetch<T>(url, requestInit);
    }

    public Put<T>(url: string, data: any, requestInit?: RequestInit) {
        if (!requestInit) {
            requestInit = {
                method: "PUT",
                headers: this.Hearders,
                body: JSON.stringify(data),
            };
        }
        return this.Fetch<T>(url, requestInit);
    }

    public Delete<T>(url: string, data: any, requestInit?: RequestInit) {
        if (!requestInit) {
            requestInit = {
                method: "DELETE",
                headers: this.Hearders,
                body: JSON.stringify(data),
            };
        }
        return this.Fetch<T>(url, requestInit);
    }

    public Patch<T>(url: string, data: any, requestInit?: RequestInit) {
        if (!requestInit) {
            requestInit = {
                method: "PATCH",
                headers: this.Hearders,
                body: JSON.stringify(data),
            };
        }
        return this.Fetch<T>(url, requestInit);
    }
    /**
     * 获取网络数据
     * @param url 地址
     * @param requestInit 请求参数
     * @returns 返回值
     */
    public Fetch<T>(url: string, requestInit?: RequestInit): Promise<T> {
        this.Loading = true;
        let resp = fetch(this.BaseUrl + url, requestInit)
            .then(response => {
                return this.handleResponse<T>(response);
                // if (response.status == 200) {
                //     return response.json();
                // }
                // else {
                //     return <T>this.ErrorResponse(response.status + " " + response.statusText);
                // }
            })
            .catch(error => {
                return <T>this.ErrorResponse(error.message);
            });
        this.Loading = false;
        return resp;
    }
    private handleResponse<T>(response: Response): Promise<T> {
        let contentType = response.headers.get('content-type');
        if (response.ok) {
            if (contentType && contentType.indexOf('application/json') !== -1) {
                return response.json();
            }
        }
        throw new Error(response.status + " " + response.statusText);
    }
}

export default new Fetcher();