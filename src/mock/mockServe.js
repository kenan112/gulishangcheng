import Mock from 'mockjs'
//图片、JSON默认对外暴露
import banner from './banner.json'
import floor from './floor.json'

Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })