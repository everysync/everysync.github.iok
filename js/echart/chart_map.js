define(['echarts','echarts/chart/map','echartsConfig'],
    function(ec){
        //var MyChart = require('echartsConfig');
        var lvChart = {
            echarts:ec,
            ecConfig:require('echarts/config')
        };
        // lvChart.echarts = ec;
        // lvChart.ecConfig = require('echarts/config');
        function LvMap(container){
            // 基类
            MyChart.call(this, lvChart.echarts, lvChart.ecConfig, container, {}, 0, 0);
            console.log(MyChart);
            this.getChartData();
        }
        LvMap.prototype = new MyChart();
        LvMap.prototype._setOption = function(mydata){
                var option = {
                    tooltip : {
                        trigger: 'item',
                        backgroundColor:'rgba(0,0,0,0)',
                        showDelay:'200',
                        position : function(p) {
                            // 位置回调
                            console.log && console.log(p);
                            $("#tip_l").animate({'top':p[1]+'px','left':p[0]-50+'px'}, 200);
                            //$("#tip_l").css({'top':p[1]+'px','left':p[0]-50+'px'});
                            return [p[0]-20, p[1]];
                        },
                        //{Function}，传递参数列表如下：
                        //<Array> params : 数组内容同模板变量，[[a, b, c, d], [a1, b1, c1, d1], ...]
                        //<String> ticket : 异步回调标识
                        //<Function> callback : 异步回调，回调时需要两个参数，第一个为前面提到的ticket，第二个为填充内容html
                        formatter:function(params,ticket,callback){
                            console.log(params[5].name+','+params[5].value);
                            $("#tip_l").html(params[5].name+':'+params[5].value);
                            var result = params[1][1]+'<br[5]>';
                            return '';
                        }
                    },
                    // roamController: {
                    //     show: false,
                    //     x: 'right',
                    //     mapTypeControl: {
                    //         'china': true
                    //     }
                    // },
                    series: [
                        {
                            tooltip : {
                                show:false
                            },
                            name: 'Top5',
                            type: 'map',
                            mapType: 'china',
                            itemStyle:{
                                normal:{
                                    borderColor:'rgba(46, 67, 79,1)',
                                    borderWidth:1.5,
                                    areaStyle:{
                                        color: 'rgba(161, 199, 212,1)'
                                    }
                                }
                            },
                            mapLocation: {
                                x:'center',
                                //x: '5%',
                                y: '5%',
                                width: '90%',
                                height: '80%'
                            },
                            selectedMode: null,
                            hoverable: false,
                            roam: false,
                            data: [{name: '北京', selected: false }, {name: '天津', selected: false }, {name: '上海', selected: false }, {name: '重庆', selected: false }, {name: '河北', selected: false }, {name: '河南', selected: false }, {name: '云南', selected: false }, {name: '辽宁', selected: false }, {name: '黑龙江', selected: false }, {name: '湖南', selected: false }, {name: '安徽', selected: false }, {name: '山东', selected: false }, {name: '新疆', selected: false }, {name: '江苏', selected: false }, {name: '浙江', selected: false }, {name: '江西', selected: false }, {name: '湖北', selected: false }, {name: '广西', selected: false }, {name: '甘肃', selected: false }, {name: '山西', selected: false }, {name: '内蒙古', selected: false }, {name: '陕西', selected: false }, {name: '吉林', selected: false }, {name: '福建', selected: false }, {name: '贵州', selected: false }, {name: '广东', selected: false }, {name: '青海', selected: false }, {name: '西藏', selected: false }, {name: '四川', selected: false }, {name: '宁夏', selected: false }, {name: '海南', selected: false }, {name: '台湾', selected: false }, {name: '香港', selected: false }, {name: '澳门', selected: false }], 
                            geoCoord: {
                                india:[81.18,16.54],
                                southAmerica:[92.18,16.54]
                            },
                            markPoint: {
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        },
                                        labelLine: {
                                            show: false
                                        }
                                    },
                                    emphasis: {
                                        color:"#000",
                                        areaStyle:{},
                                        label: {
                                            show: false,
                                            position: 'outer'
                                        },
                                        labelLine: {
                                            show: false,
                                            lineStyle: {
                                                color: 'red'
                                            }
                                        }
                                    }
                                },
                                data: [
                                    {
                                        // x: '5%',
                                        // y: '85%',
                                        geoCoord : [81.18,16.54],
                                        name:'india',
                                        value: 'india',
                                        symbolSize: 40,
                                        symbol: 'image://images/india.png'
                                    },
                                    {
                                        // x: '17%',
                                        // y: '85%',
                                        geoCoord : [92.18,16.54],
                                        value: 'southAmerica',
                                        name:'southAmerica',
                                        symbolSize: 40,
                                        symbol: 'image://images/southAmerica.png'
                                    }
                                    // {
                                    //     x: '5%',
                                    //     y: '85%',
                                    //     itemStyle: {
                                    //         normal: {
                                    //             color: '#000',
                                    //             label: {
                                    //                 show: false,
                                    //                 position:'bottom'
                                    //             }
                                    //         }
                                    //     },
                                    //     symbol: 'circle',
                                    //     symbolSize: 0,
                                    //     name:'India',
                                    //     value:'India'
                                    // },
                                    // {
                                    //     x: '17%',
                                    //     y: '85%',
                                    //     itemStyle: {
                                    //         normal: {
                                    //             color: '#000',
                                    //             label: {
                                    //                 show: false,
                                    //                 position:'top'
                                    //             }
                                    //         }
                                    //     },
                                    //     symbol: 'circle',
                                    //     symbolSize: 0,
                                    //     name:'Brazil',
                                    //     value:'Brazil'
                                    // }
                                ]
                            }
                        }, {
                            hoverable: false,
                            name: 'city_Type1',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            geoCoord: {
                            },
                            mapLocation: {
                                x: 'center',
                                //X: '5%',
                                y: '5%',
                                width: '90%',
                                height: '80%'
                            },
                            data: [],
                            markPoint: {
                                symbol: 'circle',
                                symbolSize: 6,
                                data: []
                            }
                        }
                    ]      
                };
                var itemStyle = {};
                itemStyle.s1 = {
                    normal: {
                        borderWidth: 2,
                        color: 'rgba(231,43,14,1)',
                        borderColor: 'rgba(255,255,255,1)',
                        label: { show: false, formatter:' '}
                    }
                };
                itemStyle.s2 = {
                    normal: {
                        borderWidth: 2,
                        color: 'rgba(255, 233, 0,1)',
                        borderColor: 'rgba(255, 149, 79,1)',
                        label: { show: false, formatter:' '}
                    }
                };
                itemStyle.s3 = {
                    normal: {
                        borderWidth: 2,
                        color: 'rgba(0, 251, 174,1)',
                        borderColor: 'rgba(255,255,255,1)',
                        label: { show: false, formatter:' '}
                    }
                };
                var geoCoord = {},
                    dataMark = [];
                for (var i = 0; i < mydata.length; i++) {
                    var v = mydata[i];
                    geoCoord[v['listName']] = v['geo'];
                    dataMark.push({name: v['listName'], value: v['valu'], itemStyle: itemStyle[v.color]});
                }
                option.series[1].geoCoord = geoCoord;
                option.series[1].markPoint.data = dataMark;
                this.option = option;
                return option;
        };
        LvMap.prototype.getChartData = function(){
            var self = this;
            $.ajax({
                type: "get",
                url: "jsonpcallback/jsonpcallback.js",
                dataType: "jsonp",
                jsonpCallback:"mapListData"
            }).done(function(data) {
                var myChart4 = self._setOption(data.mapListData);
                self.init();
                self.chart.on(lvChart.ecConfig.EVENT.CLICK, function(param){
                    if(param.seriesIndex > 0){
                        alert(param.name);
                    }
                });
                self.loadingData();
                self.chart.component.tooltip.showTip({seriesIndex: "1", seriesName:'city_Type1', name:'Wistron_CD_NB'});
            });
        };
        return LvMap;
    }
);
// $(function() {
//     function requireEcharts(requireCallback) {
//         var pathArr = [
//                 'echarts',
//                 'echarts/chart/map'
//             ];
            
