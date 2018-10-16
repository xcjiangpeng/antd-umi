export default {
    namespace: 'hello',
    state: {
        // test: 'hello',
    },
    reducers: {
        setState(state, {payload}) {
            return {
                ...state,
                ...payload,
            }
        }
    },
    effects: {
        *test ({ payload = {} }, { call, put }) {
            let test1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(121)
                    resolve()
                }, 2000)
            })
            // test1 = function () {
            //     setTimeout(() => {
            //         console.log(121)
            //     }, 2000)
            // }
            yield test1
            console.log(222)
            yield put({
                type: 'setState',
                payload: {
                    test: 'youu'
                }
            })
        },
    }
}