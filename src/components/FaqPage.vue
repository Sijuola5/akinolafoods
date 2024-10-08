<template>
    <div class="container45">
      <h2>Frequently Asked Questions</h2>
      <div class="accordion">
        <div 
          v-for="(item, index) in accordionItems" 
          :key="index" 
          class="accordion-item"
        >
          <button @click="toggleAccordion(index)" :aria-expanded="item.expanded.toString()">
            <span class="accordion-title">{{ item.title }}</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content" v-if="item.expanded">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        accordionItems: [
          {
            title: 'What type of food do you sell?',
            content: 'We offer a variety of snacks, local dishes, pastries, etc. Our menu includes popular items like jollof rice, puff-puff, akara, small chops, etc., all prepared fresh daily.',
            expanded: false,
          },
          {
            title: 'Do you offer delivery services?',
            content: 'Yes, we provide delivery services within the area or city. You can place your order through our phone line, WhatsApp, or social media, and we’ll deliver right to your doorstep for a small fee.',
            expanded: false,
          },
          {
            title: 'How hygienic are your meals?',
            content: 'Hygiene is a top priority for us. Our kitchen adheres to strict sanitation standards, and all our ingredients are fresh and properly handled to ensure the highest quality and safety.',
            expanded: false,
          },
          {
            title: 'Do you cater for events?',
            content: 'Yes, we offer catering services for events like birthdays, weddings, corporate events, and more. Our menu can be customized to fit your event size and preferences.',
            expanded: false,
          },
          {
            title: 'What makes your food different from other vendors?',
            content: 'Our food stands out because of our unique recipes, fresh ingredients, and attention to detail. We focus on quality, flavor, and presentation to give our customers a memorable dining experience every time.',
            expanded: false,
          },
          {
            title: 'What are your operating hours?',
            content: 'We are open from [mention opening hours], Monday to Saturday. For special orders or events, we can accommodate earlier or later times upon request.',
            expanded: false,
          },
          {
            title: 'Do you offer discounts or promotions?',
            content: 'Yes, we have occasional promotions and discounts, especially for bulk orders or loyal customers. Keep an eye on our social media pages for the latest offers.',
            expanded: false,
          },
          {
            title: 'What makes your food different from other vendors?',
            content: 'Our food stands out because of our unique recipes, fresh ingredients, and attention to detail. We focus on quality, flavor, and presentation to give our customers a memorable dining experience every time.',
            expanded: false,
          },
          {
            title: 'Do you accept mobile payments?',
            content: 'Yes, we accept payments via bank transfers, USSD, and mobile payment platforms like Opay and Paga, making transactions easy and convenient for our customers.',
            expanded: false,
          },
          {
            title: 'Can I schedule an order in advance?',
            content: 'Absolutely! You can schedule your orders in advance, especially for events or large gatherings. Just let us know the time and date youd like your food ready.',
            expanded: false,
          },
        ],
      };
    },
    methods: {
      toggleAccordion(index) {
        this.accordionItems[index].expanded = !this.accordionItems[index].expanded;
        // Collapse others
        this.accordionItems.forEach((item, i) => {
          if (i !== index) {
            item.expanded = false;
          }
        });
      },
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css?family=Hind:300,400&display=swap");
  
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: "Hind", sans-serif;
    background: #fff;
    color: #4d5974;
    display: flex;
    min-height: 100vh;
  }
  
  .container45 {
    margin: 0 auto;
    padding: 4rem;
    width: 48rem;
  }
  
  .accordion .accordion-content p {
  text-align: left;
}
  
  .accordion .accordion-item {
    border-bottom: 1px solid #e5e5e5;
  }
  
  .accordion .accordion-item button[aria-expanded="true"] {
    border-bottom: 1px solid #03b5d2;
    text-align: left;
  }
  
  .accordion button {
    position: relative;
    display: block;
    text-align: left;
    width: 100%;
    padding: 1em 0;
    color: #7288a2;
    font-size: 1.15rem;
    font-weight: 400;
    border: none;
    background: none;
    outline: none;
  }
  
  .accordion button:hover,
  .accordion button:focus {
    cursor: pointer;
    color: #03b5d2;
  }
  
  .accordion button .accordion-title {
    padding: 1em 1.5em 1em 0;
  }
  
  .accordion button .icon {
    display: inline-block;
    position: absolute;
    top: 18px;
    right: 0;
    width: 22px;
    height: 22px;
    border: 1px solid;
    border-radius: 22px;
  }
  
  .accordion button .icon::before {
    display: block;
    position: absolute;
    content: "";
    top: 9px;
    left: 5px;
    width: 10px;
    height: 2px;
    background: currentColor;
  }
  
  .accordion button .icon::after {
    display: block;
    position: absolute;
    content: "";
    top: 5px;
    left: 9px;
    width: 2px;
    height: 10px;
    background: currentColor;
  }
  
  .accordion button[aria-expanded="true"] .icon::after {
    width: 0;
  }
  
  .accordion .accordion-content p {
    font-size: 1rem;
    font-weight: 300;
    margin: 2em 0;
  }
  </style>
  