<template>
  <header class="header">
    <div class="header-left">
      <a href="###">
        <svg
          width="37px"
          viewBox="0 0 137 121"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="linearGradient-1"
            >
              <stop stop-color="#65B687" offset="0%"></stop>
              <stop stop-color="#65B687" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g transform="translate(0.614194, 0.000000)">
              <path
                d="M4.76825426,36.39178 L64.6796577,116.702201 C66.0006013,118.472908 68.5068793,118.837514 70.2775862,117.51657 C70.586905,117.285819 70.8612037,117.01152 71.0919548,116.702201 L131.003358,36.39178 C132.324302,34.621073 131.959697,32.1147951 130.18899,30.7938515 C129.498089,30.2784412 128.659179,30 127.79721,30 L104.122175,30 C103.808512,30 103.513022,30.1471709 103.324045,30.3975147 L68.6852185,76.2845819 C68.3524751,76.7253769 67.7253982,76.81297 67.2846032,76.4802265 C67.2102252,76.4240807 67.1440605,76.3578138 67.0880296,76.2833492 L32.5621193,30.3987473 C32.3732021,30.1476782 32.0772663,30 31.7630603,30 L7.97440281,30 C5.76526381,30 3.97440281,31.790861 3.97440281,34 C3.97440281,34.8619694 4.25284397,35.7008795 4.76825426,36.39178 Z"
                fill="url(#linearGradient-1)"
              ></path>
              <circle
                fill="#39485C"
                cx="67.3858063"
                cy="15"
                r="15"
              ></circle>
            </g>
          </g>
        </svg>
        <!-- <div class="header-title">Vion</div> -->
      </a>
      <div class="search" v-if="searchVisible">
        <v-icon name="Search" />
        <input
          type="text"
          placeholder="搜索组件..."
          :value="keyword"
          @input="handleInput"
          @keyup="handleKeyUp"
        />
        <ul class="popup-list" v-if="matchedNav.length > 0">
          <li
            v-for="(item, index) in matchedNav"
            :key="index"
            @click="handleClear"
            :class="{ on: index === current }"
          >
            <router-link :to="item.path"
              >{{ item.name }} {{ item.label }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="header-right">
      <div class="version-select">
        <span class="version"> {{ version }} </span>
      </div>
      <a
        class="code-group"
        href="https://github.com/Nice-PLQ/vion"
        target="_blank"
      >
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
        >
          <path
            d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </div>
  </header>
</template>

<script>
import { version } from '../../../version';
export default {
  props: ['navList', 'searchVisible'],
  data() {
    return {
      matchedNav: [],
      keyword: '',
      current: -1,
      version,
      downloadCount: '',
      showVersionList: false,
    };
  },
  mounted() {
    document.addEventListener(
      'click',
      () => {
        if (this.matchedNav.length) {
          this.handleClear();
        }
        if (this.showVersionList) {
          this.showVersionList = false;
        }
      },
      false
    );
  },
  methods: {
    handleInput(e) {
      const { value } = e.target;
      this.keyword = value;
      const matchedNav = [];
      this.navList.forEach((nav) => {
        nav.children.forEach((item) => {
          if (
            item.type === 2 &&
            (item.name.toLowerCase().includes(value) ||
              item.label.includes(value))
          ) {
            matchedNav.push(item);
          }
        });
      });

      this.matchedNav = matchedNav;
      if (matchedNav.length === 0) {
        this.current = -1;
      }
    },
    handleKeyUp(e) {
      const { code } = e;
      if (code === 'ArrowDown') {
        this.current += 1;
        if (this.current > this.matchedNav.length - 1) {
          this.current = 0;
        }
      } else if (code === 'ArrowUp') {
        this.current -= 1;
        if (this.current < 0) {
          this.current = this.matchedNav.length - 1;
        }
      }

      if (code === 'Enter' && this.current !== -1) {
        const comp = this.matchedNav[this.current];
        this.$router.push(comp.path).catch(() => {});
        this.handleClear();
      }
    },

    handleClear() {
      this.matchedNav = [];
      this.keyword = '';
      this.current = -1;
    },

    handleToggleShow() {
      this.$emit('onVisibleChange');
    },
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>