//         require(
//             pathArr,
//             requireCallback
//         );
//     }

//     function drawChart_map(container,mydata){
//         var option = {
//             tooltip : {
//                 trigger: 'item',
//                 backgroundColor:'rgba(0,0,0,0)',
//                 showDelay:'200',
//                 position : function(p) {
//                     // 位置回调
//                     console.log && console.log(p);
//                     $("#tip_l").animate({'top':p[1]+'px','left':p[0]-50+'px'}, 200);
//                     //$("#tip_l").css({'top':p[1]+'px','left':p[0]-50+'px'});
//                     return [p[0]-20, p[1]];
//                 },
//                 //{Function}，传递参数列表如下：
//                 //<Array> params : 数组内容同模板变量，[[a, b, c, d], [a1, b1, c1, d1], ...]
//                 //<String> ticket : 异步回调标识
//                 //<Function> callback : 异步回调，回调时需要两个参数，第一个为前面提到的ticket，第二个为填充内容html
//                 formatter:function(params,ticket,callback){
//                     console.log(params[5].name+','+params[5].value);
//                     $("#tip_l").html(params[5].name+':'+params[5].value);
//                     var result = params[1][1]+'<br[5]>';
//                     return '';
//                 }
//             },
//             // roamController: {
//             //     show: false,
//             //     x: 'right',
//             //     mapTypeControl: {
//             //         'china': true
//             //     }
//             // },
//             series: [
//                 {
//                     tooltip : {
//                         show:false
//                     },
//                     name: 'Top5',
//                     type: 'map',
//                     mapType: 'china',
//                     itemStyle:{
//                         normal:{
//                             borderColor:'rgba(46, 67, 79,1)',
//                             borderWidth:1.5,
//                             areaStyle:{
//                                 color: 'rgba(161, 199, 212,1)'
//                             }
//                         }
//                     },
//                     mapLocation: {
//                         x:'center',
//                         //x: '5%',
//                         y: '5%',
//                         width: '90%',
//                         height: '80%'
//                     },
//                     selectedMode: null,
//                     hoverable: false,
//                     roam: false,
//                     data: [{name: '北京', selected: false }, {name: '天津', selected: false }, {name: '上海', selected: false }, {name: '重庆', selected: false }, {name: '河北', selected: false }, {name: '河南', selected: false }, {name: '云南', selected: false }, {name: '辽宁', selected: false }, {name: '黑龙江', selected: false }, {name: '湖南', selected: false }, {name: '安徽', selected: false }, {name: '山东', selected: false }, {name: '新疆', selected: false }, {name: '江苏', selected: false }, {name: '浙江', selected: false }, {name: '江西', selected: false }, {name: '湖北', selected: false }, {name: '广西', selected: false }, {name: '甘肃', selected: false }, {name: '山西', selected: false }, {name: '内蒙古', selected: false }, {name: '陕西', selected: false }, {name: '吉林', selected: false }, {name: '福建', selected: false }, {name: '贵州', selected: false }, {name: '广东', selected: false }, {name: '青海', selected: false }, {name: '西藏', selected: false }, {name: '四川', selected: false }, {name: '宁夏', selected: false }, {name: '海南', selected: false }, {name: '台湾', selected: false }, {name: '香港', selected: false }, {name: '澳门', selected: false }], 
//                     geoCoord: {
//                         india:[81.18,16.54],
//                         southAmerica:[92.18,16.54]
//                     },
//                     markPoint: {
//                         itemStyle: {
//                             normal: {
//                                 label: {
//                                     show: false
//                                 },
//                                 labelLine: {
//                                     show: false
//                                 }
//                             },
//                             emphasis: {
//                                 color:"#000",
//                                 areaStyle:{},
//                                 label: {
//                                     show: false,
//                                     position: 'outer'
//                                 },
//                                 labelLine: {
//                                     show: false,
//                                     lineStyle: {
//                                         color: 'red'
//                                     }
//                                 }
//                             }
//                         },
//                         data: [
//                             {
//                                 // x: '5%',
//                                 // y: '85%',
//                                 geoCoord : [81.18,16.54],
//                                 name:'india',
//                                 value: 'india',
//                                 symbolSize: 40,
//                                 symbol: 'image://images/india.png'
//                             },
//                             {
//                                 // x: '17%',
//                                 // y: '85%',
//                                 geoCoord : [92.18,16.54],
//                                 value: 'southAmerica',
//                                 name:'southAmerica',
//                                 symbolSize: 40,
//                                 symbol: 'image://images/southAmerica.png'
//                             }
//                             // {
//                             //     x: '5%',
//                             //     y: '85%',
//                             //     itemStyle: {
//                             //         normal: {
//                             //             color: '#000',
//                             //             label: {
//                             //                 show: false,
//                             //                 position:'bottom'
//                             //             }
//                             //         }
//                             //     },
//                             //     symbol: 'circle',
//                             //     symbolSize: 0,
//                             //     name:'India',
//                             //     value:'India'
//                             // },
//                             // {
//                             //     x: '17%',
//                             //     y: '85%',
//                             //     itemStyle: {
//                             //         normal: {
//                             //             color: '#000',
//                             //             label: {
//                             //                 show: false,
//                             //                 position:'top'
//                             //             }
//                             //         }
//                             //     },
//                             //     symbol: 'circle',
//                             //     symbolSize: 0,
//                             //     name:'Brazil',
//                             //     value:'Brazil'
//                             // }
//                         ]
//                     }
//                 }, {
//                     hoverable: false,
//                     name: 'city_Type1',
//                     type: 'map',
//                     mapType: 'china',
//                     roam: false,
//                     geoCoord: {
//                     },
//                     mapLocation: {
//                         x: 'center',
//                         //X: '5%',
//                         y: '5%',
//                         width: '90%',
//                         height: '80%'
//                     },
//                     data: [],
//                     markPoint: {
//                         symbol: 'circle',
//                         symbolSize: 6,
//                         data: []
//                     }
//                 }
//             ]      
//         };
//         var itemStyle = {};
//         itemStyle.s1 = {
//             normal: {
//                 borderWidth: 2,
//                 color: 'rgba(231,43,14,1)',
//                 borderColor: 'rgba(255,255,255,1)',
//                 label: { show: false, formatter:' '}
//             }
//         };
//         itemStyle.s2 = {
//             normal: {
//                 borderWidth: 2,
//                 color: 'rgba(255, 233, 0,1)',
//                 borderColor: 'rgba(255, 149, 79,1)',
//                 label: { show: false, formatter:' '}
//             }
//         };
//         itemStyle.s3 = {
//             normal: {
//                 borderWidth: 2,
//                 color: 'rgba(0, 251, 174,1)',
//                 borderColor: 'rgba(255,255,255,1)',
//                 label: { show: false, formatter:' '}
//             }
//         };
//         var geoCoord = {},
//             dataMark = [];
//         for (var i = 0; i < mydata.length; i++) {
//             var v = mydata[i];
//             geoCoord[v['listName']] = v['geo'];
//             dataMark.push({name: v['listName'], value: v['valu'], itemStyle: itemStyle[v.color]});
//         }
//         option.series[1].geoCoord = geoCoord;
//         option.series[1].markPoint.data = dataMark;
//         return new MyChart(lvChart.echarts, lvChart.ecConfig, container, option, 0, 1);
//     }

