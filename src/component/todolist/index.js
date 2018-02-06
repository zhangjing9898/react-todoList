import React,{Component} from 'react';
import TodoItem from '../todoitem';
import Footer from "../footer/index";
import './index.css'
export default class TodoList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {list,deleteTask,achieveTask}=this.props;
        /*[{
            id:'',
            text:'',
            status:0/1  //状态是否完成
        },{}...]
        */

        let comps=list.map((item)=>{
            return <TodoItem item={item} itemId={item.id} deleteTask={deleteTask} achieveTask={achieveTask} key={item.id}/>
        })

        let totalCount=list.length;
        let doneCount=list.filter((item)=>{
            return item.status
        }).length;
        return(
            <div className="list-container">
                <div className="list-top">
                    TodoList
                </div>
                <div className="list">
                    {comps}
                </div>
                <div className="footer">
                    <Footer doneCount={doneCount} totalCount={totalCount} />
                </div>
            </div>
        )
    }
}