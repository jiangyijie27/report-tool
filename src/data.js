module.exports = {
  // rows 是你每一行的数据
  rows: () => {
    return [
        {
            info_0: "广告项目一",
            info_1: "朋友圈广告",
            info_2: "34,535,254",
            info_3: "43,435,245",
            info_4: "3,532,536",
            info_5: "425.4",
        },
        {
            info_0: "广告项目二",
            info_1: "朋友圈广告",
            info_2: "5,543,533",
            info_3: "2,364,643",
            info_4: "644,253",
            info_5: "425.4",
        },
        {
            info_0: "广告项目三",
            info_1: "朋友圈广告",
            info_2: "8,474,254",
            info_3: "253,644",
            info_4: "55,353",
            info_5: "425.4",
        },
        {
            info_0: "广告项目四",
            info_1: "公众号广告",
            info_2: "9,353,774",
            info_3: "34,258",
            info_4: "2,576",
            info_5: "425.4",
        },
        {
            info_0: "广告项目五",
            info_1: "公众号广告",
            info_2: "12,475,475",
            info_3: "3,535,478",
            info_4: "364,755",
            info_5: "425.4",
        }
    ]
  },

  // columns 是你每一列的配置

  // 一个完整的对象：
  // title:         列名称
  // dataIndex:     这一列的数据索引
  // width:         宽度，没有宽度的列会将剩余的宽度平分
  // type:"number"  指定该项为数字（目前只有 number 这个值）
  // align:"left || center || right" 列对齐方式

  columns: () => {
    return [
      {
        title: "广告项目名称",
        dataIndex: "info_0",
        width: 150
      },
      {
        title: "广告位置",
        dataIndex: "info_1",
        width: 300
      },
      {
        title: "曝光量",
        dataIndex: "info_2",
        align: "right",
        type: "number"
      },
      {
        title: "点击量",
        dataIndex: "info_3",
        align: "right",
        type: "number"
      },
      {
        title: "转发量",
        dataIndex: "info_4",
        align: "right",
        type: "number"
      },
      {
        title: "转化指标",
        dataIndex: "info_5",
        align: "right",
        type: "number"
      }
    ]
  }
}