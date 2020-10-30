<template>
  <div class="report">
    <div>
      <h1>涉及的功能点：</h1>
      <h2>1.展开和折叠效果：只能展示一个，其他收起</h2>
      <h2>2.头部固定，内容区域可以滑动</h2>
      <h2>
        3.内容区域始终固定在页面底部的某个位置 =》
        使用方法：动态切换固定、相对定位
      </h2>
      <h2>4.vant加载更多</h2>
    </div>
    <ul class="years">
      <li
        class="years_item"
        v-for="(item, index) in menuList"
        :key="item.name + index"
      >
        <div class="title" @click="showToggle(item, index)">
          <div class="year">{{ item.name }}</div>
          <img
            class="arrow_img_down"
            v-bind:src="item.isSubShow ? arrow_t : arrow_d"
          />
        </div>
        <div v-show="item.isSubShow" class="content_more">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad(item.name)"
          >
            <ul class="content">
              <li
                v-for="(subItem, index) in item.subItems"
                :key="index"
                @click="skipDetail"
              >
                <div class="name">{{ subItem.name }}</div>
                <div class="times">
                  <div class="left">{{ subItem.minute }}</div>
                  <div class="right">
                    <p>{{ subItem.time }}</p>
                    <img class="right_img" :src="arrow_r" />
                  </div>
                </div>
                <div class="heartImg">
                  <img :src="subItem.pageUrl" alt="" />
                </div>
              </li>
            </ul>
          </van-list>
        </div>
      </li>
    </ul>
    <h1>头部固定-内容可滑动</h1>
    <div class="header_wrap">
      <div class="wrap_item">
        <div class="title">头部区域</div>
        <div class="con">
          <h3>内容区域</h3>
          <p>
            天津北方网讯：昨天，来自俄罗斯亚马尔港的“祖博夫”号LNG船载运着6.9万吨LNG（液化天然气）缓缓驶入位于滨海新区南疆港区的国家管网集团天津液化天然气有限责任公司（简称天津LNG公司）接收站码头。靠泊后，LNG将通过码头上的卸料臂，输入天津LNG接收站的LNG储罐，再经气化设施气化后输入天津市燃气管网，保障津城采暖季的清洁能源供应。（津云新闻编辑孙畅）
          </p>
        </div>
      </div>
    </div>
    <div class="contents">
      <p>固定在底部的某个位置</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'report',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      arrow_d: require('../assets/images/img_down.png'),
      arrow_t: require('../assets/images/img_top.png'),
      arrow_r: require('../assets/images/img_right.png'),
      menuList: [
        {
          name: '2020',
          isSubShow: false,
          subItems: [
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            }
          ]
        },
        {
          name: '2018',
          isSubShow: false,
          subItems: [
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            },
            {
              name: '心跳次数',
              minute: '96 次/分钟',
              time: '3/29 17:23',
              pageUrl: require('../assets/images/content.png')
            }
          ]
        }]
    }
  },
  methods: {
    // 跳转到详情页面
    skipDetail () {
      // this.$router.push('/hw_detail');
    },
    onLoad (name) {
      console.log('加载更多...', name);
      var total = 20;
      // 数组拼接
      this.menuList.map(v => {
        console.log(v.subItems.length)
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (v.subItems.length > total - 2) {
          this.finished = true;
        }
        v.subItems.push({
          name: '心跳次数1111',
          minute: '96 次/分钟',
          time: '3/29 17:23',
          pageUrl: require('../assets/images/content.png'),
          imgUrl: require('../assets/images/img_right.png'),
        });
      })
    },
    // 点击展开折叠菜单事件
    showToggle (item, ind) {
      this.menuList.forEach(i => {
        console.log('点击项', this.menuList[ind].isSubShow);
        console.log('当前数据', i.isSubShow);
        // 判断如果数据中的menuList[i]的show属性不等于当前数据的isSubShow属性那么menuList[i]等于false
        if (i.isSubShow !== this.menuList[ind].isSubShow) {
          i.isSubShow = false;
        }
      });
      item.isSubShow = !item.isSubShow;

      // 底部内容区域：始终位于底部固定位置
      var Oitems = document.querySelector('.contents');
      Oitems.style.position = item.isSubShow ? 'relative' : '';
    }
  }
}
</script>

<style lang='less' scoped>
// 去掉滚动条样式
::-webkit-scrollbar {
  width: 0;
}
// 页面整体样式
.report {
  background-color: #f2f3f5;
  overflow: hidden;
  .years {
    margin: 12px;
    .years_item {
      display: flex; // 头部固定-内容区域滚动  [item区域:包括头部和内容区域]
      flex-direction: column; // 头部固定-内容区域滚动  [item区域:包括头部和内容区域]
      padding: 1px 5px 1px 4px;
      margin-top: 12px;
      background: #ffffff;
      border-radius: 16px;
      max-height: 660px; // 头部固定-内容区域滚动  [item区域:包括头部和内容区域]
      overflow-y: auto;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .year {
          font-family: HarmonyHeiTi-Medium;
          font-size: 16px;
          color: #000000;
          text-align: left;
          line-height: 88px;
          height: 88px;
        }
        .arrow_img_down {
          //   width: 96px;
          height: 12px;
        }
      }
      .content_more {
        overflow-y: auto; // 头部固定-内容区域滚动 [页面内容区域]
        .name {
          margin-top: 10px;
          font-family: HarmonyHeiTi-Medium;
          font-size: 14px;
          color: #000000;
          text-align: left;
          line-height: 22px;
        }
        .times {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 8px 0 11px 0;
          .left {
            opacity: 0.6;
            font-family: HarmonyHeiTi;
            font-size: 14px;
            color: #000000;
            text-align: left;
            line-height: 19px;
          }
          .right {
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.6;
            font-family: Roboto-Regular;
            font-size: 14px;
            color: #000000;
            text-align: right;
            line-height: 19px;
            p {
              padding-right: 7px;
            }
            .right_img {
              width: 12px;
              height: 24px;
            }
          }
        }
        .heartImg {
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .contents {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 20px;
    margin: 64px 12px 0px 12px;
    font-family: HWtext-55ST;
    font-size: 14px;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
  }

  //   demo样式：头部固定-内容可滑动
  .header_wrap {
    .wrap_item {
      display: flex; // 头部固定-内容区域滚动  [item区域:包括头部和内容区域]
      flex-direction: column; // 头部固定-内容区域滚动  [item区域:包括头部和内容区域]
      max-height: 80px;
      border: 1px solid pink;
      padding: 1px 5px 1px 4px;
      background: #ffffff;
      .title {
        font-size: 14px;
      }
      .con {
        overflow-y: auto;
      }
    }
  }
}
</style>
