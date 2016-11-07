$(document).ready( function () {
    
    getItemList();     
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

var itemArray = [];
var cart = [];
var price = null;
var countAllItems = null;

function getItemList () {
    var preke = null;
    for ( i=1; i<9; i++) {
        preke = "Item"+i;
        var item = JSON.parse(localStorage.getItem(preke));
        itemArray.push(item);
    }
    return itemArray;
}

function printItemList () {
    
    var itemsList = $('#items-box');
    
    $.each(itemArray, function (index, val) {
        $(itemsList).append('<div>');
        
        var itemBox = $(itemsList).find('div:last');
        
        $(itemBox).addClass('item-box big').append('<img>');
        $(itemBox).find('img').attr('src', this.foto).addClass('img-responsive');
        $(itemBox).append('<ul>');
        $(itemBox).find('ul').append('<li>' + this.preke + '</li>');
        $(itemBox).find('ul').append('<li>' + this.kaina + '</li>');
        $(itemBox).append("<button rel='" + this.preke + "' type='button' class='btn btn-default show add-to-cart' aria-label='Left Align'><p>Pirkti</p></button>");
        
    })
}

function updateCart () {
    
    var $item = $(this).attr('rel');
    var price = 0;
    
    
    $.each( itemArray, function (index, val) {
        if (this.preke === $item) {
            cart.push(this);
        } 
    })
    
    $.each(cart, function (index, val) {
        price += Number(cart[index].kaina);
    });
       
    countAllItems = cart.length;
        
    $('#total-price').html('<p class="basket">Gėlių krepšelyje: ' + countAllItems + ' Iš viso: ' + price.toFixed(2) + ' Eu</p>' );  
}

function cartList () {
       
    var $modalBody = $('.modal-content');
        
    $modalBody.text('');
    
    $.each( itemArray, function (index, val) {
            
        var itemInArray = itemArray[index].preke;
        var itemPrice = itemArray[index].kaina;
        var itemData = itemArray[index].aprasymas;
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
    });
    
    $('.x').on('click', deleteItemFromCart);
}

function remove () {
    var $modalBody = $('.modal-content');
    $modalBody.text('');

    $modalBody.append( "<div class='container'>"
                              + "<h4>Ar pašalinti prekes iš krepšelio?</h4>"
                              + "<button type='button' class='btn btn-danger remove-button'>Pašalinti</button>"
                              + "<button type='button' class='btn btn-warning warning'>Atšaukti</button></div>"); 
        
        $('.remove-button').on('click', deleteItemFromCart);
        $('.warning').on('click', function(){
            $('#modal').modal('hide');
        });
}

function deleteItemFromCart () {
    
    var value = $(this).attr('rel')

    $.each( itemArray, function (index, val) { 
       
       $('.count').each(function (index, value) {
          
            if ( true ) {
                 
                $(document).ready(function() {
                console.log( $('.count span').text()); });
            }
        
            else {

                cart = $.grep( cart, function (obj, index) {        
                return obj.preke != value;
                });
            };

        });
    
     });

    updateCart();
    cartList();
}