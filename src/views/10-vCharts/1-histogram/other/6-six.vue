<template>
  <page>
    <ve-histogram :data="chartData" :settings="chartSettings" :after-config="afterConfig"></ve-histogram>
  </page>
</template>
<script>
export default {
  data() {
    this.chartSettings = {
      axisSite: { right: ["下单率"] }, //设置右侧y轴的指标
      yAxisType: ["KMB", "normal"], //设置 左右坐标y轴为连续的数值轴的类型   可选值: KMB, normal(按照原来维度的数据来), percent(百分比)
      yAxisName: ["数值", "比率"], //设置两个y轴的名称
    };
    return {
      chartData: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
    };
  },
  methods:{
	  afterConfig(options) {
	        // console.log((options.yAxis[1].splitLine = false));
			//不显示y轴第二个指标的网格线
			options.yAxis[1].splitLine = false
	        return options;
	      },
  }
};
</script>