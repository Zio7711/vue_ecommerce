<template>
  <div class="pagination">
    <button>1</button>
    <button>上一页</button>
    <button>···</button>

    <!-- eslint-disable -->
    <button
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      v-if="page >= startNumAndEndNum.start"
    >
      {{ page }}
    </button>
    <!-- eslint enable -->

    <button>···</button>
    <button>{{ totalPage }}</button>
    <button>上一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',

    props: ['pageNo', 'pageSize', 'continues', 'total'],

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
            end = this.continues;
          }

          if (end > totalPage) {
            start = totalPage - continues + 1;
            end = totalPage;
          }
        }

        return { start, end };
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
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
