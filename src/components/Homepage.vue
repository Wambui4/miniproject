<script>
 export default{
  data(){
    return{
      image: '../images/restaurant.jpg',
       url: 'https://www.vuejs.org/',
       stockDetails: [
          {
          itemNumber:1,
          itemName: "Pasta",
          ItemPrice: 250,
          ItemImage: '../images/brunch.jpg'
         },

         {            
         itemNumber:1,
          itemName: "Pasta",
          ItemPrice: 250,
          ItemImage: '../images/brunch.jpg'
         }
       ],
    }
  },
 }
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-img
      class="align-end text-white"
      src="./images/brunch.jpg"
      cover
      max-height="550"
    >
      <v-card-title>Fine dinning worth every dime</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-6">
      Join us today
    </v-card-subtitle>

    <v-card-text>

      <div>Westlands, Nairobi Kenya</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="cyan" text="Contact us"></v-btn>

      <v-btn color="cyan" text="menu"></v-btn>
    </v-card-actions>
  </v-card>
 </template>