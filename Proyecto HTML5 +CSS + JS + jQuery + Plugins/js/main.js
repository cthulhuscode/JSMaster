$(document).ready(function (){

    if(window.location.href.indexOf('index') > -1){ //Validar si se está en el index
        //Slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1920
        });

        //Posts
        let posts = [
            {   
                title: 'Prueba de título 1',
                date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().format("Do") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia sunt blanditiis necessitatibus quaerat error tempora atque adipisci hic! Neque quis ex quia voluptatum distinctio voluptatibus soluta quasi voluptate explicabo?'
            },
            {   
                title: 'Prueba de título 2',
                date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().format("Do") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia sunt blanditiis necessitatibus quaerat error tempora atque adipisci hic! Neque quis ex quia voluptatum distinctio voluptatibus soluta quasi voluptate explicabo?'
            },
            {   
                title: 'Prueba de título 3',
                date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().format("Do") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia sunt blanditiis necessitatibus quaerat error tempora atque adipisci hic! Neque quis ex quia voluptatum distinctio voluptatibus soluta quasi voluptate explicabo?'
            },
            {   
                title: 'Prueba de título 4',
                date: 'Publicado el día ' + moment().format("dddd") + ' ' + moment().format("Do") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia sunt blanditiis necessitatibus quaerat error tempora atque adipisci hic! Neque quis ex quia voluptatum distinctio voluptatibus soluta quasi voluptate explicabo?'
            }    
        ];

        posts.forEach((item, index)=>{ //Por cada elemento se crea una plantilla
            let post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="btnMore">Leer más</a>
            </article>
            `;
            $('#posts').append(post); //Los datos se cargan
        });

        /* Plantilla utilizada
        <article class="post">
            <h2>Título artículo</h2>
            <span class="date">Fecha de publicación</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil placeat quas magnam voluptate sint aut dicta quisquam aliquam similique, assumenda delectus deleniti facilis molestiae ex animi dignissimos accusantium commodi.</p>
            <a href="#" class="btnMore">Leer más</a>
        </article>
        */
    }

    let theme = $('#theme');

    //Get theme
    if(localStorage.getItem('theme') != '' && localStorage.getItem('theme') != null){
        console.log(localStorage.getItem('theme'))
        theme.attr('href', localStorage.getItem('theme'))
    }

    //Selección de tema y guardado en LocalStorage
    $('#toDark').click(function(){
        theme.attr('href', 'css/dark.css') //Modificar atributo href
        localStorage.setItem('theme', theme.attr('href'))
    })
    $('#toPurple').click(function(){
        theme.attr('href', 'css/purple.css')
        localStorage.setItem('theme', theme.attr('href'))
    })
    $('#toOrange').click(function(){
        theme.attr('href', 'css/orange.css')
        localStorage.setItem('theme', theme.attr('href'))
    })

    //Scroll arriba de la web
    $('.up').click(function(e){
        e.preventDefault;
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    //Login falso
    $('#login form').submit(function(){
        let txtName = $('#txtName').val();
        localStorage.setItem('username', txtName);
    });

    if(localStorage.getItem('username') != null && localStorage.getItem('username') != '' && localStorage.getItem('username') != 'undefined'){
        let parrafo = $('#about p');
        parrafo.html('<strong">Bienvenido, ' + localStorage.getItem('username') + ".</strong>");
        parrafo.append('<a href="" id="logout" style="margin-left: 10px;">Log out</a>');
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            $('#login').show('slow');

            //Hacer que permanezca el mismo tema
            localStorage.setItem('theme', theme.attr('href'))
            location.reload();
        });
    } 
    else
        $('#login').show('slow');

    /* -------- Página about.html -----------*/
    //Acordeón
    if(window.location.href.indexOf('about') > -1)
        $('#acordeon').accordion(); 
    
    /* -------- Página reloj.html ----------- */
    //Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            let reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj)
        }, 1000)
    }
    
    //Validación de formulario contacto
    if(window.location.href.indexOf('contact') > -1){
        $('form input[name="birthdate"]').datepicker({
            dateFormat: 'dd/mm/yy' //cambiar formato de la fecha
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }   
});