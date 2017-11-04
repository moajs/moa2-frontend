/**
 * Created by alfred on July 1st 2015, 11:52:49 pm.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MongooseDao = require('mongoosedao')

// - 课程信息表
//   - 分类（/首页/人工智能/系统掌握深度学习，从入门到精通实战）
//   - 课程名称
//   - 价格
//   - 头图
//   - 状态标签：更新中、直播课程、不可用
//   - 教学计划：系统掌握深度学习，从...
//   - 学习有效期：365 天（随到随学）
//   - 课程提示： 课程原价 4999 元，现在限名额优惠，报名请尽快扫码咨询课程小助手
//   - 课程目标
//   - 适合人群
//   - 学员动态：（5条，xxx加入学习）
//   - 评价总人数（当评价表增加新数据，异步更新）
//   - 评价平均分数（当评价表增加新数据，异步更新）
//   - 最新学员（多个，最多20）
//   - 授课教师（多个）
//   - 目录（多个）
//   - 笔记（多个）
//   - 评价（多个）
//   - 用户（多个）

var courseSchema = new Schema({
  name: { type: String, unique: true }, //课程名称
  category: String, //分类（/首页/人工智能/系统掌握深度学习）
  price: String, //价格
  picture: String, //头图
  status: String, //状态标签：更新中、直播课程、不可用
  plan: String, //教学计划：系统掌握深度学习，从...
  effect_duration: String, //学习有效期：365 天（随到随学）
  prompt: String, //课程提示： 课程原价 4999 元...
  target: String, //课程目标
  target_user: String, //适合人群
  student_trend: Array, //学员动态：（5条，xxx加入学习）
  evaluation_count: Number, //当评价表增加新数据，异步更新
  evaluation_average_number: Number, //当评价表增加新数据，异步更新
  latest_students: Array, //最新学员（多个，最多20）
  toc: Array, //目录
  // notes: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Note'
  // }], //笔记（多个）
  // evaluations: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Evaluation'
  // }], //评价（多个）
  // students: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }], //学生（多个）
  // teachers: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }]//授课教师（多个）
})

var course = mongoose.model('Course', courseSchema)
var courseDao = new MongooseDao(course)

module.exports = courseDao