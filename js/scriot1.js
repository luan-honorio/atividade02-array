let media
let mediaT = []


const btn = document.getElementById('btn1')
btn.addEventListener('click', ()=>{

    let nomes = document.getElementById('nomeAluno').value

    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)



    media = (nota1+nota2)/2
    mediat = mediaT.push(media)


    

    let regex = /^\d+$/
    let test1 = regex.test(nota1)
    let test2 = regex.test(nota2)


   
    if(test1 != true || test2 != true){
        alert('Digite um valor valido')    
    }

    
    if(nota1 >10 || nota2 >10){

        alert('nota maior que 10 POR FAVOR REINICIE A PAGINA')
    }

   

   
    

    else {
        
        
    if ( media <=10 &&  media ==7 ){

        mediaNotas.textContent = `Media da nota ${media}`
        aprovados.textContent = `Parabens ${nomes}! voce foi aprovado(a)!`
        aprovados.style.color = 'blue'
    }
     else if (media < 3 ){
        
        mediaNotas.textContent = `Media da nota ${media}`
        aprovados.textContent = `Ops ${nomes}, Você foi reprovado(a)`
        aprovados.style.color = 'red'
        

    }
        
    else if(media <7 && media > 3){
      
        mediaNotas.textContent = `Media da nota ${media}`
        aprovados.textContent = `Atençao ${nomes}, você está em recuperaçao`
        aprovados.style.color = 'green'
    }
    
    }




   



} )

const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', ()=>{


    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    media = (nota1+nota2)/2




    let total = 0

    // mediat = mediaT.push(media)
    for( let i = 0 ; i< mediaT.length ; i++){
       total+= mediaT[i]/mediaT.length
        
       
       

        mediaturma.textContent = ` A media da turma é ${total.toFixed(2)}  `
    }











    // mediaaa = mediaT.push(media)


    // mediaturma = mediaT.length

  

    // mediatf = mediaaa + mediaturma

    // console.log(mediaT)
    // console.log(mediaturma)
    // console.log(mediatf)


})
