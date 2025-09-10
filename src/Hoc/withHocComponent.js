import React from "react";
export default function withHocComponent(InputComponent,InputComponentName){
    return class OutputComponent extends React.Component {
        componentDidMount(){
            console.log('3. InputComponentName:',InputComponentName);
        }
        render() {
            console.log('1. InComponent render');
            return (<InputComponent {...this.props} />);
        }
}
}