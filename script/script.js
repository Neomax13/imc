document.querySelector('.envoie').addEventListener('click', function(){
    const taille = parseInt(document.getElementById('taille').value);
    const poid = parseInt(document.getElementById('poid').value);

    if(isNaN(taille) || isNaN(poid) || taille <= 0 || poid <= 0){
        const tailleMetre = taille/100;
        const imc = poid/(tailleMetre*tailleMetre);
        const imcArrondi = imc.toFixed(1); 

        let interpretation ='';

        if(imc < 16.5){
            interpretation = 'Vous êtes sous alimentez';
        }else if (imc < 18.5 ){

            interpretation = 'Vous êtes maigre';
        }else if(imc < 25) {

            interpretation = 'Vous êtes de corpulence normale';
        }else if(imc < 30){

            interpretation = 'Vous êtes en surpoid';
        }else if (imc < 35){

            interpretation = 'Vous êtes en situation d\'obésité';
        }
        document.getElementById('resultat').textContent =  `Votre IMC est de ${imcArrondi} : ${interpretation}`;
    }else{
            document.getElementById('resultat').textContent = 'Vos infos ne sont pas correctes';
    }


});