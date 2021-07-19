/**
 *  统一管理接口
 */

 //地址
//const ApiRootUrl = 'http://1.15.244.26:8081';
const ApiRootUrl = 'https://www.jim.jx.cn';

module.exports = {
  /**
   * 查询
   */
  queryDesign: ApiRootUrl + '/design/basic/get', //查询方案接口
  queryDesignComment: ApiRootUrl + '/design/comment/list', //查询方案评论信息接口

  /**
   * 添加
   */
  addDesignComment: ApiRootUrl + '/design/comment/add', //添加方案评论信息接口


   /**
   * 修改
   */


   /**
   * 删除
   */
  
};