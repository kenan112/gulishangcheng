<template>
  <div class="pagination">
    <button v-show="pageNo !== 1" @click="$emit('getPageNo', --myPageNo)">
      上一页
    </button>
    <button v-show="startNumAndEndNum.start > 1" @click="setPageNoOne">
      1
    </button>
    <button v-show="startNumAndEndNum.start > 2">···</button>

    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-if="page >= startNumAndEndNum.start"
      :class="{ active: page == pageNo }"
      @click="setPageNo(page)"
    >
      {{ page }}
    </button>

    <button v-show="startNumAndEndNum.end < totalPage - 1">···</button>
    <button v-show="startNumAndEndNum.end < totalPage" @click="setPageNoEnd">
      {{ totalPage }}
    </button>
    <button
      v-show="pageNo !== totalPage"
      @click="$emit('getPageNo', ++myPageNo)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  data() {
    return {
      myPageNo: this.pageNo,
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      let start = 0;
      let end = 0;
      if (continues > totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        }
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { start, end };
    },
  },
  methods: {
    setPageNo(pageNo) {
      if (this.myPageNo == pageNo) return;
      this.myPageNo = pageNo;
      this.$emit("getPageNo", pageNo);
    },
    setPageNoOne() {
      this.myPageNo = 1;
      this.$emit("getPageNo", 1);
    },
    setPageNoEnd() {
      this.myPageNo = this.totalPage;
      this.$emit("getPageNo", this.totalPage);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      // cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>