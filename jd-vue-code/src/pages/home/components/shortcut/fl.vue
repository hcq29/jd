<template>
  <ul class="fl">
    <li @mouseenter="show = !show" @mouseleave="show = !show" class="shortcut_btn">
      <a href="#" class="location">
        <i class="iconfont icon-location"></i>
        <span>{{current_city}}</span>
      </a>
      <div v-show="show" class="areamini">
        <div class="items">
          <div v-for="item in list.cities" :key="item.id" class="item">
            <a
              :data-id="item.id"
              href="#"
              class="city_cur"
            
              v-if="item.name == current_city"
            >{{item.name}}</a>
            <a
              :data-id="item.id"
              href="#"
              class="to_city"
            
              v-else
            >{{item.name}}</a>
          </div>
        </div>
        <div class="areamini_inter">
          <div class="areamini_inter_split"></div>
          <p class="desc">地区专享版本</p>
          <a
            data-id="ga"
            href="#"
            class="other_items"
          
          >中國港澳</a>
        </div>
        <div class="areamini_inter">
          <div class="areamini_inter_split"></div>
          <p class="areamini_inter_desc">Available Sites</p>
          <div class="other_item" v-for="other in list.others" :key="other.id">
            <a
              :data-id="other.id"
              href="#"
              class="other_items"
            
            >
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="'#icon-' + other.icon" />
              </svg>
              {{other.name}}
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ShortcutFl",
  props: {
    list: Array | Object
  },
  data() {
    return {
      show: false,
      current_city: "广东"
    };
  },
  methods: {
  },
  mounted() {}
};
</script>

<style scoped lang='stylus'>
@import '~styles/varibles.styl';

.fl {
  float: left;

  .shortcut_btn {
    position: relative;
    z-index: 3;

    .location {
      width: 1.1rem;
      height: .62rem;
      display: flex;
      justify-content: center;
      cursor: pointer;
    }

    .iconfont {
      color: $bgColor;
    }

    .areamini {
      width: 6.44rem;
      height: auto;

      .items {
        width: 6.1rem;
        height: 4.7rem;
        margin: .17rem;

        .item {
          float: left;
          width: 1.2rem;
          padding: .04rem 0;
          text-align: center;

          .to_city {
            color: #999;
            padding: .13rem .2rem;
          }

          .city_cur {
            color: $white;
            padding: .13rem .2rem;
            background-color: $bgColor;
          }

          .to_city:hover {
            color: $bgColor;
            background-color: #f4f4f4;
          }
        }
      }

      .areamini_inter {
        margin: .2rem 0 .2rem .2rem;

        .areamini_inter_split {
          width: 5.24rem;
          height: 0;
          border-bottom: .02rem dotted rgb(238, 238, 238);
        }

        .other_item {
          margin: .04rem 0 0 .2rem;
          float: left;
          width: 2.68rem;
        }
      }
    }

    .location:hover {
      color: $bgColor;
    }
  }

  .shortcut_btn:hover {
    background: $white;
  }
}
</style>