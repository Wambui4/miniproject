<template>
    <h1>Our Menu</h1>
    <div>
 <v-row>
 <v-col cols="12" md="4" v-for="product in stockDetails" :key=product>

    <v-card-item>
 <v-card-title>{{ product.ItemName}}</v-card-title>
 </v-card-item>
 <v-card-text>
 <div class="my-4 text-subtitle-1">{{product.ItemPrice  }}</div>

 </v-card-text>
 <v-divider class="mx-4 mb-1"></v-divider>
 <v-card-actions>
 <v-btn
 color="cyan"
 text="Order"
 block
 border
 ></v-btn>
 </v-card-actions>
    
    
     <v-carousel>
  <v-carousel-item
    :src="product.ItemImage"
    cover
  ></v-carousel-item>

  <v-carousel-item
  :src="product.ItemImage"
    cover
  ></v-carousel-item>

  <v-carousel-item
  :src="product.ItemImage"
    cover
  ></v-carousel-item>
</v-carousel>
</v-col>
</v-row>
</div>
</template>


<script>
 export default{
  data(){
   return{
    stockDetails:[
     {
     itemNumber:1,
     ItemName: "Pasta",
     ItemPrice: 250,
     ItemImage: '../images/pasta.jpg'
    },

    {
     itemNumber:2,
     ItemName: "French fries",
     ItemPrice: 120,
     ItemImage: '../images/french fries.jpg'
    },

    {
     itemNumber:3,
     ItemName: "Sandwitches",
     ItemPrice: 50,
     ItemImage: '../images/sandwitches.jpg'
    },

    ]

   }

     }
 }
</script>