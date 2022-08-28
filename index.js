const secret = Math.round(Math.random() * 9);

const img1 = document.querySelector("#urum");
const img2 = document.querySelector("#urdois");
const img3 = document.querySelector("#urtres");
const img4 = document.querySelector("#urquatro");
const img5 = document.querySelector("#urcinco");
const img6 = document.querySelector("#urseis");
const img7 = document.querySelector("#ursete");
const hint = document.querySelector("#hint");

document.querySelector("#btn").addEventListener("click", () => {
    const guess = document.querySelector("#guess").value;
    switch (guess) {
        case "1":
            img1.style.display = 'none';
            img2.style.display = 'none';
            img3.style.display = 'block';
            img4.style.display = 'none';
            img5.style.display = 'none';
            img6.style.display = 'block';
            img7.style.display = 'none';
            break;
        case "2":
            img1.style.display = 'block';
            img2.style.display = 'none';
            img3.style.display = 'block';
            img4.style.display = 'block';
            img5.style.display = 'block';
            img6.style.display = 'none';
            img7.style.display = 'block';
            break;
        case "3":
            img1.style.display = 'block';
            img2.style.display = 'none';
            img3.style.display = 'block';
            img4.style.display = 'block';
            img5.style.display = 'none';
            img6.style.display = 'block';
            img7.style.display = 'block';
            break;
        case "4":
            img1.style.display = 'none';
            img2.style.display = 'block';
            img3.style.display = 'block';
            img4.style.display = 'block';
            img5.style.display = 'none';
            img6.style.display = 'block';
            img7.style.display = 'none';
            break;
        case "5":
            img1.style.display = 'block';
            img2.style.display = 'block';
            img3.style.display = 'none';
            img4.style.display = 'block';
            img5.style.display = 'none';
            img6.style.display = 'block';
            img7.style.display = 'block';
            break;
        case "6":
            img1.style.display = 'block';
            img2.style.display = 'block';
            img3.style.display = 'none';
            img4.style.display = 'block';
            img5.style.display = 'block';
            img6.style.display = 'block';
            img7.style.display = 'block';
            break;
        case "7":
            img1.style.display = 'block';
            img2.style.display = 'none';
            img3.style.display = 'block';
            img4.style.display = 'none';
            img5.style.display = 'none';
            img6.style.display = 'block';
            img7.style.display = 'none';
            break;
        case "8":
            img1.style.display = 'block';
            img2.style.display = 'block';
            img3.style.display = 'block';
            img4.style.display = 'block';
            img5.style.display = 'block';
            img6.style.display = 'block';
            img7.style.display = 'block';
            break;
        case "9":
            img1.style.display = 'block';
            img2.style.display = 'block';
            img3.style.display = 'block';
            img4.style.display = 'block';
            img5.style.display = 'none';
            img6.style.display = 'block';
            img7.style.display = 'block';
            break;
    
        default:
            img1.style.display = '';
            img2.style.display = '';
            img3.style.display = '';
            img4.style.display = 'none';
            img5.style.display = '';
            img6.style.display = '';
            img7.style.display = '';
            break;
    }

    if(guess == secret){
        hint.innerHTML = 'Acertou! :D';
    }else if (guess > secret) {
        hint.innerHTML = 'É menor!';
    }else{
        hint.innerHTML = 'É maior!';
    }
})