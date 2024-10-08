<template>
    <div class="containerp">
      <div class="tabs">
        <div 
          v-for="(tab, index) in tabs" 
          :key="index"
          @click="activeTab = index"
          :class="{ active: activeTab === index }"
          class="tab-label"
        >
          <i :class="tab.icon"></i> {{ tab.label }}
        </div>
      </div>
  
      <div class="tab-content" v-if="activeTab === 0">
        <p>At Akinola foods limited, we pride ourselves on offering fresh, locally sourced ingredients and authentic Nigerian recipes, all at affordable prices. Our meals are prepared with strict hygiene standards to ensure quality and safety. We offer a wide variety of dishes, from hearty local favorites to quick snacks, with prompt delivery services for your convenience. Whether you need catering for events or just a delicious meal at home, our friendly team is dedicated to providing excellent customer service and a taste of home in every bite.</p>
      </div>
      <div class="tab-content" v-if="activeTab === 1">
        <p>We deliver fresh, ready-to-eat meals directly to your doorstep. Your order will arrive well-packaged, and delivery is fast and reliable.</p>
      </div>
      <div class="tab-content" v-if="activeTab === 2">
        <p>Check out our special discounts available for bulk orders, first-time customers, and returning patrons. Stay tuned for seasonal offers!</p>
      </div>
      <div class="tab-content" v-if="activeTab === 3">
        <p>We offer a 2-hours return policy for any meals that do not meet your satisfaction. Terms and conditions apply.</p>
      </div>
    </div>
  </template>
  
  <script>
  import '@fortawesome/fontawesome-free/css/all.css';
  
  export default {
    data() {
      return {
        activeTab: 0, // Start with the first tab as active
        tabs: [
          { label: 'Features', icon: 'fa fa-star' },
          { label: 'Delivery Contents', icon: 'fa fa-cube' },
          { label: 'Discounts', icon: 'fa fa-tags' },
          { label: 'Returns', icon: 'fa fa-info-circle' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .containerp {
    max-width: 700px;
    margin: 100px auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    border-bottom: 2px solid #ddd;
  }
  
  .tab-label {
    font-size: 18px;
    cursor: pointer;
    padding: 10px 20px;
    position: relative;
    color: #555;
  }
  
  .tab-label.active {
    font-weight: bold;
    color: #4b8efc;
  }
  
  .tab-label:hover {
    color: #4b8efc;
  }
  
  .tab-label i {
    margin-right: 8px;
  }
  
  .tab-content {
    padding: 10px 0;
    font-size: 16px;
  }
  </style>
  