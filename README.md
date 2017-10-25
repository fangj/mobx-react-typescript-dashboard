# mobx-react-typescript-dashboard

移植自 https://github.com/huzzbuzz/little-a-dashboard

![截图](https://github.com/fangj/mobx-react-typescript-dashboard/raw/master/doc/mobx_dashboard.png)


客户端可使用`jsx`或`tsx`，服务端使用`eggjs`，内含`todolist`样例。  

包含`antd`和`mockjs`等常用依赖包，可通过删除index.html相应`<script/>`标签和`webpack.conf.js`相应externals项进行清除。

### 客户端:

```
cd client
npm i 
webpack -w
```

### 服务端:
```
cd server
npm i
npm run dev
```
### 架构：

![架构](https://github.com/fangj/mobx-react-typescript-dashboard/raw/master/doc/parts.png)

### 以todolist为例
* 数据库结构(mongoDB)
```
{
   id:"1",
   data:["wash", "buy", "go"]
}
```
* API接口
```
<==
   GET /todolist
==>
   ["wash", "buy", "go"]
```
* Store数据与操作
```
{
   @observable todoItems = ["todoTitle"];
   count()
}
```

* View分解
```
TodoAppView := 
   <TodoListView/>
   <SummaryView (count)/>
TodoListView:= [<TodoView (todoTitle)/>]
```
