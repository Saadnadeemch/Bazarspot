function shome() {
    var section = document.getElementById('home');
    section.scrollIntoView({ behavior: 'smooth' });
}
function sproduct() {
    var section = document.getElementById('product');
    section.scrollIntoView({ behavior: 'smooth' });
}

function steam() {
    var section = document.getElementById('team');
    section.scrollIntoView({ behavior: 'smooth' });
}

function schoose() {
    var section = document.getElementById('choose');
    section.scrollIntoView({ behavior: 'smooth' });
}

function scontact() {
    var section = document.getElementById('contact');
    section.scrollIntoView({ behavior: 'smooth' });
}

function Sendemail() {
    const params = {
       name : document.getElementById('name').value,
       email : document.getElementById('email').value,
       message : document.getElementById('message').value
    }
    servieid = "service_cdmdq6l";
    templateid = "template_5x1sulc" ;
    emailjs.send(servieid,templateid,params).then(function(res){
      alert('Email send Successfully')
    })
}