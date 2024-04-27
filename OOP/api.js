const BASE_URL = 'https://dummyjson.com'


class useApi {
    static token

    static async request(endpoint, method = 'GET', data = {}) {
        const url = new URL(`${BASE_URL}/${endpoint}`)
        const headers = {
            // authorization: `Bareer `,
            'content-type': 'application/json'
        }

        const body = method !== 'GET' ? JSON.stringify(data) : undefined

        const res = await fetch(url, {method, body, headers})

        if (!res.ok) {
            console.error('API Error: ', res.statusText, res.status)
            const {error} = await res.json()
            throw Array.isArray(error) ? error   : [error]
        }

        return await res.json()
    }


    static async getUsers() {
        let res = await this.request(`users`);
        return res['users']
    }

    static async login(data) {
        let res = await this.request(`auth/login`, 'POST', data)
        this.token = res.token
        return res
    }
}

// useApi.getUsers().then(res => {
//     console.log(res)
// })

const loginData = {
    username: 'kminchelle',
    password: '0lelplR',
    expiresInMins: 30,
}

useApi.login(loginData).then(res => {
    console.log(res)
})