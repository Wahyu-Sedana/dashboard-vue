<template>
  <v-app>
    <Sidebar/>
    <v-main class="mx-5 mb-5">
     <v-row>
       <v-col cols="12" sm="9" md="9">
         <h3 class="justify-center">Grafik Jumlah Customer(Visitor) Perbulan</h3>
          <v-card>
        <v-card-content>
         <LineChartGenerator/>
        </v-card-content>
      </v-card>

      <br>

      <v-row>
        <v-col cols="6" sm="6" lg="3">
          <div class="animate__animated animate__fadeInLeft animate__delay-3s">
            <v-card height="120" color="#0097A7" class="rounded-xl">
               <v-card-title class="justify-center white--text"><h3 class="text-title" style="font-weight:bold">TOTAL</h3></v-card-title>
               <v-card-content class="justify-center white--text"><h1 class="text-content" style="font-weight:bold;">5400</h1></v-card-content>
             </v-card>
          </div>
        </v-col>
        <v-col cols="6" sm="6" lg="3">
         <div class="animate__animated animate__fadeInLeft animate__delay-2s">
            <v-card height="120" color="#0097A7" class="rounded-xl">
               <v-card-title class="justify-center white--text"><h3 class="text-title" style="font-weight:bold">DATANG</h3></v-card-title>
               <v-card-content class="justify-center white--text"><h1 class="text-content" style="font-weight:bold">150</h1></v-card-content>
             </v-card>
         </div>
        </v-col>
        <v-col cols="6" sm="6" lg="3">
          <div class="animate__animated animate__fadeInLeft animate__delay-1s">
            <v-card height="120" color="#0097A7" class="rounded-xl">
               <v-card-title class="justify-center white--text"><h3 class="text-title" style="font-weight:bold">TERLAYANI</h3></v-card-title>
               <v-card-content class="justify-center white--text"><h1 class="text-content" style="font-weight:bold">50</h1></v-card-content>
             </v-card>
          </div>
        </v-col>
        <v-col cols="6" sm="6" lg="3">
         <div class="animate__animated animate__fadeInLeft">
            <v-card height="120" color="#0097A7" class="rounded-xl">
               <v-card-title class="justify-center white--text"><h3 class="text-title" style="font-weight:bold">BATAL</h3></v-card-title>
               <v-card-content class="justify-center white--text"><h1 class="text-content" style="font-weight:bold">5</h1></v-card-content>
             </v-card>
         </div>
        </v-col>
        <v-col cols="6" sm="6" lg="3">
          <div class="animate__animated animate__fadeInLeft animate__delay-3s">
              <v-card height="120" color="#0097A7" class="rounded-xl">
               <v-card-title class="justify-center white--text" ><h3 class="text-title" style="font-weight:bold">MANUAL</h3></v-card-title>
               <v-card-content class="justify-center white--text"><h1 class="text-content" style="font-weight:bold">5</h1></v-card-content>
             </v-card>
          </div>
        </v-col>
        <v-col cols="6" sm="6" lg="3">
          <div class="animate__animated animate__fadeInLeft animate__delay-2s">
             <v-card height="120" color="#0097A7" class="rounded-xl">
               <v-card-title class="justify-center white--text"><h3  class="text-title" style="font-weight:bold">SPEEDID</h3></v-card-title>
               <v-card-content class="justify-center white--text"><h1 class="text-content" style="font-weight:bold">95.4%</h1></v-card-content>
             </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="3">
          <div class="animate__animated animate__fadeInLeft animate__delay-1s">
             <v-card height="120" color="#0097A7" class="rounded-xl">
               <v-card-title class="justify-center white--text"><h3 class="text-title" style="font-weight:bold">PEMBERI RATING</h3></v-card-title>
               <v-card-content class="justify-center white--text"><h1 class="text-content" style="font-weight:bold">4.1</h1></v-card-content>
             </v-card>
          </div>
        </v-col>
        <v-col cols="12" sm="12" lg="3">
         <div class="animate__animated animate__fadeInLeft">
            <v-card height="120" color="#0097A7" class="rounded-xl">
              <v-card-title class="justify-center white--text"><h3 class="text-title" style="font-weight:bold">RATING</h3></v-card-title>
                 <v-card-content class="justify-center primary--text" style="font-size:20px">
                     <v-rating
                      v-model="rating"
                      background-color="white lighten-3"
                      color="orange"
                      
                    ></v-rating>
               </v-card-content>
             </v-card>
         </div>
        </v-col>
      </v-row>

      <br>

      <h4 class="text-left" style="color:#0D47A1">Schedule</h4> 

      <v-card outlined>
        <v-row>
          <v-col cols="4" sm="4" lg="4" md="4">
            <v-card-title class="primary--text" style="font-size:17px; font-family: arial; font-weight:bold;">Wahyu Eka</v-card-title>
          </v-col>
          <v-col cols="4" sm="4" lg="4" md="4">
            <v-card-title class="primary--text" style="font-size:17px; font-family: arial; font-weight:bold;">Teller</v-card-title>
          </v-col>
          <v-col cols="4" sm="4" lg="4" md="4">
            <v-card-title class="primary--text" style="font-size:17px; font-family: arial; font-weight:bold;">08.00-10.00 AM</v-card-title>
          </v-col>
          
        </v-row>
        
      </v-card>
      <br>    
      <v-card outlined>
        <v-row class="justify-center">
          <v-col cols="4" sm="4" lg="4" md="4">
            <v-card-title class="primary--text" style="font-size:17px; font-family: arial; font-weight:bold;">Sagung Putra Dewi</v-card-title>
          </v-col>
          <v-col cols="4" sm="4" lg="4" md="4">
            <v-card-title class="primary--text" style="font-size:17px; font-family: arial; font-weight:bold;">Over Booking</v-card-title>
          </v-col>
          <v-col cols="4" sm="4" lg="4" md="4">
            <v-card-title class="primary--text" style="font-size:17px; font-family: arial; font-weight:bold;">08.00-10.00 AM</v-card-title>
          </v-col>
          
        </v-row>
        
      </v-card>
       </v-col>
       <v-col cols="12" sm="3" md="3">
         <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://avatars.design/wp-content/uploads/2021/02/corporate-avatars-TN-1.jpg" alt="" style="width:100%;height:300px;">
            </div>
            <div class="flip-card-back" >
              <h1 class="">Wahyu Sedana</h1> 
              <p>Software Dev & Engineer</p> 
              <p>SMK NEGERI 1 DENPASAR</p>
            </div>
          </div>
        </div>
        <br>
                 <v-card
    class="mt-4 mx-auto"
    max-width="400">
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)">
      <v-sparkline
        :labels="labels"
        :value= "[3, 10, 5, 9, 5, 3, 3, 5, 1, 9, 1, 2]"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">
        Terlayani
      </div>
      <div class="subheading font-weight-light grey--text">
        Data Terakhir Terlayani 
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="text-caption grey--text font-weight-light">last registration 26 minutes ago</span>
    </v-card-text>
  </v-card>
  <br>

        <v-card height="400" class="rounded-xl">
          
          <Bar/>
          
        </v-card>
        <br>
       </v-col>
     </v-row>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import LineChartGenerator from '@/components/Line.vue'
import Bar from '@/components/Bar.vue'

const gradients = [
    ['#0D47A1'],
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
   
  ]

export default {
  name: 'DashboardView',

  data: () => ({ drawer: null,
    width: 1,
      radius: 10,
      padding: 8,
      color: '#00ACC1',
      lineCap: 'round',
      gradient: gradients[0],
      value: [3, 2, 5, 9, 5, 10, 3, 5, 1, 0, 1, 8],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
      }),
  components: {
    Sidebar,
    Footer,
    LineChartGenerator,
    Bar  
  }
}
</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
  @media screen and (max-width: 1680px) {
  .text-title {
    font-size: 14px;
  }

   .text-content {
    font-size: 25px;
  }

  .flip-card-back h1,p{
     font-size: 20px;
  }

  .flip-card img{
    width: auto;
    height: auto;
  }
}

.flip-card {
  background-color: transparent;
  width: auto;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.9s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #00ACC1;
  color: white;
  transform: rotateY(180deg);
}
.flip-card-back h1{
  text-align: center;
}
</style>
