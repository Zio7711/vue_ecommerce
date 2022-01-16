<template>
  <div class="pay-main">
    <div class="pay-container">
      <div class="checkout-tit">
        <h4 class="tit-txt">
          <span class="success-icon"></span>
          <span class="success-info"
            >订单提交成功，请您及时付款，以便尽快为您发货~~</span
          >
        </h4>
        <div class="payMark">
          <span class="fl"
            >请您在提交订单<em class="orange time">4小时</em
            >之内完成支付，超时订单会自动取消。订单号：<em>{{
              orderId
            }}</em></span
          >
          <span class="fr"
            ><em class="lead">应付金额：</em
            ><em class="orange money">￥{{ payInfo.totalFee }}</em></span
          >
        </div>
      </div>
      <div class="checkout-info">
        <h4>重要说明：</h4>
        <ol>
          <li>
            尚品汇商城支付平台目前支持<span class="zfb">支付宝</span>支付方式。
          </li>
          <li>其它支付渠道正在调试中，敬请期待。</li>
          <li>为了保证您的购物支付流程顺利完成，请保存以下支付宝信息。</li>
        </ol>
        <h4>
          支付宝账户信息：（很重要，<span class="save">请保存！！！</span>）
        </h4>
      </div>
      <div class="submit">
        <a class="btn" @click="open">立即支付</a>
      </div>
    </div>
  </div>
</template>

<script>
  import QRCode from 'qrcode';

  export default {
    name: 'Pay',
    data() {
      return {
        payInfo: {},
        timer: null,
        code: '',
      };
    },
    computed: {
      orderId() {
        return this.$route.query.orderId;
      },
    },

    methods: {
      async getPayInfo() {
        let result = await this.$API.reqPayInfo(this.orderId);
        if (result.code === 200) {
          this.payInfo = result.data;
        }
      },

      async open() {
        let url = await QRCode.toDataURL(this.payInfo.codeUrl);

        this.$alert(`<img src=${url} />`, '请你微信支付', {
          dangerouslyUseHTMLString: true,
          center: true,
          showCancelButton: true,
          cancelButtonText: '支付遇见问题',
          confirmButtonText: '已支付成功',
          showClose: false,
          beforeClose: (type, instance, done) => {
            if (type === 'cancel') {
              alert('Please contact manager');
              clearInterval(this.timer);
              this.timer = null;
              done();
            } else {
              // if (this.code === 200) {
              clearInterval(this.timer);
              this.timer = null;
              done();
              this.$router.push('/paysuccess');
              // }
            }
          },
        });

        if (!this.timer) {
          this.timer = setInterval(async () => {
            let result = await this.$API.reqPayStatus(this.orderId);
            if (result.code === 200) {
              clearInterval(this.timer);
              this.timer = null;

              this.code = result.code;
              this.$msgbox.close();
              this.$router.push('/paysuccess');
            }
          }, 1000);
        }
      },
    },

    mounted() {
      this.getPayInfo();
    },
  };
</script>

<style lang="less" scoped>
  .pay-main {
    margin-bottom: 20px;

    .pay-container {
      margin: 0 auto;
      width: 1200px;

      a:hover {
        color: #4cb9fc;
      }

      .orange {
        color: #008060;
      }

      .money {
        font-size: 18px;
      }

      .zfb {
        color: #008060;
        font-weight: 700;
      }

      .checkout-tit {
        padding: 10px;

        .tit-txt {
          font-size: 14px;
          line-height: 21px;

          .success-icon {
            width: 30px;
            height: 30px;
            display: inline-block;
            background: url(./images/icon.png) no-repeat 0 0;
          }

          .success-info {
            padding: 0 8px;
            line-height: 30px;
            vertical-align: top;
          }
        }

        .payMark {
          overflow: hidden;
          line-height: 26px;
          text-indent: 38px;

          .fl {
            float: left;
          }

          .fr {
            float: right;

            .lead {
              margin-bottom: 18px;
              font-size: 15px;
              font-weight: 400;
              line-height: 22.5px;
            }
          }
        }
      }

      .checkout-info {
        padding-left: 25px;
        padding-bottom: 15px;
        margin-bottom: 10px;
        border: 2px solid #008060;

        h4 {
          margin: 9px 0;
          font-size: 14px;
          line-height: 21px;
          color: #008060;
        }

        ol {
          padding-left: 25px;
          list-style-type: decimal;
          line-height: 24px;
          font-size: 14px;
        }

        ul {
          padding-left: 25px;
          list-style-type: disc;
          line-height: 24px;
          font-size: 14px;
        }
      }

      .checkout-steps {
        border: 1px solid #ddd;
        padding: 25px;

        .hr {
          height: 1px;
          background-color: #ddd;
        }

        .step-tit {
          line-height: 36px;
          margin: 15px 0;
        }

        .step-cont {
          margin: 0 10px 12px 20px;

          ul {
            font-size: 0;

            li {
              margin: 2px;
              display: inline-block;
              padding: 5px 20px;
              border: 1px solid #ddd;
              cursor: pointer;
              line-height: 18px;
            }
          }
        }
      }

      .submit {
        text-align: center;

        .btn {
          display: inline-block;
          padding: 15px 45px;
          margin: 15px 0 10px;
          font: 18px '微软雅黑';
          font-weight: 700;
          border-radius: 0;
          background-color: #008060;
          border: 1px solid #008060;
          color: #fff;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
        }
      }
    }
  }
</style>
