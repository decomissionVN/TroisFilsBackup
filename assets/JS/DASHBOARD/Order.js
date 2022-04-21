//GET THE MEASURES FOR THE USER ID

function User_exists(translation) {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token && userId) {
        fetch('https://api.troisfils.com/api/orders/orderGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_order(response, translation))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    }
}

function display_order(response, translation) {
console.log(response);

    if (response.length !== 0){
        console.log('no array');
        let orderlist = [];
        class Order {
            constructor(_id, userId, price, picture, status) {
                this.__id = _id;
                this._userId = userId;
                this._price = price;
                this._picture = picture;
                this._status = status;
            }

            get userId() {
                return this._userId
            }

            set userId(_userId) {
                this._userId = this.userId
            }

            get price() {
                return this._price
            }

            set price(_price) {
                this._price = this.price
            }
            get picture() {
                return this._picture
            }
            set picture(_picture) {
                this._picture = this.picture
            }
            get status() {
                return this._status
            }
            set status(_status) {
                this._status = this.status
            }
        }

        for (let i = 0; i < response.length; i++) {

            orderlist.push(new Order(response[i]._id, response[i].email, response[i].price, response[i].picture, response[i].status));
        }
        console.log(orderlist);

        let HTMLOrderlist = "";
            
        orderlist.forEach(Order => {
            let file = Order.picture.split('/images');
            HTMLOrderlist += `
            <div class="col-md-6 mb-5">
                <div id="orderId">
                    <p>${translation.Order_id} <b>${Order.__id}</b></p>
                    <p>${translation.Order_Email} <b>${Order._userId}</b></p>
                    <p>${translation.Order_Price} <b>${Order._price}</b></p>
                    <p>${translation.Order_Status} <b>${Order._status}</b></p>
                </div>
            </div>
            <div class="col-md-6 mb-5">
                <div class="orderlist">
                    <img src="../../../../backend/images${file[1]}" alt="Tailoring order" class="width70"/>
                </div>
            </div>
            <div class="col-12 text-center mb-5">
                <a class="button ${Order._status}" href="#" onclick="PaymentorderId('${Order.__id}')">${translation.Finalize}</a>
            </div>

            <div class="separation col-12 mb-5">
            </div>
            `
        })

        document.getElementById('picture_order').innerHTML = HTMLOrderlist;

        var elements = document.getElementsByClassName('Confection');
            for(var i=0; i<elements.length; i++) { 
            elements[i].innerHTML= translation.Confection;
        }

        var elements = document.getElementsByClassName('Ready');
            for(var i=0; i<elements.length; i++) { 
            elements[i].innerHTML= translation.Ready;
        }

        var elements = document.getElementsByClassName('on_way');
            for(var i=0; i<elements.length; i++) { 
            elements[i].innerHTML= translation.on_way;
        }

        var elements = document.getElementsByClassName('delivered');
            for(var i=0; i<elements.length; i++) { 
            elements[i].innerHTML= translation.delivered;
        }

    } else if (response.length === 0){
        console.log('array');
        document.getElementById('picture_order').innerHTML = `
        <div class="text-center">
            <h3>${translation.No_order}</h3>
        </div>`;
    }
}

function PaymentorderId(Order__id) {
    event.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
        queryParams.set('orderId', Order__id);
        window.setTimeout(window.location.replace("Payment.html" + "?" + queryParams.toString()), 5000);
}