import React from "react"

function Pay(){

    function backToCart() {
        window.close();
      }

    return(
    <div className="Pay">
            
        <div className="center">
            <div className="content">
                <label className="fas fa-check"></label>
                <p>Thank you for your payment</p>
                <label className="close-btn" onClick={backToCart}>close</label>
            </div>
        </div>

    </div>
    )
}

export default Pay;