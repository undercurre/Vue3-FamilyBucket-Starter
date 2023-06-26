<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-22 01:25:40
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-23 01:12:57
 * @FilePath: \teick\src\view\testPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div
      class="container"
      :style="{ transform: `translateX(-${translateX}vw)` }"
    >
      <div
        class="card"
        v-for="(item,index) in answerStore.answers"
        :key="item.id"
      >
        <div class="question">
          <h3>{{ item.attributes.content }}</h3>
          <el-radio-group
            v-if="item.attributes.selectors.data.length > 0"
            v-model="item.answer"
          >
            <el-radio
              v-for="selector in item.attributes.selectors.data"
              :key="selector.id"
              :label="selector.id.toString()"
              >{{ selector.attributes.text }}</el-radio
            >
          </el-radio-group>
          <el-input
            v-if="item.attributes.selectors.data.length === 0"
            v-model="item.answer"
            placeholder="Please input"
          />
        </div>
        <div class="btn">
          <el-button
            :plain="true"
            type="primary"
            v-if="index === 0"
            @click="toManage"
            >查看记录</el-button
          >
          <el-button
            :plain="true"
            type="primary"
            v-if="index !== 0"
            @click="toLeft"
            >上一题</el-button
          >
          <el-button
            v-if="index !== answerStore.answers.length - 1"
            :plain="true"
            type="primary"
            :disabled="item.answer === ''"
            @click="toRight"
            >下一题</el-button
          >
          <el-button
            v-if="index === answerStore.answers.length - 1"
            :plain="true"
            type="primary"
            :disabled="item.answer === '0'"
            @click="toPay"
            >完成</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
}
.container {
    width: 100vw;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    padding: 0;
    transition: transform 0.6s ease;
}
.card {
    z-index: 999;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0;
}
.btn {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { getQuestion } from '../api/question'
import { useRouter } from 'vue-router';
import { useAnswerStore } from '../store/answer'

const answerStore = useAnswerStore()

onBeforeMount(async () => {
    const { data } = await getQuestion()
    answerStore.answers = data.map(item => {
        return {
            ...item,
            answer: ''
        }
    })
})

const translateX = ref(0)

function toLeft() {
    if (translateX.value >= 100) {
        translateX.value -= 100
    }
}

function toRight() {
    translateX.value += 100
}

const router = useRouter()

function toPay() {
  router.push('/analysis')
}

function toManage() {
    router.push('/manage')
}
</script>
