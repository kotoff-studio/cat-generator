$(init);

function init() {
    $('.generate-btn').click(function () { 
        fetch('https://api.thecatapi.com/v1/images/search')
            .then((response) => response.json())
            .then((data) => {
                const arr = data['0'];
                console.log(arr['url'])
                $('#g-img').attr('src', arr['url']);
                $('#g-img').attr('width', '304');
                $('#g-img').attr('height', '295');
            });
    });
}