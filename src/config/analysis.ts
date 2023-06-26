import { QuestionWrapAnswer } from '../store/answer/types'

export function getAnalysisResult(answers: Array<QuestionWrapAnswer>) {
  // 计算测试页面中的第3到第13题中选择了第一个选项“是”的个数
  let ansA3213 = 0

  let ansA14224 = 0

  let ansA25231 = 0

  let ansA32235 = 0

  let ansC3235 = 0

  answers.forEach((item, index) => {
    if (index >= 3 && index <= 35 && item.answer === '3') {
      ansC3235 += 1
    }

    if (index >= 3 && index <= 13 && item.answer === '1') {
      ansA3213 += 1
    } else if (index > 13 && index < 25 && item.answer === '1') {
      ansA14224 += 1
    } else if (index >= 25 && index <= 31 && item.answer === '1') {
      ansA25231 += 1
    } else if (index >= 32 && index <= 35 && item.answer === '1') {
      ansA32235 += 1
    }
  })

  const b = Math.floor(ansA3213 / 3)
  const c = Math.floor(b / 3)
  const e = Math.floor(ansA14224 / 3)
  const f = ansA25231

  if (ansA32235 >= 1 || f > 3 || f + e + c > 3) {
    return '很遗憾，他的确是个渣男'
  }

  if (ansC3235 >= 20) {
    return '您对他的了解还不够清晰哦，建议根据题目仔细观察一下'
  }

  return '恭喜你，你的男神还是蛮靠谱的哦'
}
