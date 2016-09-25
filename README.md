# mychat

a project of chatroom and virtualdesk

## 使用方法
  - 将mychat这个项目下载到本地
  - 启动MySQL服务，并在MySQL数据库中建立数据库“nodesample”
  - 将mychat中的nodesample.sql导入到刚建立的nodesample数据库中
      ``` bash
      > mysql -h localhost -u root -p nodesample > nodesample
      ```
    
  - 打开model文件夹下的msg.js和user.js将数据库的用户名和密码修改成你自己的数据库名称和密码  
  - 在mychat根目录下(即package.json所在文件夹)执行npm install安装依赖库
  - 打开浏览器访问localhost:8000即可看到效果
  
## [线上预览](http://123.206.203.27:8000/)
