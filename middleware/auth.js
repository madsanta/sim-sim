export default async function ({ store, $axios, redirect, $config }) {
    const host = window.location.origin
    const path = window.location.pathname
    const uniqStaffToken = '9ce7d8135916f3d4dcc638c7b8279419'

    const params = new URL(window.location.toString()).searchParams
    const paramsAccessToken = params.get('access_token')
    const paramsRefreshToken = params.get('refresh')

    if (paramsAccessToken === uniqStaffToken) {
        if (path !== '/') {
            return redirect(`${host}/?access_token=${uniqStaffToken}`)
        }

        return
    }

    if (paramsAccessToken) {
        if (paramsAccessToken !== uniqStaffToken) {
            localStorage.setItem('accessToken', paramsAccessToken)
        }
    }
    if (paramsRefreshToken) {
        localStorage.setItem('refreshToken', paramsRefreshToken)
    }

    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!!accessToken && accessToken !== 'null') {
        try {
            const res = await $axios.get(`${$config.baseApiUrl}/api/auth/session`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            })

            if (res.status === 200) {
                localStorage.setItem('accessToken', accessToken)
                store.commit('setBearer', accessToken)
            } else if (res.status === 401) {
                const refresh = await $axios.post(`${$config.baseApiSSOUrl}/api/token/refresh/`,
                    {
                        refresh: refreshToken || ''
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })

                if (refresh.status === 200) {
                    localStorage.setItem('accessToken', refresh.data?.access_token)
                    localStorage.setItem('refreshToken', refresh.data?.refresh_token)
                    store.commit('setBearer', refresh.data?.access_token)
                } else if (!path.includes('login')) {
                    redirect(`${host}/login`)
                }
            }
        } catch (e) {
            // eslint-disable-next-line
            console.log(e)

            if (!path.includes('login')) {
                redirect(`${host}/login`)
            }
        }
    } else if (!path.includes('login')) {
        redirect(`${host}/login`)
    }
}
