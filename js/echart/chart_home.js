define(['echarts','echarts/chart/line','echarts/chart/bar'],
    function(ec){
        var lvChart = {
            echarts:ec,
            ecConfig:require('echarts/config')
        };
        function LvHome(container,chartType){
            MyChart.call(this, lvChart.echarts, lvChart.ecConfig, container, {}, 0, 0);
            this.chartType = chartType;
            this.getChartData(0);
        }
        iheritPrototype(LvHome, MyChart);
        LvHome.prototype._setOptionDataZoom = function(mydata){
            var option = {
                animation:true,
                animationDuration:600,
                backgroundColor:"rgba(0,0,0,0)",
                color: ['#00BFB7','#FF9080','#2290B3','#C680C2'],
                title : {
                    text: ''
                },
                tooltip:{
                    show: true,
                    'trigger':'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                dataZoom: {
                    show: true,
                    realtime: true,
                    x:70,
                    //y:document.getElementById(this.dom_id).offsetHeight - 70,
                    backgroundColor:'rgba(61, 72, 82,0.5)',
                    dataBackgroundColor: 'rgba(90, 99, 107,1)',            
                    fillerColor: 'rgba(156, 161, 166,0.5)',
                    handleColor: 'rgba(249, 115, 96, 1)',
                    start: 5,
                    end: 83
                },
                grid: {
                    'x':70,
                    'y':110,
                    'x2':70,
                    'y2':80,
                    borderWidth:0
                },
                legend: {
                    x: 72,
                    y: 5,
                    textStyle:{color: '#B7E1EA',fontSize:14},
                    data: []
                },
                xAxis: [{
                    type: 'category',
                    'axisLabel':{'interval':0,'rotate':-45,'textStyle':{color: 'rgba(255,255,255,0.6)'}},
                    'axisLine':{show : false,lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                    'axisTick':{show : true,lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                    'splitLine':{show : false},
                    data: [],
                }],
                yAxis: [{
                    type: 'value',
                    name:"Q'ty",
                    'splitLine':{show : false},
                    'axisTick':{show : true,inside:true,lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                    'axisLine':{lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                    'axisLabel':{'textStyle':{color: '#E2F3F6'}},
                    'nameTextStyle':{color: '#E2F3F6'}
                }, {
                    type: 'value',
                    name:'IRCT',
                    'splitLine':{show : false},
                    'axisTick':{show : true,inside:true,lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                    'axisLine':{lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                    'axisLabel':{'textStyle':{color: '#E2F3F6'}},
                    'nameTextStyle':{color: '#E2F3F6'}
                }],
                series: [{
                        name: 'Open',
                        type: 'bar',
                        stack: 'sum',
                        barCategoryGap: '40%',
                        data: []
                    }, {
                        name: 'Monitor',
                        type: 'bar',
                        barCategoryGap: '40%',
                        stack: 'sum',
                        data: []
                    }, {
                        name: 'Close',
                        type: 'bar',
                        barCategoryGap: '40%',
                        stack: 'sum',
                        data: []
                    }, {
                        name: 'Close',
                        type: 'bar',
                        barCategoryGap: '40%',
                        stack: 'sum',
                        data: []
                    }, {
                        name: 'Related',
                        type: 'pie',
                        tooltip: {
                            trigger: 'item',
                            formatter: '{a} <br/>{b} : {c} ({d}%)'
                        },
                        center: ['80%', 75],
                        radius: [0, 50],
                        itemStyle: 　{
                            normal: {
                                label: {
                                    'textStyle':{color: '#E2F3F6',fontSize:14},
                                    formatter: function(a,b,c,d) {return b+'\n'+(d - 0).toFixed(0) + '%'}
                                },
                                labelLine: {
                                    length: 5,
                                    lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}
                                }
                            }
                        },
                        data: []
                    }
                ]
            };
            option.legend.data = mydata.legend;
            // x轴
            option.xAxis[0].data = mydata.xAxis;
            option.series[0].name = mydata.series_bar_1.name;
            option.series[0].data = mydata.series_bar_1.data;
            option.series[1].name = mydata.series_bar_2.name;
            option.series[1].data = mydata.series_bar_2.data;
            option.series[2].name = mydata.series_bar_3.name;
            option.series[2].data = mydata.series_bar_3.data;
            option.series[3].name = mydata.series_bar_4.name;
            option.series[3].data = mydata.series_bar_4.data;   
            option.series[4].data = mydata.series_pie_1; 
            this.option = option;
            this.loadStatus = true;
            return option;
        };
        LvHome.prototype._setOptionDataZoom_2 = function(mydata){
            var option = {
                color: ['#00BFB7','#FF9080','#2290B3','#C680C2','#FFF100'],
                timeline:{
                    y2:0,
                    data:['1','2','3','4','5','6', '7','8','9','10','11','12'], 
                    label : {
                        'interval':0,
                        textStyle: {
                            color: 'rgba(255,255,255,0.65)'
                        },
                        formatter : function(s) {
                            var month = ['', 'Jay.','Feb.','Mar.','Apr.','May.','Jun.', 'Jul.','Aug.','Sept.','Oct.','Nov.','Dec.'];
                            return month[s];
                        }
                    },
                    symbol:'emptyCircle',
                    lineStyle:{color: 'rgba(255,255,255,0.7)', width: 1, type: 'solid'},
                    checkpointStyle:{
                        borderColor : '#076377',
                        borderWidth : 1
                    },
                    controlStyle:{
                        normal : { color : '#E2F3F6'},
                        emphasis : { color : '#E2F3F6'}
                    },  
                    autoPlay : false,
                    playInterval : 3000
                },
                options:[
                    {
                        title : {
                            text: ''
                        },
                        tooltip:{
                            show: true,
                            'trigger':'axis',
                             axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        color: ['#00BFB7','#FF9080','#2290B3','#C680C2','#FFF100'],
                        calculable : false,
                        animation:true,
                        animationDuration:600,
                        grid: {
                            'x':70,
                            'y':110,
                            'x2':70,
                            'y2':100,
                            borderWidth:0
                        },
                        legend: {
                            x: 72,
                            y: 15,
                            textStyle:{color: '#B7E1EA',fontSize:14},
                            data: []
                        },
                        xAxis: [{
                            type: 'category',
                            'axisLabel':{'interval':0,'rotate':-45,'textStyle':{color: 'rgba(255,255,255,0.6)'}},
                            'axisLine':{show : false,lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                            'axisTick':{show : true,lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                            'splitLine':{show : false},
                            data: [],
                        }],
                        yAxis: [{
                            type: 'value',
                            name:"Q'ty",
                            'splitLine':{show : false},
                            'axisTick':{show : true,inside:true,lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                            'axisLine':{lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                            'axisLabel':{'textStyle':{color: '#E2F3F6'}},
                            'nameTextStyle':{color: '#E2F3F6'}
                        }, {
                            type: 'value',
                            name:'IRCT',
                            'splitLine':{show : false},
                            'axisTick':{show : true,inside:true,lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                            'axisLine':{lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}},
                            'axisLabel':{'textStyle':{color: '#E2F3F6'}},
                            'nameTextStyle':{color: '#E2F3F6'}
                        }],
                        series: [{
                              name: 'Open',
                              type: 'bar',
                              stack: 'sum',
                              barCategoryGap: '40%',
                              data: []
                          }, {
                              name: 'Monitor',
                              type: 'bar',
                              barCategoryGap: '40%',
                              stack: 'sum',
                              data: []
                          }, {
                              name: 'Close',
                              type: 'bar',
                              barCategoryGap: '40%',
                              stack: 'sum',
                              data: []
                          }, {
                              name: 'Close',
                              type: 'bar',
                              barCategoryGap: '40%',
                              stack: 'sum',
                              data: []
                          }, {
                              name: 'IRCT',
                              type: 'line',
                              data: [],
                              yAxisIndex: 1,
                              markLine: {
                                  symbol: 'none',
                                  itemStyle: {
                                      normal: {
                                          color: '#F97360',
                                          lineStyle: { // 系列级个性化折线样式
                                              type:'dotted'
                                          }, 
                                          label: {
                                              show: false
                                          }
                                      }
                                  },
                                  data: [
                                      [{
                                          name: 'IRCT Target',
                                          xAxis: 0,
                                          yAxis: mydata.target_value
                                      }, // 当xAxis或yAxis为数值轴时，不管传入是什么，都被理解为数值后做空间位置换算
                                      {
                                          xAxis: 30,
                                          yAxis: mydata.target_value
                                      }]
                                  ]
                              }
                          }, {
                              name: 'Related',
                              type: 'pie',
                              tooltip: {
                                  trigger: 'item',
                                  formatter: '{a} <br/>{b} : {c} ({d}%)',
                                  axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                      type: 'none' // 默认为直线，可选为：'line' | 'shadow'
                                  }
                              },
                              center: ['80%', 65],
                              radius: [0, 40],
                              itemStyle: 　{
                                  normal: {
                                      label: {
                                          'textStyle':{color: '#E2F3F6',fontSize:14},
                                          formatter: function(a,b,c,d) {return b+'\n'+(d - 0).toFixed(0) + '%'}
                                      },
                                      labelLine: {
                                          length: 5,
                                          lineStyle:{color: 'rgba(255,255,255,0.35)', width: 1, type: 'solid'}
                                      }
                                  }
                              },
                              data: []
                          }
                      ]
                    }
                ]
            };
            option.options[0].legend.data = mydata.legend;
            // x轴
            option.options[0].xAxis[0].data = mydata.xAxis[0];
            option.options[0].series[0].name = mydata.series_bar_1[0].name;
            option.options[0].series[0].data = mydata.series_bar_1[0].data;
            option.options[0].series[1].name = mydata.series_bar_2[0].name;
            option.options[0].series[1].data = mydata.series_bar_2[0].data;
            option.options[0].series[2].name = mydata.series_bar_3[0].name;
            option.options[0].series[2].data = mydata.series_bar_3[0].data;
            option.options[0].series[3].name = mydata.series_bar_4[0].name;
            option.options[0].series[3].data = mydata.series_bar_4[0].data;
            option.options[0].series[4].name = mydata.series_line_1[0].name;
            option.options[0].series[4].data = mydata.series_line_1[0].data;      
            option.options[0].series[5].data = mydata.series_pie_1[0]; 
            for (var i = 1; i < 12; i++) {
                option.options.push({
                    'xAxis': [{'data':mydata.xAxis[i]}],
                    series : [
                        {'name': mydata.series_bar_1[i].name,'data': mydata.series_bar_1[i].data},
                        {'name': mydata.series_bar_2[i].name,'data': mydata.series_bar_2[i].data},
                        {'name': mydata.series_bar_3[i].name,'data': mydata.series_bar_3[i].data},
                        {'name': mydata.series_bar_4[i].name,'data': mydata.series_bar_4[i].data},
                        {'name': mydata.series_line_1[i].name,'data': mydata.series_line_1[i].data},
                        {'data': mydata.series_pie_1[i]},    
                    ]
                })
            };
            this.option = option;
            this.loadStatus = true;
            return option;
        };
        LvHome.prototype.bindEvents = function () {//绑定相关事件
            var self = this;
            switch(this.chartType){
                case "dataZoom":
                    this.chart.on(lvChart.ecConfig.EVENT.CLICK, function(param){
                      if(param.seriesIndex < 4){
                        page_modules.loadinto("moduleHtml/Qstop_In.html", ".eachBlck" ,"pagebgc-1","qstop_in");
                      }
                    }); 
                    break;
                default:break;
            }
        };
        LvHome.prototype.getChartData = function(drawFlag){
            switch(this.chartType){
                case "dataZoom":
                    this.getChartDataZoom(drawFlag); break;
                case "dataZoom_2":
                    this.getChartDataZoom_2(drawFlag); break;
                default:break;
            }
        };
        LvHome.prototype.getChartDataZoom = function(drawFlag){
            var self = this;
            var mydata =  {
                legend:['Design related', 'Supplier related', 'MFG related','Engineering related'],
                xAxis:['TNID', 'CKSN', 'CKSD', 'WZSD', 'QSJD', 'BLDN', 'BJPD','SHPN', 'SHPD', 'HYPD', 'CDPD', 'WKSN', 'LCFC', 'PEGN','CCDN', 'WCDN', 'IUTN', 'INNB', 'WRGN', 'ITUD', 'BLDD'],
                other_parm_data:['TNID1', 'CKSN2', 'CKSD3', 'WZSD4', 'QSJD5', 'BLDN6', 'BJPD7','SHPN8', 'SHPD9', 'HYPD10', 'CDPD11', 'WKSN12', 'LCFC13', 'PEGN14','CCDN15', 'WCDN16', 'IUTN17', 'INNB18', 'WRGN19', 'ITUD20', 'BLDD21'],//其他不可见参数
                series_bar_1:{name:'Design related',data:[1, 0, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 2]},
                series_bar_2:{name:'Supplier related',data:[1, 0, 0, 2, 0, 0, 2, 1, 0, 0, 2, 0, 0, 2, 1, 0, 0, 2, 0, 0, 2]},
                series_bar_3:{name:'MFG related',data:[5, 6, 4, 3, 4, 1.5, 5, 5, 6, 4, 3, 4, 1.5, 5, 5, 6, 4, 3, 4, 1.5, 5]},
                series_bar_4:{name:'Engineering related',data:[12, 7, 8, 10, 6, 14, 12, 12, 7, 8, 10, 6, 14, 12, 12, 7, 8, 10, 6, 14, 12]},
                series_pie_1:[
                    {name: 'Design related',value: 15},
                    {name: 'Supplier related',value: 30},
                    {name: 'MFG related',value: 32},
                    {name: 'Engineering related',value: 25}
                ],
                target_value:8
            };
            self._setOptionDataZoom(mydata);
            drawFlag&&self.resetOption();
        };
        LvHome.prototype.getChartDataZoom_2 = function(drawFlag){
            var self = this;
            var mydata =  {
                legend:['Design related', 'Supplier related', 'MFG related','Engineering related'],
                xAxis:[],
                other_parm_data:['TNID1', 'CKSN2', 'CKSD3', 'WZSD4', 'QSJD5', 'BLDN6', 'BJPD7','SHPN8', 'SHPD9', 'HYPD10', 'CDPD11', 'WKSN12', 'LCFC13', 'PEGN14','CCDN15', 'WCDN16', 'IUTN17', 'INNB18', 'WRGN19', 'ITUD20', 'BLDD21'],//其他不可见参数
                series_bar_1:[],
                series_bar_2:[],
                series_bar_3:[],
                series_bar_4:[],
                series_line_1:[],
                series_pie_1:[],
                target_value:8
            };
            for (var i = 1; i <= 12; i++) {
                var series_bar_1 = [],
                    series_bar_2 = [],
                    series_bar_3 = [],
                    series_bar_4 = [],
                    series_line_1 = [],
                    monthArr = [],
                    len = new Date(2014,i,0).getDate();//获取某年某月的天数
                for (var j = 1; j <= len; j++) {
                    monthArr.push(i+'.'+j);
                    series_bar_1.push(Math.floor(Math.random()*4));
                    series_bar_2.push(Math.floor(Math.random()*4));
                    series_bar_3.push(Math.floor(Math.random()*4));
                    series_bar_4.push(Math.floor(Math.random()*4));
                    series_line_1.push(Math.floor(Math.random()*12));
                };
                for (var k = len; k <= 30; k++) {//如果当月天数小于31天，需要补全
                    monthArr.push('-.-');
                    series_bar_1.push('-');
                    series_bar_2.push('-');
                    series_bar_3.push('-');
                    series_bar_4.push('-');
                    series_line_1.push('-');
                };
                mydata.xAxis.push(monthArr);
                mydata.series_bar_1.push({'data':series_bar_1,name:'Design related'});
                mydata.series_bar_2.push({'data':series_bar_2,name: 'Supplier related'});
                mydata.series_bar_3.push({'data':series_bar_3,name: 'MFG related'});
                mydata.series_bar_4.push({'data':series_bar_4,name: 'Engineering related'});
                mydata.series_line_1.push({'data':series_line_1,name: 'IRCT'});
                mydata.series_pie_1.push([
                    {name: 'Design related',value:15+Math.floor(Math.random()*30)},
                    {name: 'Supplier related',value: 15+Math.floor(Math.random()*30)},
                    {name: 'MFG related',value: 15+Math.floor(Math.random()*30)},
                    {name: 'Engineering related',value: 15+Math.floor(Math.random()*30)}
                ]);
            };
            self._setOptionDataZoom_2(mydata);
            drawFlag&&self.resetOption();
        };
        return LvHome;
    }
);