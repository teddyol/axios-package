<template>
  <div class="hello">
  123
  </div>
</template>

<script>
import { news , mobile} from '@/request/api';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    news({              
        type: 'top', 
        key: 'c8daa367ae358fafe84dffd6f1523b3c'                   
    }).then(res => {
        // 获取数据成功后的其他操作
    })

    mobile({              
        type: 'top', 
        key: 'c8daa367ae358fafe84dffd6f1523b3c'                  
    },'我是').then(res => {
        // 获取数据成功后的其他操作
    })
  }
}
</script>
<style scoped>

</style>
