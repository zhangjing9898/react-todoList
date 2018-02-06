import React,{Component} from 'react';
import './index.css'
export default class TodoForm extends Component{
    constructor(props){
        super(props);
    }

    submitTask=(e)=>{

        let {saveTask}=this.props;
        let value=this.ipt.value;
        if(value){
            saveTask(value);
            this.ipt.value="";
        }
        e.preventDefault();
    }


    render(){
        return(
            <div className="form-container">
                <form className="">
                    <div className="ipt-container col-md-10">
                        <input type="text"
                               className="form-control"
                               placeholder="please input your task"
                               ref={(ipt)=>{this.ipt=ipt}}

                        />
                    </div>
                    <div className="col-md-2" onClick={this.submitTask.bind(this)}>
                        <button className="btn btn-default">保存任务</button>
                    </div>
                </form>
            </div>
        )
    }
}