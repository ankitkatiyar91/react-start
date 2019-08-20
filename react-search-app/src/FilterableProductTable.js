import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            text: '',
            inStockOnly : false,
            data : [
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
              ],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    render(){
        return(
            <fieldset>
            <SearchBar change={this.handleChange} />
            <SearchingFor text={this.state.text}/>
            <ProductTable products={this.state.data} search={this.state.text} inStockOnly={this.state.inStockOnly} />
            </fieldset>
        );
    }

    handleChange(e){
       this.setState({text:e.target.value})
    }

    /** Update default props */
    static defaultProps = {
        prop: 'hello',
      };
    
}

function SearchingFor(props){
    if(props.text == undefined || props.text.trim() == ''){
        return '';
    }else{
        return(<span>Searching For: {props.text}</span>);
    }
}


export default FilterableProductTable;