$(document).ready(function(){

    $.getJSON("assets/JS/pel.json", function(data){
        var container = $("#card_container")
        data.forEach(card => {
            var cardData = `
            <div class="col-md-4 mb-4 d-flex justify-content-center">
            <div class="card h-100" style="width: 18rem;">
            <img src="assets/card-images/${card.image}"
            class="card-img-top" alt="...">
             <div class="card-body">
            <h5 class="card-title text-center">${card.title}</h5>
            <p class="card-text text-center">${card.modal}</p>
            <p class="card-text text-center">Rs.${card.price}/.</p>
            <div class="d-grid gap-2">
            <div class="d-flex flex-column gap-2">
            <a href="#" class="btn btn-secondary btn-center">Add to Cart</a>
            <a href="${card.fileUrl}" download class="btn btn-dark btn-center">Grab The Details</a>
            </div>
            </div>
            </div>
            </div>
            `
           
            container.append(cardData)
        });
    })
})