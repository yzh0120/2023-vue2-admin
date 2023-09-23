<template>
  <div class="pdfBox">
    <pdf ref="morePDF" :page="i" v-for="i in numPages" :key="i"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import CMapReaderFactory from 'vue-pdf/src/CMapReaderFactory.js';
import axios from 'axios';
import * as eleFileApi from "@/api/eleFile"
export default {
  components: {
    pdf
  },
  props: {
    fileId: {
      type: [String, Number]
    },
  },
  data() {
    return {
      currentPage: 1,//当前页
      numPages: 0,//总数
    }
  },
  mounted() {
     this.download({ fileId: "1691994924131065857" })
    //eleFileApi.download_url("https://szdbtest.zksj.com.cn/szdb-integrated-api/2023/08/f1f4b37bbad24ca8b6cf1607e86229cb.pdf")
  },
  methods: {
    download() {

      let data = {
      }
      let headers = {}
      axios({
        method: 'get',
        url: "/oa/turn/complex/face/openInvitation",
        baseURL: process.env.VUE_APP_API,
        params: data,
        responseType: 'blob',
        headers: headers
      })
        .then(response => {
          // console.log(response.data,"response")
          var blob = new Blob([response.data], { type: 'application/pdf' })
          let pdfSrc = URL.createObjectURL(blob);
          // console.log( pdfSrc," pdfSrc")
          this.getPDFnums(pdfSrc)
        })
        .catch(err => {
          reject(err)
        })

        
      // this.pdfSrc = "https://szdbtest.zksj.com.cn/szdb-integrated-api/2023/08/f1f4b37bbad24ca8b6cf1607e86229cb.pdf"
      //  this.getPDFnums(this.pdfSrc)
    },
    //计算pdf页码总数
    getPDFnums(url) {
      let loadURL = pdf.createLoadingTask({
        url: url,//你的pdf地址
        CMapReaderFactory
      })
      loadURL.promise.then(pdf => {
        this.numPages = pdf.numPages
        this.currentPage = 1
      }).catch(err => {

      })
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
