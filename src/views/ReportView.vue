<template>
  <v-app>
    <Sidebar/>
    <v-main class="mx-5 mb-5">
      <v-row>
        <v-col cols="12" sm="10" md="10" lg="10">
          <v-card>
        <v-card-title class="justify-center">  
           <h4>Grafik Jumlah Customer(Visitor) Perbulan</h4>
        </v-card-title>
        <v-card-content>
          <LineChartGenerator/>
        </v-card-content>
      </v-card>
        </v-col>
        <v-col sm="2" md="2" lg="2">
          <v-card color="#00BCD4  " class="py-1 text-center white--text">
            <p style="font-size: 20px">Jumlah Visitor</p>
            <p>200 Orang</p>
          </v-card>
        </v-col>
      </v-row>

      <br>

    <v-row>
      <v-col cols="12" sm="10" md="10" lg="10">
              <v-card>
        <v-card-title class="justify-center">  
            <h4>Grafik Jumlah Customer(Visitor) Perbulan</h4>
        </v-card-title>
        <v-card-content>
         <Bar/>
        </v-card-content>
      </v-card>
      </v-col>
       <v-col sm="2" md="2" lg="2">
          <v-card color="#00BCD4  " class="py-1 text-center white--text">
            <p style="font-size: 20px">Jumlah Visitor</p>
            <p>200 Orang</p>
          </v-card>
        </v-col>
    </v-row>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import Bar from '@/components/Bar.vue'
import LineChartGenerator from '@/components/Line.vue'

export default {
  name: 'ReportView',
  data: () => ({ drawer: null}),
  components: {
    Sidebar,
    Footer,
    Bar,
    LineChartGenerator
  }
}
</script>
