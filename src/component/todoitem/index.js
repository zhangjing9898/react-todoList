import React,{Component} from 'react';
import './index.css';
export default class TodoItem extends Component{
    constructor(props){
        super(props);
    }

    toggleTaskStatus=()=> {
        let{itemId,achieveTask}=this.props;
        achieveTask(itemId);
    }

    delTask=()=>{
        let{item,deleteTask,achiveTask}=this.props;
        deleteTask(item);
    }
    render(){
        let {item} = this.props;
        let status=item.status;
        return(
            <div className="item-container">
                <div className="item-inner" onClick={this.toggleTaskStatus.bind(this)}>
                    <div className="chk-container">
                        <div className={`chk ${status==='0'?'chk1':''}`} >
                        </div>
                        <span className="text">{item.text}</span>
                    </div>
                </div>
                <div className="del-container" onClick={this.delTask.bind(this)}>
                    删除
                </div>
            </div>
        )
    }
}