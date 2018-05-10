<template>
  <mn-scroller>
    <mn-container>
      <mn-section>
        <mn-letter>
          <mn-letter-body>
            <h1>Hi</h1>
            <small>I am Vue Human!</small>
          </mn-letter-body>
        </mn-letter>

        <mn-card>
          <mn-card-item>
            <mn-card-body>Hello World!</mn-card-body>
          </mn-card-item>
          <mn-card-item>
            <mn-card-body>
              Welcome to use vue tempalte with vue-human.
            </mn-card-body>
          </mn-card-item>
        </mn-card>

        <mn-section-btn>
          <mn-btn :icon="icons.chatbubbleWorking" theme="primary" @click="bubbleClick()">Start</mn-btn>
          <mn-btn theme="secondary-link" @click="signIn">Sign in</mn-btn>
        </mn-section-btn>
      </mn-section>
    </mn-container>
  </mn-scroller>
</template>

<script>
  import { getCouponList } from '../../axios/coupons'
  import { SignIn } from '@freshservice/bridge'
  export default {
    data () {
      return {
        icons: {
          chatbubbleWorking: require('vue-human-icons/js/iconic/chatbubble-working')
        }
      }
    },
    methods: {
      async bubbleClick () {
        // let promise = this.onAsyncGetCouponList()
        // promise.then(response => {
        //   console.info(response, 11111)
        // })
        const token = JSON.parse(window.localStorage.getItem('TOCTOKEN'))
        const city = JSON.parse(window.localStorage.getItem('TOCCITY'))
        const data = {
          accesstoken: token.AccessToken,
          customerGuid: token.CUstomerGuid,
          cityFlag: city.CityFlag
        }
        const response = await getCouponList(data)
        console.log(response)
      },
      async onAsyncGetCouponList () {
        let data = {
          accesstoken: undefined,
          customerGuid: undefined,
          cityFlag: 'sz',
          phone: undefined
        }
        await getCouponList(data)
      },
      signIn () {
        SignIn.init({test: true}).execute()
      }
    }
  }
</script>
