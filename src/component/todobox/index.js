import React,{Component} from 'react';
import TodoList from '../todolist';
import TodoForm from '../todoform'
import 'react-bootstrap'

export default class TodoBox extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[{
                id:1,
                status:0,
                text:'react'
            },{
                    id:2,
                    status:0,
                    text:'react'
            }]
        }
    }

    componentWillMount(){
    }

    saveTask=(text)=>{
        this.setState({
            list:this.state.list.concat({
                id:this.generateId(),
                text:text,
                status:0
            })
        })
    }

    deleteTask=(item)=>{
        //数组删除元素
        let index=this.state.list.findIndex((item1)=>{
            return item1.id===item.id
        });
        let list=[...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }

    achieveTask=(taskId)=>{
        let data = this.state.list;
        for (let item of data) {
            if (item.id === taskId) {
                item.status = item.status === "0" ? "1" : "0"
            }
        }
        this.setState({data})
    }

    //给新增的任务随机的id
    generateId=()=>{
        return Math.floor(Math.random()*9000)+1000
    }

    render(){
        let {list}=this.state;
        return(
            <div>
                <TodoList list={list} deleteTask={this.deleteTask} achieveTask={this.achieveTask} />
                <TodoForm saveTask={this.saveTask}/>
            </div>
        );
    }
}