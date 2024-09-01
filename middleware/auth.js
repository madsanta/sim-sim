export default async function ({ $axios, redirect }) {
    const host = window.location.origin
    const path = window.location.pathname
    const uniqStaffToken = '97abecdbffd7342643eb8baaad107967'

    const params = new URL(window.location.toString()).searchParams
    const paramsAccessToken = params.get('access_token')
    const paramsRefreshToken = params.get('refresh_token')

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
            const res = await $axios.get('https://az-most.ru/api/auth/session', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            })

            if (res.status === 200) {
                localStorage.setItem('accessToken', accessToken)
            } else if (res.status === 401) {
                const refresh = await $axios.post('https://sso.az-most.ru/api/token/refresh/',
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
