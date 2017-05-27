import React from 'react'
import PropTypes from 'prop-types'
import { render, Artboard, Text, View } from 'react-sketchapp'
import lodash from "lodash"

// 这里引入你的数据
import data from "./data/0522"

const Document = ({ dataSource }) => {

    // 处理数据的逻辑：
    const important_index = data.find(o => o.state === "重点项目")
    const regular_index = data.find(o => o.state === "常规项目")
    const other_index = lodash.findIndex(data, o => o.state === "其他")

    const categories = data.filter((o, i) => o.state.indexOf("0") > -1)
    let other_category_index
    categories.find((o, i) => {
        if(o.state.indexOf("01") > -1 && i > 0) {
            other_category_index = i
        }
        return o.state.indexOf("01") > -1 && i > 0
    })

    // [
    //     {
    //         state = "01 \U6295\U653e\U7aef\U4f53\U9a8c\U4f18\U5316";
    //     },
    //     {
    //         state = "02 \U4ea7\U54c1\U5f62\U6001";
    //     }
    // ]
    let important_categories = []
    let regular_categories = []

    for (let i = 0; i < other_category_index; i++) {
        important_categories.push(categories[i])
    }

    for (let i = other_category_index; i < categories.length; i++) {
        regular_categories.push(categories[i])
    }

    // [
    //     3,
    //     13
    // ]
    let important_table_index = []
    // [
    //     24,
    //     36,
    //     45
    // ]
    let regular_table_index = []

    important_categories.map((cat ,i) => {
        important_table_index.push(lodash.findIndex(data, o => o.state === cat.state))
    })

    regular_categories.map((cat ,i) => {
        regular_table_index.push(lodash.findIndex(data, o => o.state === cat.state))
    })

    important_table_index.map((o, i) => {
        if(i === important_table_index.length -1) {
            if(regular_table_index[0] - important_table_index[i] < 4) {
                important_table_index.splice(i, 1)
                important_categories.splice(i, 1)
            }
        }
        else {
            if(important_table_index[i+1] - important_table_index[i] < 4) {
                important_table_index.splice(i, 1)
                important_categories.splice(i, 1)
            }
        }
    })

    regular_table_index.map((o, i) => {
        if(i === regular_table_index.length -1) {
            if(other_index - regular_table_index[i] < 4) {
                regular_table_index.splice(i, 1)
                regular_categories.splice(i, 1)
            }
        }
        else {
            if(regular_table_index[i+1] - regular_table_index[i] < 4) {
                regular_table_index.splice(i, 1)
                regular_categories.splice(i, 1)
            }
        }
    })

    let important_tables = []
    let regular_tables = []
    let other_table = []

    for (let j = other_index + 3; j < data.length; j++) {
        if(data[j].title) {
            other_table.push(data[j])
        }
    }

    important_table_index.map((o, i) => {
        const array = []
        if(i === important_table_index.length - 1) {
           for (let j = o + 3; j < regular_table_index[0]; j++) {
               if(data[j].title) {
                   array.push(data[j])
               }
           } 
        }
        else {
            for (let j = o + 3; j < important_table_index[i+1]; j++) {
                if(data[j].title) {
                    array.push(data[j])
                }
            }
        }
        important_tables.push(array)
    })

    regular_table_index.map((o, i) => {
        const array = []
        if(i === regular_table_index.length - 1) {
           for (let j = o + 3; j < other_index; j++) {
               if(data[j].title) {
                   array.push(data[j])
               }
           } 
        }
        else {
            for (let j = o + 3; j < regular_table_index[i+1]; j++) {
                if(data[j].title) {
                    array.push(data[j])
                }
            }
        }
        regular_tables.push(array)
    })

    return (
        <Artboard
            name="平台产品设计组 - 周工作计划"
            style={{
                paddingBottom: 109,
                width: 1060
            }}
        >
            <View
                style={{
                    paddingLeft: 51,
                    height: 181,
                    backgroundColor: "#39bb4a",
                    flexDirection: "row"
                }}
            >
                <View
                    style={{
                        marginRight: 568,
                        width: 227
                    }}
                >
                    <Text
                        style={{
                            marginTop: 47,
                            color: "#fff",
                            fontSize: 32,
                            lineHeight: 44,
                            fontFamily: 'PingFang SC',
                            fontWeight: 400,
                            letterSpacing: 0.3,
                        }}
                    >
                        微信广告设计组
                    </Text>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 32,
                            fontFamily: 'PingFang SC',
                            letterSpacing: 0.3,
                            lineHeight: 44,
                            fontWeight: 200
                        }}
                    >
                        工作双周报
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 57,
                        flexDirection: "row",
                        color: "rgba(255, 255, 255, .8)",
                        fontSize: 30,
                        fontFamily: "DIN Alternate",
                        fontWeight: 700,
                        letterSpacing: 1.88
                    }}
                >
                    {data[0].id.replace(/ /g, '')}
                </Text>
                <Text
                    style={{
                        top: 122,
                        left: -43,
                        width: 40,
                        height: 3,
                        backgroundColor: "#fff"
                    }}
                ></Text>
            </View>
            <View
                style={{paddingTop: 40, paddingLeft: 50, paddingRight: 50}}
            >
                <Text
                    style={{
                        color: "#9B9B9B",
                        fontSize: 18,
                        lineHeight: 25,
                        flexDirection: "row",
                        marginLeft: 1,
                        marginBottom: 74,
                        fontFamily: "PingFang SC"
                    }}
                >
                    Hi all，和大家汇报上2周（{data[0].id}) 社交广告设计中心微信广告设计组的工作进展，以下为具体内容：
                </Text>

                <View>
                    <Text
                        style={{
                            color: "#39BB4A",
                            fontSize: 24,
                            fontFamily: "PingFang SC"
                        }}
                    >
                        重点项目
                        <View
                            style={{
                                width: 41, 
                                height: 3, 
                                backgroundColor: "#39BB4A",
                                marginTop: -3
                            }}
                        >
                        </View>
                    </Text>
                    {
                        important_categories.map((o, i) => {
                            return <View key={i}>
                                <Text
                                    style={{
                                        flexDirection: "row",
                                        fontFamily: "PingFang SC",
                                        fontSize: 20,
                                        marginTop: 40,
                                        marginBottom: 21
                                    }}
                                >
                                    <Text
                                        style={{
                                            marginRight: 13,
                                            color: "#9B9B9B"
                                        }}
                                    >
                                        {o.state.substr(0, o.state.indexOf(" "))}
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#000",
                                            fontWeight: 600
                                        }}
                                    >
                                        {o.state.split(" ").pop()}
                                    </Text>
                                </Text>
                                <View
                                    style={{
                                        borderTopWidth: 1,
                                        borderTopColor: "#cdcdcd",
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#e8e8e8",
                                        backgroundColor: "#f8f9fb",
                                        flexDirection: "row"
                                    }}
                                >
                                    <Text style={{
                                        lineHeight: 48,
                                        color: "#9B9B9B",
                                        fontSize: 16,
                                        width: 106,
                                        marginLeft: 21
                                    }}>
                                        状态
                                    </Text>
                                    <Text style={{
                                        lineHeight: 48,
                                        color: "#9B9B9B",
                                        fontSize: 16,
                                        width: 638
                                    }}>
                                        需求描述
                                    </Text>
                                    <Text style={{
                                        lineHeight: 48,
                                        color: "#9B9B9B",
                                        fontSize: 16
                                    }}>
                                        负责人
                                    </Text>
                                </View>
                                {
                                    important_tables[i].find(o => o.state === "已完成") ? <View>
                                        <View
                                            style={{
                                                flexDirection: "row"
                                            }}
                                        >
                                            <Text style={{
                                                lineHeight: 48,
                                                color: "#4A4A4A",
                                                fontSize: 16,
                                                width: 106,
                                                marginLeft: 21,
                                                fontWeight: 500
                                            }}>
                                                已完成
                                            </Text>
                                            <View>
                                                {
                                                    important_tables[i].map((table, j) => {

                                                        if(table.state === "已完成") {
                                                            return <View
                                                                key={j}
                                                                style={{
                                                                    flexDirection: "row",
                                                                    borderBottomWidth: 1,
                                                                    borderBottomColor: "#e8e8e8"
                                                                }}
                                                            >
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#4A4A4A",
                                                                    fontSize: 16,
                                                                    width: 638,
                                                                    flexDirection: "row"
                                                                }}>
                                                                    {table.catdes}
                                                                    <Text
                                                                        style={{
                                                                            marginLeft: 13,
                                                                            color: "#9B9B9B",
                                                                            fontFamily: "PingFang SC"
                                                                        }}
                                                                    >
                                                                        {table.title}
                                                                    </Text>
                                                                </Text>
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#9B9B9B",
                                                                    fontSize: 16,
                                                                    fontFamily: "PingFang SC",
                                                                    width: 197
                                                                }}>
                                                                    {table.id}
                                                                </Text>
                                                            </View>
                                                        }
                                                    })
                                                }
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                top: -1,
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#e8e8e8"
                                            }}
                                        ></View>
                                    </View> : <View style={{width: 0, height: 0}}></View>
                                }
                                {
                                    important_tables[i].find(o => o.state === "进行中") ? <View>
                                        <View
                                            style={{
                                                flexDirection: "row"
                                            }}
                                        >
                                            <Text style={{
                                                lineHeight: 48,
                                                color: "#4A4A4A",
                                                fontSize: 16,
                                                width: 106,
                                                marginLeft: 21,
                                                fontWeight: 500
                                            }}>
                                                进行中
                                            </Text>
                                            <View>
                                                {
                                                    important_tables[i].map((table, j) => {

                                                        if(table.state === "进行中") {
                                                            return <View
                                                                key={j}
                                                                style={{
                                                                    flexDirection: "row",
                                                                    borderBottomWidth: 1,
                                                                    borderBottomColor: "#e8e8e8"
                                                                }}
                                                            >
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#4A4A4A",
                                                                    fontSize: 16,
                                                                    width: 638,
                                                                    flexDirection: "row"
                                                                }}>
                                                                    {table.catdes}
                                                                    <Text
                                                                        style={{
                                                                            marginLeft: 13,
                                                                            color: "#9B9B9B",
                                                                            fontFamily: "PingFang SC"
                                                                        }}
                                                                    >
                                                                        {table.title}
                                                                    </Text>
                                                                </Text>
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#9B9B9B",
                                                                    fontSize: 16,
                                                                    fontFamily: "PingFang SC",
                                                                    width: 197
                                                                }}>
                                                                    {table.id}
                                                                </Text>
                                                            </View>
                                                        }
                                                    })
                                                }
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                top: -1,
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#e8e8e8"
                                            }}
                                        ></View>
                                    </View>: <View style={{width: 0, height: 0}}></View>
                                }
                                {
                                    important_tables[i].find(o => o.state === "待启动") ? <View>
                                        <View
                                            style={{
                                                flexDirection: "row"
                                            }}
                                        >
                                            <Text style={{
                                                lineHeight: 48,
                                                color: "#4A4A4A",
                                                fontSize: 16,
                                                width: 106,
                                                marginLeft: 21,
                                                fontWeight: 500
                                            }}>
                                                待启动
                                            </Text>
                                            <View>
                                                {
                                                    important_tables[i].map((table, j) => {

                                                        if(table.state === "待启动") {
                                                            return <View
                                                                key={j}
                                                                style={{
                                                                    flexDirection: "row",
                                                                    borderBottomWidth: 1,
                                                                    borderBottomColor: "#e8e8e8"
                                                                }}
                                                            >
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#4A4A4A",
                                                                    fontSize: 16,
                                                                    width: 638,
                                                                    flexDirection: "row"
                                                                }}>
                                                                    {table.catdes}
                                                                    <Text
                                                                        style={{
                                                                            marginLeft: 13,
                                                                            color: "#9B9B9B",
                                                                            fontFamily: "PingFang SC"
                                                                        }}
                                                                    >
                                                                        {table.title}
                                                                    </Text>
                                                                </Text>
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#9B9B9B",
                                                                    fontSize: 16,
                                                                    fontFamily: "PingFang SC",
                                                                    width: 197
                                                                }}>
                                                                    {table.id}
                                                                </Text>
                                                            </View>
                                                        }
                                                    })
                                                }
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                top: -1,
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#e8e8e8"
                                            }}
                                        ></View>
                                    </View> : <View style={{width: 0, height: 0}}></View>
                                }
                            </View>
                        })
                    }
                </View>
                <View>
                    <Text
                        style={{
                            color: "#39BB4A",
                            fontSize: 24,
                            fontFamily: "PingFang SC",
                            marginTop: 53
                        }}
                    >
                        常规项目
                        <View
                            style={{
                                width: 41, 
                                height: 3, 
                                backgroundColor: "#39BB4A",
                                marginTop: -3
                            }}
                        >
                        </View>
                    </Text>
                    {
                        regular_categories.map((o, i) => {
                            return <View key={i}>
                                <Text
                                    style={{
                                        flexDirection: "row",
                                        fontFamily: "PingFang SC",
                                        fontSize: 20,
                                        marginTop: 40,
                                        marginBottom: 21
                                    }}
                                >
                                    <Text
                                        style={{
                                            marginRight: 13,
                                            color: "#9B9B9B"
                                        }}
                                    >
                                        {o.state.substr(0, o.state.indexOf(" "))}
                                    </Text>
                                    <Text
                                        style={{
                                            color: "#000",
                                            fontWeight: 600
                                        }}
                                    >
                                        {o.state.split(" ").pop()}
                                    </Text>
                                </Text>
                                <View
                                    style={{
                                        borderTopWidth: 1,
                                        borderTopColor: "#cdcdcd",
                                        borderBottomWidth: 1,
                                        borderBottomColor: "#e8e8e8",
                                        backgroundColor: "#f8f9fb",
                                        flexDirection: "row"
                                    }}
                                >
                                    <Text style={{
                                        lineHeight: 48,
                                        color: "#9B9B9B",
                                        fontSize: 16,
                                        width: 106,
                                        marginLeft: 21
                                    }}>
                                        状态
                                    </Text>
                                    <Text style={{
                                        lineHeight: 48,
                                        color: "#9B9B9B",
                                        fontSize: 16,
                                        width: 638
                                    }}>
                                        需求描述
                                    </Text>
                                    <Text style={{
                                        lineHeight: 48,
                                        color: "#9B9B9B",
                                        fontSize: 16
                                    }}>
                                        负责人
                                    </Text>
                                </View>
                                {
                                    regular_tables[i].find(o => o.state === "已完成") ? <View>
                                        <View
                                            style={{
                                                flexDirection: "row"
                                            }}
                                        >
                                            <Text style={{
                                                lineHeight: 48,
                                                color: "#4A4A4A",
                                                fontSize: 16,
                                                width: 106,
                                                marginLeft: 21,
                                                fontWeight: 500
                                            }}>
                                                已完成
                                            </Text>
                                            <View>
                                                {
                                                    regular_tables[i].map((table, j) => {

                                                        if(table.state === "已完成") {
                                                            return <View
                                                                key={j}
                                                                style={{
                                                                    flexDirection: "row",
                                                                    borderBottomWidth: 1,
                                                                    borderBottomColor: "#e8e8e8"
                                                                }}
                                                            >
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#4A4A4A",
                                                                    fontSize: 16,
                                                                    width: 638,
                                                                    flexDirection: "row"
                                                                }}>
                                                                    {table.catdes}
                                                                    <Text
                                                                        style={{
                                                                            marginLeft: 13,
                                                                            color: "#9B9B9B",
                                                                            fontFamily: "PingFang SC"
                                                                        }}
                                                                    >
                                                                        {table.title}
                                                                    </Text>
                                                                </Text>
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#9B9B9B",
                                                                    fontSize: 16,
                                                                    fontFamily: "PingFang SC",
                                                                    width: 197
                                                                }}>
                                                                    {table.id}
                                                                </Text>
                                                            </View>
                                                        }
                                                    })
                                                }
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                top: -1,
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#e8e8e8"
                                            }}
                                        ></View>
                                    </View> : <View style={{width: 0, height: 0}}></View>
                                }
                                {
                                    regular_tables[i].find(o => o.state === "进行中") ? <View>
                                        <View
                                            style={{
                                                flexDirection: "row"
                                            }}
                                        >
                                            <Text style={{
                                                lineHeight: 48,
                                                color: "#4A4A4A",
                                                fontSize: 16,
                                                width: 106,
                                                marginLeft: 21,
                                                fontWeight: 500
                                            }}>
                                                进行中
                                            </Text>
                                            <View>
                                                {
                                                    regular_tables[i].map((table, j) => {

                                                        if(table.state === "进行中") {
                                                            return <View
                                                                key={j}
                                                                style={{
                                                                    flexDirection: "row",
                                                                    borderBottomWidth: 1,
                                                                    borderBottomColor: "#e8e8e8"
                                                                }}
                                                            >
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#4A4A4A",
                                                                    fontSize: 16,
                                                                    width: 638,
                                                                    flexDirection: "row"
                                                                }}>
                                                                    {table.catdes}
                                                                    <Text
                                                                        style={{
                                                                            marginLeft: 13,
                                                                            color: "#9B9B9B",
                                                                            fontFamily: "PingFang SC"
                                                                        }}
                                                                    >
                                                                        {table.title}
                                                                    </Text>
                                                                </Text>
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#9B9B9B",
                                                                    fontSize: 16,
                                                                    fontFamily: "PingFang SC",
                                                                    width: 197
                                                                }}>
                                                                    {table.id}
                                                                </Text>
                                                            </View>
                                                        }
                                                    })
                                                }
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                top: -1,
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#e8e8e8"
                                            }}
                                        ></View>
                                    </View>: <View style={{width: 0, height: 0}}></View>
                                }
                                {
                                    regular_tables[i].find(o => o.state === "待启动") ? <View>
                                        <View
                                            style={{
                                                flexDirection: "row"
                                            }}
                                        >
                                            <Text style={{
                                                lineHeight: 48,
                                                color: "#4A4A4A",
                                                fontSize: 16,
                                                width: 106,
                                                marginLeft: 21,
                                                fontWeight: 500
                                            }}>
                                                待启动
                                            </Text>
                                            <View>
                                                {
                                                    regular_tables[i].map((table, j) => {

                                                        if(table.state === "待启动") {
                                                            return <View
                                                                key={j}
                                                                style={{
                                                                    flexDirection: "row",
                                                                    borderBottomWidth: 1,
                                                                    borderBottomColor: "#e8e8e8"
                                                                }}
                                                            >
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#4A4A4A",
                                                                    fontSize: 16,
                                                                    width: 638,
                                                                    flexDirection: "row"
                                                                }}>
                                                                    {table.catdes}
                                                                    <Text
                                                                        style={{
                                                                            marginLeft: 13,
                                                                            color: "#9B9B9B",
                                                                            fontFamily: "PingFang SC"
                                                                        }}
                                                                    >
                                                                        {table.title}
                                                                    </Text>
                                                                </Text>
                                                                <Text style={{
                                                                    lineHeight: 48,
                                                                    color: "#9B9B9B",
                                                                    fontSize: 16,
                                                                    fontFamily: "PingFang SC",
                                                                    width: 197
                                                                }}>
                                                                    {table.id}
                                                                </Text>
                                                            </View>
                                                        }
                                                    })
                                                }
                                            </View>
                                        </View>
                                        <View
                                            style={{
                                                top: -1,
                                                borderBottomWidth: 1,
                                                borderBottomColor: "#e8e8e8"
                                            }}
                                        ></View>
                                    </View> : <View style={{width: 0, height: 0}}></View>
                                }
                            </View>
                        })
                    }
                </View>
                <View>
                    <Text
                        style={{
                            color: "#39BB4A",
                            fontSize: 24,
                            fontFamily: "PingFang SC",
                            marginTop: 53,
                            marginBottom: 40
                        }}
                    >
                        其他
                        <View
                            style={{
                                width: 41, 
                                height: 3, 
                                backgroundColor: "#39BB4A",
                                marginTop: -3
                            }}
                        >
                        </View>
                    </Text>
                    {
                        other_table.find(o => o.state === "已完成") ? <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    borderTopWidth: 1,
                                    borderTopColor: "#e8e8e8"
                                }}
                            >
                                <Text style={{
                                    lineHeight: 48,
                                    color: "#4A4A4A",
                                    fontSize: 16,
                                    width: 106,
                                    marginLeft: 21,
                                    fontWeight: 500
                                }}>
                                    已完成
                                </Text>
                                <View>
                                    {
                                        other_table.map((table, j) => {
                                            if(table.state === "已完成") {
                                                return <View
                                                    key={j}
                                                    style={{
                                                        flexDirection: "row",
                                                        borderBottomWidth: 1,
                                                        borderBottomColor: "#e8e8e8"
                                                    }}
                                                >
                                                    <Text style={{
                                                        lineHeight: 48,
                                                        color: "#4A4A4A",
                                                        fontSize: 16,
                                                        width: 638,
                                                        flexDirection: "row"
                                                    }}>
                                                        {table.catdes}
                                                        <Text
                                                            style={{
                                                                marginLeft: 13,
                                                                color: "#9B9B9B",
                                                                fontFamily: "PingFang SC"
                                                            }}
                                                        >
                                                            {table.title}
                                                        </Text>
                                                    </Text>
                                                    <Text style={{
                                                        lineHeight: 48,
                                                        color: "#9B9B9B",
                                                        fontSize: 16,
                                                        fontFamily: "PingFang SC",
                                                        width: 197
                                                    }}>
                                                        {table.id}
                                                    </Text>
                                                </View>
                                            }
                                        })
                                    }
                                </View>
                            </View>
                            <View
                                style={{
                                    top: -1,
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#e8e8e8"
                                }}
                            ></View>
                        </View> : <View style={{width: 0, height: 0}}></View>
                    }
                    {
                        other_table.find(o => o.state === "进行中") ? <View>
                            <View
                                style={{
                                    flexDirection: "row"
                                }}
                            >
                                <Text style={{
                                    lineHeight: 48,
                                    color: "#4A4A4A",
                                    fontSize: 16,
                                    width: 106,
                                    marginLeft: 21,
                                    fontWeight: 500
                                }}>
                                    进行中
                                </Text>
                                <View>
                                    {
                                        other_table.map((table, j) => {
                                            if(table.state === "进行中") {
                                                return <View
                                                    key={j}
                                                    style={{
                                                        flexDirection: "row",
                                                        borderBottomWidth: 1,
                                                        borderBottomColor: "#e8e8e8"
                                                    }}
                                                >
                                                    <Text style={{
                                                        lineHeight: 48,
                                                        color: "#4A4A4A",
                                                        fontSize: 16,
                                                        width: 638,
                                                        flexDirection: "row"
                                                    }}>
                                                        {table.catdes}
                                                        <Text
                                                            style={{
                                                                marginLeft: 13,
                                                                color: "#9B9B9B",
                                                                fontFamily: "PingFang SC"
                                                            }}
                                                        >
                                                            {table.title}
                                                        </Text>
                                                    </Text>
                                                    <Text style={{
                                                        lineHeight: 48,
                                                        color: "#9B9B9B",
                                                        fontSize: 16,
                                                        fontFamily: "PingFang SC",
                                                        width: 197
                                                    }}>
                                                        {table.id}
                                                    </Text>
                                                </View>
                                            }
                                        })
                                    }
                                </View>
                            </View>
                            <View
                                style={{
                                    top: -1,
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#e8e8e8"
                                }}
                            ></View>
                        </View> : <View style={{width: 0, height: 0}}></View>
                    }
                    {
                        other_table.find(o => o.state === "待启动") ? <View>
                            <View
                                style={{
                                    flexDirection: "row"
                                }}
                            >
                                <Text style={{
                                    lineHeight: 48,
                                    color: "#4A4A4A",
                                    fontSize: 16,
                                    width: 106,
                                    marginLeft: 21,
                                    fontWeight: 500
                                }}>
                                    待启动
                                </Text>
                                <View>
                                    {
                                        other_table.map((table, j) => {
                                            if(table.state === "待启动") {
                                                return <View
                                                    key={j}
                                                    style={{
                                                        flexDirection: "row",
                                                        borderBottomWidth: 1,
                                                        borderBottomColor: "#e8e8e8"
                                                    }}
                                                >
                                                    <Text style={{
                                                        lineHeight: 48,
                                                        color: "#4A4A4A",
                                                        fontSize: 16,
                                                        width: 638,
                                                        flexDirection: "row"
                                                    }}>
                                                        {table.catdes}
                                                        <Text
                                                            style={{
                                                                marginLeft: 13,
                                                                color: "#9B9B9B",
                                                                fontFamily: "PingFang SC"
                                                            }}
                                                        >
                                                            {table.title}
                                                        </Text>
                                                    </Text>
                                                    <Text style={{
                                                        lineHeight: 48,
                                                        color: "#9B9B9B",
                                                        fontSize: 16,
                                                        fontFamily: "PingFang SC",
                                                        width: 197
                                                    }}>
                                                        {table.id}
                                                    </Text>
                                                </View>
                                            }
                                        })
                                    }
                                </View>
                            </View>
                            <View
                                style={{
                                    top: -1,
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#e8e8e8"
                                }}
                            ></View>
                        </View> : <View style={{width: 0, height: 0}}></View>
                    }
                </View>
            </View>
        </Artboard>
    )
}

Document.propTypes = {
    dataSource: PropTypes.array
}

export default (context) => {
    render(<Document dataSource={data} />, context.document.currentPage())
}
