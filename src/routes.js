// Import Router class from vue-router page installed
import { createWebHistory, createRouter } from "vue-router";

import Index from './components/IndexPage.vue'
import Contactus from "./components/ContactusPage.vue";
import Aboutus from "./components/AboutusPage.vue";
import Pathners from "./components/PathnersPage.vue";
import Spicy from "./components/SpicykitchenPage.vue";
import Okele from "./components/OkelehubPage.vue";
import CakeSnack from "./components/CakesnackPage.vue"
import Login from "./components/LoginPage.vue";
import Payment from "./components/PaymentPage.vue";
import Confermation from "./components/confermationPage.vue";
import Branches from "./components/BranchesPage.vue";
import Faq from "./components/FaqPage.vue";
import Tracking from "./components/TrackingPage.vue";
import Terms from "./components/TermsPage.vue";

const routes = [
  { name: 'Contactus',
    path: '/contactus',
    component: Contactus
  },
  { name: 'Aboutus',
    path: '/aboutus',
    component: Aboutus
  },
  { name: 'Pathners',
    path: '/pathners',
    component: Pathners
  },
  { name: 'Spicy',
    path: '/spicy',
    component: Spicy
  },
  { name: 'Okele',
    path: '/okele',
    component: Okele
  },
  { name: 'CakeSnack',
    path: '/cakesnack',
    component: CakeSnack
  },
  { name: 'Login',
    path: '/login',
    component: Login
  },
  { name: 'Payment',
    path: '/payment',
    component: Payment
  },
  { name: 'Confermation',
    path: '/confermation',
    component: Confermation 
  },
  { name: 'Branches',
    path: '/Branches',
    component: Branches 
  },
  { name: 'Index',
    path: '/',
    component: Index
  },
  { name: 'Faq',
    path: '/Faq',
    component: Faq
  },
  { name: 'Tracking',
    path: '/Tracking',
    component: Tracking
  },
  { name: 'Terms',
    path: '/Terms',
    component: Terms
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;