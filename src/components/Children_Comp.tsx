import React, { Component } from 'react'
interface Props {

}
interface State {
    name: string
}
export default class Children_Comp extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: "A"
        }
    }
  render() {
    return (
      <div>
        <p>Họ và tên cha : {this.state.name}</p>
        <p>Họ và tên con : {this.state.name}</p>
      </div>
    )
  }
}