//     function requireCallback(ec) {
        
//     }

//     requireEcharts(requireCallback);

//     function getChartData(){
//         //地图-国内  点名称  可修改可添加
//         //var geoCoord = {"T&I_SH_DT": [120.70, 29.93] , "Compal_KS_NB": [119.45, 31.39] , "Compal_KS_DT": [119.45, 29.19] , "Wistron ZS_DT": [113.38, 22.52] , "Quanta_SJ_NB": [120.50, 32.53] , "Quanta_SJ_DT": [119.25, 32.43] , "Bitland_HF_NB": [117.34, 32.08] , "BJP_BJ_DT": [116.46, 39.92] , "SHP_SH_NB": [121.35, 28.75] , "SHP_SH_DT": [122.35, 30.15] , "HYP_HY_DT": [115.46, 22.85] , "CDP_CD_DT": [103.01, 30.48] , "Wistron_KS_NB": [120.35, 33.72] , "LCFC_HF_NB": [117.27, 30.86] , "Pegatron_SH_NB": [122.44, 31.19] , "Wistron_CD_NB": [106.17, 31.75] , "Compal_CD_NB": [105.06, 30.67] , "Bitland_HF_DT": [117.04, 33.28],"Pondicherry_IN_NB":[80.58,16.54],"ITU_BR_NB":[90.58,16.54],"Newsan_AR_NB":[92.18,17.34]};
//     	$.ajax({
//     		type: "get",
//     		url: "jsonpcallback/jsonpcallback.js",
//     		dataType: "jsonp",
//     		jsonpCallback:"mapListData"
//     	}).done(function(data) {
//             var myChart4 = drawChart_map('mapWrap',data.mapListData);
//             myChart4.chart.on(lvChart.ecConfig.EVENT.CLICK, function(param){
//                 if(param.seriesIndex > 0){
//                     alert(param.name);
//                 }
//             });
//             myChart4.loadingData();
//             myChart4.chart.component.tooltip.showTip({seriesIndex: "1", seriesName:'city_Type1', name:'Wistron_CD_NB'});
//     	});
//     }
// });