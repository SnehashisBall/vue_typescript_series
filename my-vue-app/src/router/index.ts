import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoAppView from '@/views/TodoAppView.vue'
import UsersView  from '@/views/UsersView.vue'
import Todo from '@/views/Todo.vue'

const routes=[
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
  {
    path:'/todoApp',
    name:'TodoApp',
    component:TodoAppView,
    // users will be rendered inside Todos View 
    children:[
      {
      path:'/users',
      component:UsersView,
      children:[
        {
          path:'/:userId',
          component:Todo
        }

      ]
    }
      

    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
