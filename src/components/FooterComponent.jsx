import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }



  render() {
    return (
      <div>
        <footer className='footer bg-dark text-center text-lg-start'>
            <span className='text-muted'>All rights Reserved 2022 @Dotoku</span>

        </footer>
      </div>
    )
  }
}
export default FooterComponent;