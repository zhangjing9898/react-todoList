import React,{Component} from 'react';
export default class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {doneCount,totalCount}=this.props;
        return(
            <div className="">
                {doneCount}已完成 / 共{totalCount}个
            </div>
        )
    }
}