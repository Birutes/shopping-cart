$(document).ready( function () {
    
    getItems.getItemList();     
    printItemList();  
    cartList();
    
    $('#list').on('click', function () {
        $('.item-box').removeClass('big').addClass('list');
    });

    $('#big').on('click', function () {
        $('.item-box').removeClass('list').addClass('big');
    });

    $('.add-to-cart').on('click', updateCart);
    
    $('.cart-button').on('click', function () {
        cartList();
    });

    $('#remove').on('click', remove);
    
  
});

var itemsInStock = [];
var cart = [];
var price = null;
var countAllItems = null;

var getItems = { 
    getItemList: function () {
        var itemsInStock = JSON.parse(localStorage.getItem(items));
        return itemsInStock;
    } 
}

function printItemList () {
    
    var itemsList = $('#items-box');

    for (var i = 0; i < itemsInStock.length; i++ ) {
        $(itemsList).append('<div>');
        
        var itemBox = $(itemsList).find('div:last');itemsInStock
        
        $(itemBox).addClass('item-box big').append('<img>');
        $(itemBox).find('img').attr('src', itemsInStock[i].foto).addClass('img-responsive');
        $(itemBox).append('<ul>');
        $(itemBox).find('ul').append('<li>' + itemsInStock[i].aprasymas + '</li>');
        $(itemBox).find('ul').append('<li>' + itemsInStock[i].preke + '</li>');
        $(itemBox).append("<button rel='" + itemsInStock[i][0] + "' type='button' class='btn btn-default show add-to-cart' aria-label='Left Align'><p>Pirkti</p></button>");
        
    }

}

function updateCart () {
    
    var $item = $(this).attr('rel');
    var price = 0;
    
    
    for (var i = 0; i < itemsInStock.length; i++ ) {
        if (itemsInStock[i].preke === $item) {
            cart.push(this);
        } 
    }
    
    $.each(cart, function (index, val) {
        price += Number(cart[index].kaina);
    });
       
    countAllItems = cart.length;
        
    $('#total-price').html('<p class="basket">Gėlių krepšelyje: ' + countAllItems + ' Iš viso: ' + price.toFixed(2) + ' Eu</p>' );  
}

function cartList () {
       
    var $modalBody = $('.modal-content');
        
    $modalBody.text('');
    
    for (var i = 0; i < itemsInStock.length; i++ ) {
            
        var itemInArray = itemsInStock[i].preke;
        var itemPrice = itemsInStock[i].kaina;
        var itemData = itemsInStock[i].aprasymas;
        var count = 0;
        
        $.each( cart, function (index, val) {
            if ( cart[index].preke === itemInArray) {
                count += 1;
            } 
        });
        
       
        if ( count > 0 ) {
            $modalBody.append( "<div class='container'>"
                            + "<h4>Prekė " + itemInArray + '. Krepšelyje: ' + '<span class="count">' + count + '</span>' + "</h4>" 
                            + "<p> Vieneto kaina: " + itemPrice + ". Prekės aprašymas: " + itemData + "</p>" 
                            + "<p><span rel='" + itemInArray + "' class='x'>Pašalinti iš krepšelio</span></p></div>"); 
        }
    };
    
    /*$('.x').on('click', deleteItemFromCart);*/
}

function remove () {
    var $modalBody = $('.modal-content');
    $modalBody.text('');

    $modalBody.append( "<div class='container'>"
                              + "<h4>Ar pašalinti prekes iš krepšelio?</h4>"
                              + "<button type='button' class='btn btn-danger remove-button'>Pašalinti</button>"
                              + "<button type='button' class='btn btn-warning warning'>Atšaukti</button></div>"); 
        
        /*$('.remove-button').on('click', deleteItemFromCart);*/
        $('.warning').on('click', function(){
            $('#modal').modal('hide');
        });
}

/* function deleteItemFromCart () {
    
    var value = $(this).attr('rel')

       $('span.count').each(function (index, value) {
            switch (index) {
                case 0:
                    itemCount = $('span.count').text().charAt(0);
                case 1:
                    Itemcount = $('span.count').text().charAt(1);
                    break;
                case 2:
                    Itemcount = $('span.count').text().charAt(2);
                    break;
                case 3:
                    Itemcount = $('span.count').text().charAt(3);
                    break;
                case 4:
                    Itemcount = $('span.count').text().charAt(4);
                    break;
            }
             });
            if ( itemCount > 1 ) {
                 
                $(document).ready(function() {
                console.log( itemCount); });
            }
        
            else {
       

                cart = $.grep( cart, function (obj, index) {        
                return obj.preke != value;
                });
         };
        


    
    

    updateCart();
    cartList();
} */