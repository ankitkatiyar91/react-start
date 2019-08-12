import React from 'react'

class FancyBorder extends React.Component{

    render(props){
        return (
            <div className={'FancyBorder FancyBorder-' + this.props.color}>
                {/* Here it will recive childs of this component */}
              {this.props.children}
            </div>
          );
    }

}

export default FancyBorder;