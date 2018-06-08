/* import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
 */

import Vue from 'vue'
import Router from 'vue-router'
import ChatRoom from '@/components/ChatRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatRoom',
      component: ChatRoom
    }
  ]
})
