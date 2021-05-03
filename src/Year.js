import React, { Component } from 'react';

class Year extends Component {
    state = {
        years : [
            {y : '2006' , class : 'year'},
            {y : '2007' , class : 'year'},
            {y : '2008' , class : 'year'},
            {y : '2009' , class : 'year'},
            {y : '2010' , class : 'year'},
            {y : '2011' , class : 'year'},
            {y : '2012' , class : 'year'},
            {y : '2013' , class : 'year'},
            {y : '2014' , class : 'year'},
            {y : '2015' , class : 'year'},
            {y : '2016' , class : 'year'},
            {y : '2017' , class : 'year'},
            {y : '2018' , class : 'year'},
            {y : '2019' , class : 'year'},
            {y : '2020' , class : 'year'},
        ]
    }

    setActive = (i) => {
        let arr = this.state.years;
        for(let x = 0 ; x < 15 ; x++){
            arr[x].class = 'year'
        }
        arr[i].class = 'y_active'
        this.setState((prevState) => {
            return{
                years : arr
            }
        })
        this.props.hanY(arr[i].y)
    }
    render() {
        return (
            <div className = "yr_cont" >
                {this.state.years.map((e,i) => {
                return(
                    <a
                    className={e.class}
                    onClick={() => this.setActive(i)}
                    > 
                    {e.y}
                    </a>
                )
            })}
            </div>
            )
        
        }
}

export default Year;