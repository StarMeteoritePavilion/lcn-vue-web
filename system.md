## 项目搭建
#### 1.0 统一异常处理
> 基于全局配置 Vue.config.errorHandle,在方法体内可统一异常处理，例如测试环境可报错进行入库，方便技术人员技术处理
------
#### 2.0 全局注册组件
> 传统注册组件到路由过于麻烦
------
#### 3.0 全局过滤器
> 全局过滤器可在 base/FilterGlobal.js 中定义
------
#### 4.0 全局方法
> 不涉及业务的全局方法可在 base/UtilGlobal.js 中定义，注意需用$开头
----
#### 5.0 全局样式
> 统一样式放在 static/css/common.css 中