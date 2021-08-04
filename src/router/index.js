import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import C1 from '../components/C1.vue'
import C2 from '../components/C2.vue'
import C3 from '../components/C3.vue'
import Counter from '../components/Counter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'C1',
        component: C1,
        children: [
          {
            path: '/',
            name: 'C2',
            component: C2,
            children: [
              {
                path: '/',
                name: 'C3',
                component: C3,
                children: [
                  {
                    path: '/',
                    name: 'Counter',
                    component: Counter,
                  },
                ]
              },
            ]
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
