// write your code here
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(data => {
    console.log(data)
    //GETTING DIV ELEMENT
    let div = document.getElementById('ramen-menu');
    //FOR EACH ELEMENT
    data.forEach((element, index) => {
        //CREATE IMG NODE
        let imgNode = document.createElement('img');
        //INSERT IMAGE URL IN IMAGE NODE SRC
        imgNode.src = element.image;
        //APPEND IMG NODE TO DIV
        div.append(imgNode)
        //on click for img
        imgNode.addEventListener('click', function(e) {
            //Gets Name Category
            let h2 = document.getElementsByClassName('name');
            //INSERTS NAME INTO HTML
            h2[0].innerHTML = element.name
            //GET H3 ELEMENT by class
            let h3 = document.getElementsByClassName('restaurant');
            //INSERTS RESTAURANT INFO INTO INNER HTML
            h3[0].innerHTML = element.restaurant;
            //GET IMAGE ELEMENT IN HTML CLASS
            let imgDetail = document.getElementsByClassName('detail-image');
            //INSERT IMAGE URL TO IMAGE SRC IN HTML NODE
            imgDetail[0].src = element.image
            //GET RATING NODE
            let ratingNode = document.getElementById('rating-display')
            //insert html from fetch to rating node
            ratingNode.innerHTML = element.rating
            //get comment node
            let commentNode = document.getElementById('comment-display');
            commentNode.innerHTML = element.comment


        })
        // console.log(element.rating)
        // console.log(element.comment)
    
    })

    let newRamen = document.getElementById('new-ramen');
    console.log(newRamen)
    newRamen.addEventListener('submit', function(e) {
        e.preventDefault();

        let newRamenObj = {}
        //value of name input
        let nameNode2 = document.querySelector('#new-name').value;
        newRamenObj.name = `${nameNode2}`
        
        //value of restaurant input
        let restaurantNode2 = document.querySelector('#new-restaurant').value;
        newRamenObj.restaurant = `${restaurantNode2}`
        
        //value of image input
        let imgNode2 = document.querySelector('#new-image').value;
        newRamenObj.image = `${imgNode2}`
        
        //get value of rating input
        let ratingNode2 = document.querySelector('#new-rating').value;
        newRamenObj.rating = `${ratingNode2}`
        //get value of comment input
        let commentNode2 = document.querySelector('#new-comment').value;
        newRamenObj.comment = `${commentNode2}`

        console.log(newRamenObj)

       let img =  document.createElement('img');

       img.src = imgNode2;

       div.append(img)

        
    })
})