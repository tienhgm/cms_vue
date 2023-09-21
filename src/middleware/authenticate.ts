import { indexStore } from '@/stores/index'

// Router chỉ cho phép vào khi đã đăng nhập
// @ts-ignore
const ifAuthenticated = (to, from, next) => {
  const store = indexStore()
  if (store.isLogin === true) {
    next()
  } else {
    next({
      name: 'login'
    })
  }
}
// @ts-ignore
const ifNotAuthenticated = (to, from, next) => {
  const store = indexStore()
  if (store.isLogin === false) {
    next()
  } else {
    next({
      name: ''
    })
  }
}
export { ifAuthenticated, ifNotAuthenticated }
