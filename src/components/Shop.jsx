import React from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { buylaptop, buymobile ,fetchuser } from "../redux/actions";





const Shop = (props) => {

    let noOfMobiles = useSelector(state => state.mobile.noOfMobiles)
    let noOfLaptops = useSelector(state => state.laptop.noOfLaptops)
    let user = useSelector(state=> state.user.user)




    return (
        <>
       <div className= "shop">
        <section  className="item">
            <h2>Mobiles</h2>
            <p> stock: {noOfMobiles}</p>
           <button className="btn" onClick={props.buymobile}>Buy</button>
        </section>
        <section  className="item">
            <h2>Laptop</h2>
                <p> stock:{noOfLaptops}</p>
           <button className="btn" onClick={props.buylaptop}>Buy</button>
        </section>
        <section  className="item">
            <h2>Users</h2>
            <p> visited:{user.length}</p>
           <button className="btn"  onClick ={props.fetchuser}>callapi</button>
        </section>
       </div>
       </>
    )
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators(

    {
           buymobile,
           buylaptop,
           fetchuser

        

    },dispatch
  )


}



export default connect(null , mapDispatchToProps) (Shop);