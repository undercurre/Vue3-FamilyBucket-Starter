<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-22 01:25:40
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-22 22:00:35
 * @FilePath: \teick\src\view\analysisPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <el-descriptions
      title="分析结果"
      direction="vertical"
      :column="4"
      size="default"
      border
    >
      <div
        v-for="item in answerStore.answers"
        :key="item.id"
      >
        <el-descriptions-item
          label="Question"
          >{{ item.attributes.content }}</el-descriptions-item
        >
        <el-descriptions-item
          label="Answer"
          >{{ item.answer }}</el-descriptions-item
        >
      </div>
    </el-descriptions>

    <div>
      <h2>{{ getAnalysisResult(answerStore.answers) }}</h2>
      <p>注意：本测试中的渣男仅针对您与他这段关系而言。</p>
      <p>
        如果选项里面有多项是“未留意”建议添加客服获取完整问题，平时可以多做留意后再测试一次。
      </p>
      <p>
        某些选项而产生的“渣男”答案并不是不可逆，也有些选项产生的“渣男”答案是不可逆的。
      </p>
      <p>想了解更多细节，可添加专属客服进行一对一咨询。</p>
    </div>

    <div>
      <el-button
        style="margin-top: 60px;"
        :plain="true"
        type="primary"
        @click="toTest"
        >查看以往记录</el-button
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useAnswerStore } from '../store/answer'
import { useTestStore } from '../store/test'
import { useRouter } from 'vue-router';
import { getAnalysisResult } from '../config/analysis'
import { ElMessage } from 'element-plus';

const answerStore = useAnswerStore()

onMounted(() => {
    ElMessage({
      showClose: true,
      message: '支付成功',
      type: 'success',
    })
    useTestStore().tests.push({
        answers: answerStore.answers,
        finishTime: new Date(),
        result: getAnalysisResult(answerStore.answers)
    })
})

const router = useRouter()

function toTest() {
  router.push('/manage')
}
</script>
