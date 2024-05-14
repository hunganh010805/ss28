import React, { Component } from 'react'
import Children_Comp from './Children_Comp'
interface Props {

}
interface State {
    name: string
}
export default class Parent_Comp extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            name: "A"
        }
    }
  render() {
    return (
      <div> Bài 4

        <Children_Comp></Children_Comp>
      </div>
    )
  }
}
