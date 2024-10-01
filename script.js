
document.addEventListener('DOMContentLoaded', function() {
  const pocetna_prednji = document.querySelector('.pocetna-prednji');
  const pocetna_herkul = document.querySelector('.pocetna-herkul');
  const pocetna_zadnji = document.querySelector('.pocetna-zadnji');
  //mladost
  const mladost_lijevi = document.querySelector('.mladost-lijevi');
  const mladost_desni = document.querySelector('.mladost-desni');
  const linija = document.querySelector('.linija');
  const mladost = document.querySelector('.mladost');
  //prvi
  const prvi_unutar = document.querySelector('.prvi-unutar');
  const prvi_sunce = document.querySelector('.prvi-sunce');
  const prvi_zadnji = document.querySelector('.prvi-zadnji');
  const prvi_srednji = document.querySelector('.prvi-srednji');
  const prvi_herkul = document.querySelector('.prvi-herkul');
  const prvi_prednji = document.querySelector('.prvi-prednji');
  const prvi_tekst = document.querySelector('.prvi-tekst');
  //drugi
  const drugi_zadnji = document.querySelector('.drugi-zadnji');
  const drugi_rodjak = document.querySelector('.drugi-rodjak');
  const drugi_srednji = document.querySelector('.drugi-srednji');
  const drugi_herkul = document.querySelector('.drugi-herkul');
  const drugi_prednji = document.querySelector('.drugi-prednji');
  //nevaljan1
  const animacija1_lijevi = document.querySelector('.animacija1-lijevi');
  const animacija1_desni = document.querySelector('.animacija1-desni');
  const animacija1_naslov = document.querySelector('.animacija1-naslov');
  const animacija1_pravokutnik = document.querySelector('.animacija1-pravokutnik');
  //treci
  const treci_mjesec = document.querySelector('.treci-mjesec');
  const treci_planina = document.querySelector('.treci-planina');
  const treci_srednji2 = document.querySelector('.treci-srednji2');
  const treci_srednji = document.querySelector('.treci-srednji');
  const treci_herkul = document.querySelector('.treci-herkul');
  const treci_prednji = document.querySelector('.treci-prednji');
  //cetvrti
  const cetvrti_sunce = document.querySelector('.cetvrti-sunce');
  const cetvrti_planina = document.querySelector('.cetvrti-planina');
  const cetvrti_srednji2 = document.querySelector('.cetvrti-srednji2');
  const cetvrti_srednji = document.querySelector('.cetvrti-srednji');
  const cetvrti_herkul = document.querySelector('.cetvrti-herkul');
  const cetvrti_prednji = document.querySelector('.cetvrti-prednji');
  //peti
  const peti_mjesec = document.querySelector('.peti-mjesec');
  const peti_planina = document.querySelector('.peti-planina');
  const peti_srednji = document.querySelector('.peti-srednji');
  const peti_prednji = document.querySelector('.peti-prednji');
  const peti_hrekul = document.querySelector('.peti-herkul');
  //nevaljan2
  const animacija2_pravokutnik = document.querySelector('.animacija2-pravokutnik');
  const animacija2_tekst = document.querySelector('.animacija2-tekst');
  const animacija2_naslov = document.querySelector('.animacija2-naslov');
  //sesti
  const sesti_sunce = document.querySelector('.sesti-sunce');
  const sesti_ptica = document.querySelector('.sesti-ptica');
  const sesti_planina = document.querySelector('.sesti-planina');
  const sesti_grm = document.querySelector('.sesti-grm');
  const sesti_herkul = document.querySelector('.sesti-herkul');
  const sesti_prednji = document.querySelector('.sesti-prednji');
  //sedmi
  const sedmi_sunce = document.querySelector('.sedmi-sunce');
  const sedmi_srednji = document.querySelector('.sedmi-srednji');
  const sedmi_herkul = document.querySelector('.sedmi-herkul');
  const sedmi_prednji = document.querySelector('.sedmi-prednji');
  const sedmi_tekst = document.querySelector('.sedmi-tekst');
  //osmi
  const osmi_sunce = document.querySelector('.osmi-sunce');
  const osmi_konj = document.querySelector('.osmi-konj');
  const osmi_srednji = document.querySelector('.osmi-srednji');
  const osmi_herkul = document.querySelector('.osmi-herkul');
  const osmi_prednji = document.querySelector('.osmi-prednji');
  const osmi_tekst = document.querySelector('.osmi-tekst');
  //deveti
  const deveti_zadnji = document.querySelector('.deveti-zadnji');
  const deveti_srednji = document.querySelector('.deveti-srednji');
  const deveti_herkul = document.querySelector('.deveti-herkul');
  const deveti_prednji = document.querySelector('.deveti-prednji');
  const deveti_tekst = document.querySelector('.deveti-tekst');
  //deseti
  const deseti_planina = document.querySelector('.deseti-planina');
  const deseti_div = document.querySelector('.deseti-div');
  const deseti_srednji = document.querySelector('.deseti-srednji');
  const deseti_herkul = document.querySelector('.deseti-herkul');
  const deseti_prednji = document.querySelector('.deseti-prednji');
  //jedanaesti
  const jedanaesti_prednji = document.querySelector('.jedanaesti-prednji');
  const jedanaesti_zadnji = document.querySelector('.jedanaesti-zadnji');
  const jedanaesti_srednji = document.querySelector('.jedanaesti-srednji');
  const jedanaesti_herkul = document.querySelector('.jedanaesti-herkul');
  const jedanaesti_tekst = document.querySelector('.jedanaesti-tekst');
  //dvanaesti
  const dvanaesti_zadnji = document.querySelector('.dvanaesti-zadnji');
  const dvanaesti_srednji = document.querySelector('.dvanaesti-srednji');
  const dvanaesti_herkul = document.querySelector('.dvanaesti-herkul');
  const dvanaesti_prednji = document.querySelector('.dvanaesti-prednji');
  const dvanaesti_tekst = document.querySelector('.dvanaesti-tekst');
  
  
  let pocetna_kraj, mladost_pocetak, mladost_kraj, prvi_pocetak, prvi_kraj;
  let animacija1_pocetak, animacija1_kraj, treci_pocetak, treci_kraj, cetvrti_pocetak, cetvrti_kraj;
  let peti_pocetak, peti_kraj, animacija2_pocetak, animacija2_kraj, sesti_pocetak, sesti_kraj, sedmi_pocetak, sedmi_kraj;
  let osmi_pocetak, osmi_kraj, deveti_pocetak, deveti_kraj, deseti_pocetak, deseti_kraj, jedanaesti_pocetak;
  let jedanaesti_kraj, dvanaesti_pocetak, dvanaesti_kraj;
  let i;
  
  // od vrha zaslona do vrha prozora
  let pocetnaOffsetTop = document.querySelector('.pocetna').offsetTop;
  let mladostOffsetTop = document.querySelector('.mladost').offsetTop;
  let prviOffsetTop = document.querySelector('.prvi').offsetTop;
  let drugiOffsetTop = document.querySelector('.drugi').offsetTop;
  let animacija1OffsetTop = document.querySelector('.animacija1').offsetTop;
  let treciOffsetTop = document.querySelector('.treci').offsetTop;
  let cetvrtiOffsetTop = document.querySelector('.cetvrti').offsetTop;
  let petiOffsetTop = document.querySelector('.peti').offsetTop;
  let animacija2OffsetTop = document.querySelector('.animacija2').offsetTop;
  let sestiOffsetTop = document.querySelector('.sesti').offsetTop;
  let sedmiOffsetTop = document.querySelector('.sedmi').offsetTop;
  let osmiOffsetTop = document.querySelector('.osmi').offsetTop;
  let devetiOffsetTop = document.querySelector('.deveti').offsetTop;
  let desetiOffsetTop = document.querySelector('.deseti').offsetTop;
  let jedanaestiOffsetTop = document.querySelector('.jedanaesti').offsetTop;
  let dvanaestiOffsetTop = document.querySelector('.dvanaesti').offsetTop;
  
  
  // visina prozora
  let pocetnaHeight = document.querySelector('.pocetna').offsetHeight;
  let mladostHeight = document.querySelector('.mladost').offsetHeight;
  let prviHeight = document.querySelector('.prvi').offsetHeight;
  let drugiHeight = document.querySelector('.drugi').offsetHeight;
  let animacija1Height = document.querySelector('.animacija1').offsetHeight;
  let treciHeight = document.querySelector('.treci').offsetHeight;
  let cetvrtiHeight = document.querySelector('.animacija1').offsetHeight;
  let petiHeight = document.querySelector('.peti').offsetHeight;
  let animacija2Height = document.querySelector('.animacija2').offsetHeight;
  let sestiHeight = document.querySelector('.sesti').offsetHeight;
  let sedmiHeight = document.querySelector('.sedmi').offsetHeight;
  let osmiHeight = document.querySelector('.osmi').offsetHeight;
  let devetiHeight = document.querySelector('.deveti').offsetHeight;
  let desetiHeight = document.querySelector('.deseti').offsetHeight;
  let jedanaestiHeight = document.querySelector('.jedanaesti').offsetHeight;
  let dvanaestiHeight = document.querySelector('.dvanaesti').offsetHeight;
  
  document.addEventListener('scroll', function(){
      const yoff = window.scrollY;
  
      const sirinaZaslona = window.screen.width;
      //document.getElementById("demo").innerHTML=sirinaZaslona;
  
  // uvijetovanje varijable i
      if(sirinaZaslona <= 400){
        i=20;
      }else if(sirinaZaslona > 400 && sirinaZaslona <= 800){
        i=10;
      }else if(sirinaZaslona > 800 && sirinaZaslona <= 1400){
        i=10;
      }else if(sirinaZaslona > 1400 && sirinaZaslona <= 2000){
        i=2;
      }else{
        i=1;
      }
  
      pocetna_kraj = pocetnaOffsetTop + pocetnaHeight;
  
      mladost_pocetak = mladostOffsetTop - window.innerHeight / i; 
      mladost_kraj = mladostOffsetTop + mladostHeight;
  
      prvi_pocetak = prviOffsetTop - window.innerHeight / i; 
      prvi_kraj = prviOffsetTop + prviHeight;
  
      drugi_pocetak = drugiOffsetTop - window.innerHeight / i; 
      drugi_kraj = drugiOffsetTop + drugiHeight;
  
      animacija1_pocetak = animacija1OffsetTop - window.innerHeight / i; 
      animacija1_kraj = animacija1OffsetTop + animacija1Height;
  
      treci_pocetak = treciOffsetTop - window.innerHeight / i; 
      treci_kraj = treciOffsetTop + treciHeight;
  
      cetvrti_pocetak = cetvrtiOffsetTop - window.innerHeight / i; 
      cetvrti_kraj = cetvrtiOffsetTop + cetvrtiHeight;
  
      peti_pocetak = petiOffsetTop - window.innerHeight / i; 
      peti_kraj = petiOffsetTop + petiHeight;
  
      animacija2_pocetak = animacija2OffsetTop - window.innerHeight / i; 
      animacija2_kraj = animacija2OffsetTop + animacija2Height;
  
      sesti_pocetak = sestiOffsetTop - window.innerHeight / i; 
      sesti_kraj = sestiOffsetTop + sestiHeight;
  
      sedmi_pocetak = sedmiOffsetTop - window.innerHeight / i; 
      sedmi_kraj = sedmiOffsetTop + sedmiHeight;
  
      osmi_pocetak = osmiOffsetTop - window.innerHeight / i; 
      osmi_kraj = osmiOffsetTop + osmiHeight;
  
      deveti_pocetak = devetiOffsetTop - window.innerHeight / i; 
      deveti_kraj = devetiOffsetTop + devetiHeight;
  
      deseti_pocetak = desetiOffsetTop - window.innerHeight / i; 
      deseti_kraj = desetiOffsetTop + desetiHeight;
  
      jedanaesti_pocetak = jedanaestiOffsetTop - window.innerHeight / i; 
      jedanaesti_kraj = jedanaestiOffsetTop + jedanaestiHeight;
  
      dvanaesti_pocetak = dvanaestiOffsetTop - window.innerHeight / i; 
      dvanaesti_kraj = dvanaestiOffsetTop + dvanaestiHeight;
  
      if(yoff < pocetna_kraj){
        const perc = yoff / pocetna_kraj;
        pocetna_prednji.style.transform =`scale(${1+0.3*perc})`;
        pocetna_zadnji.style.transform =`translate3d(${yoff}px,0,0)`;
        pocetna_herkul.style.transform =`translate3d(${-yoff*0.2}px, ${yoff*0.2}px,0)`;
        
    }else if(yoff >= mladost_pocetak && yoff <= mladost_kraj){
        const perc = (yoff-mladost_pocetak)/(mladost_kraj-mladost_pocetak);
        mladost_lijevi.style.transform = `translate3d(${-perc * 5}%,0,0)`;
        mladost_desni.style.transform = `scale(${1+(perc * 0.3)})`;
        linija.style.width = `${20+(perc * 15)}vw`;
    }else if(yoff >= prvi_pocetak && yoff <= prvi_kraj){
        const perc = (yoff-prvi_pocetak)/(prvi_kraj-prvi_pocetak);
        prvi_prednji.style.transform = `translate3d(0,${1+(perc * 0)}%,0)`;
        prvi_srednji.style.transform = `scale(${1+perc * 0.3})`;
        prvi_herkul.style.transform = `scale(${1+(-perc * 0.15)})`;
        prvi_sunce.style.transform = `translate3d(0, ${1+(-perc * 15)}%, 0)`;
        prvi_tekst.style.transform = `translate3d(0, ${1+(perc * 8)}%, 0)`;
  
    }else if(yoff >= drugi_pocetak && yoff <= drugi_kraj){
      const perc = (yoff-drugi_pocetak)/(drugi_kraj-drugi_pocetak);
      drugi_zadnji.style.transform = `scale(${1+(perc * 0.5)})`;
      drugi_rodjak.style.transform = `translate3d(${(perc * 7)}%, ${(perc * 12)}%, 0)`;
      drugi_srednji.style.transform = `scale(${1+(perc * 0.1)})`;
      drugi_herkul.style.transform = `scale(${1+(-perc * 0.3)})`;
      drugi_prednji.style.transform = `scale(${1+(perc * 0.5)})`;
  
    }else if(yoff >= animacija1_pocetak && yoff <= animacija1_kraj){
      const perc = (yoff-animacija1_pocetak)/(animacija1_kraj-animacija1_pocetak);
      animacija1_lijevi.style.transform = `translate3d( ${(perc * 20)}%, 0,0)`;
      animacija1_desni.style.transform = `scale(${1+(perc * 0.1)})`;
      animacija1_naslov.style.transform = `translate3d(${(-perc * 20)}%, ${(perc * 10)}%,0)`;
      animacija1_pravokutnik.style.width = `${40+perc*35}%`;
  
    }else if(yoff >= treci_pocetak && yoff <= treci_kraj){
      const perc = (yoff-treci_pocetak)/(treci_kraj-treci_pocetak);
      treci_prednji.style.transform = `scale(${1+(perc * 0.2)})`;
      treci_srednji.style.transform = `scale(${1+(perc * 0.3)})`;
      treci_planina.style.transform = `translate3d(0, ${(perc * 10)}%,0)`;
      treci_herkul.style.transform = `scale(${1+(-perc * 0.1)})`;
  
    }else if(yoff >= cetvrti_pocetak && yoff <= cetvrti_kraj){
      const perc = (yoff-cetvrti_pocetak)/(cetvrti_kraj-cetvrti_pocetak);
      cetvrti_prednji.style.transform = `translate3d(${-perc * 10}%,0,0)`;
      cetvrti_srednji.style.transform = `translate3d(0,${perc * 8}%,0)`;
      cetvrti_srednji2.style.transform = `translate3d(0,${perc * 5}%,0)`;
      cetvrti_planina.style.transform = `translate3d(0,${perc * 7}%,0)`;
      cetvrti_herkul.style.transform = `scale(${1+(-perc * 0.2)})`;
  
    }else if(yoff >= cetvrti_kraj && yoff <= peti_kraj){
      const perc = (yoff-cetvrti_kraj)/(peti_kraj-peti_pocetak);
      peti_prednji.style.transform = `translate3d(${-perc * 10}%,0,0)`;
      peti_hrekul.style.transform = `translate3d(${-perc * 10}%,0,0)`;
      peti_planina.style.transform = `translate3d(${perc * 10}% ,${perc * 10}%,0)`;
      peti_srednji.style.transform = `scale(${1+(perc * 0.2)})`;
      peti_mjesec.style.transform = `translate3d(${-perc * 10}% ,${perc * 20}%,0)`;
  
    }else if(yoff >= animacija2_pocetak && yoff <= animacija2_kraj){
      const perc = (yoff-animacija2_pocetak)/(animacija2_kraj-animacija2_pocetak);
      animacija2_pravokutnik.style.height = `${40+perc*35}%`;
      animacija2_tekst.style.transform = `translate3d(0,${perc * 40}%,0)`;
      animacija2_naslov.style.transform = `translate3d(0,${-perc * 30}%,0)`;
  
    }else if(yoff >= sesti_pocetak && yoff <= sesti_kraj){
      const perc = (yoff-sesti_pocetak)/(sesti_kraj-sesti_pocetak);
      sesti_prednji.style.transform = `scale(${1+(perc * 0.2)})`;
      sesti_herkul.style.transform = `scale(${1+(-perc * 0.07)})`;
      sesti_grm.style.transform = `translate3d(0,${perc * 10}%,0)`;
      sesti_planina.style.transform = `scale(${1+(perc * 0.07)})`;
      sesti_ptica.style.transform = `scale(${1+(-perc * 0.2)})`;
  
    }else if(yoff >= sedmi_pocetak && yoff <= sedmi_kraj){
      const perc = (yoff-sedmi_pocetak)/(sedmi_kraj-sedmi_pocetak);
      sedmi_prednji.style.transform = `scale(${1+(perc * 0.25)})`;
      sedmi_srednji.style.transform = `translate3d(${-perc * 10}%,0,0)`;
      sedmi_herkul.style.transform = `translate3d(${-perc * 10}%,${perc * 10}%,0)`;
      sedmi_tekst.style.transform = `translate3d(0,${perc * 30}%,0)`;
  
    }else if(yoff >= osmi_pocetak && yoff <= osmi_kraj){
      const perc = (yoff-osmi_pocetak)/(osmi_kraj-osmi_pocetak);
      osmi_prednji.style.transform = `scale(${1+(perc * 0.25)})`;
      osmi_srednji.style.transform = `translate3d(${-perc * 3}%,0,0)`;
      osmi_konj.style.transform = `translate3d(0,${perc * 10}%,0)`;
      osmi_herkul.style.transform = `scale(${1+(-perc * 0.15)})`;
      osmi_sunce.style.transform = `translate3d(${perc * 10}%,${perc * 20}%,0)`;
      osmi_tekst.style.transform = `translate3d(0,${perc * 30}%,0)`;
  
    }else if(yoff >= deveti_pocetak && yoff <= deveti_kraj){
      const perc = (yoff-deveti_pocetak)/(deveti_kraj-deveti_pocetak);
      deveti_prednji.style.transform = `scale(${1+(perc * 0.2)})`;
      deveti_zadnji.style.transform = `translate3d(${-perc * 5}%,0,0)`;
      deveti_srednji.style.transform = `translate3d(0,${perc * 6}%,0)`;
      deveti_herkul.style.transform = `scale(${1+(-perc * 0.2)})`;
      deveti_tekst.style.transform = `translate3d(0,${perc * 30}%,0)`;
  
    }else if(yoff >= deseti_pocetak && yoff <= deseti_kraj){
      const perc = (yoff-deseti_pocetak)/(deseti_kraj-deseti_pocetak);
      deseti_prednji.style.transform = `translate3d(${-perc * 10}%,0,0)`;
      deseti_srednji.style.transform = `scale(${1+(-perc * 0.05)})`;
      deseti_herkul.style.transform = `scale(${1+(-perc * 0.12)})`;
      deseti_div.style.transform = `translate3d(0,${perc * 8}%,0)`;
      deseti_planina.style.transform = `translate3d(0,${perc * 5}%,0)`;
  
    }else if(yoff >= jedanaesti_pocetak && yoff <= jedanaesti_kraj){
      const perc = (yoff-jedanaesti_pocetak)/(jedanaesti_kraj-jedanaesti_pocetak);
      jedanaesti_srednji.style.transform = `scale(${1+(perc * 0.3)})`;
      jedanaesti_herkul.style.transform = `translate3d(0,${-perc * 10}%,0)`;
      jedanaesti_tekst.style.transform = `translate3d(0,${perc * 25}%,0)`;
      jedanaesti_zadnji.style.transform = `translate3d(${-perc * 7}%,0,0)`;
      jedanaesti_prednji.style.transform = `scale(${1+(perc * 0.3)})`;
  
    }else if(yoff >= dvanaesti_pocetak && yoff <= dvanaesti_kraj){
      const perc = (yoff-dvanaesti_pocetak)/(dvanaesti_kraj-dvanaesti_pocetak);
      dvanaesti_prednji.style.transform = `translate3d(${-perc * 7}%,0,0)`;
      dvanaesti_srednji.style.transform = `translate3d(${perc * 7}%,${perc * 7}%,0)`;
      dvanaesti_herkul.style.transform = `translate3d(${perc * 7}%,${perc * 7}%,0)`;
      dvanaesti_zadnji.style.transform = `translate3d(${perc * 17}%,${-perc * 9}%,0)`;
      dvanaesti_tekst.style.transform = `translate3d(0,${perc * 30}%,0)`;
    }  
  });
  
  //mouse parallax
  
  let constrain = 30;
  let containers = document.querySelectorAll('[data-transform]');
  
  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.width / 2)) / constrain;
    let calcY = (x - box.x - (box.height / 2)) / constrain;
  
    return `translate(${calcX}px, ${calcY}px)`;
  }
  
  function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
  }
  
  containers.forEach(container => {
    let layer = container.querySelector('.box');
    container.onmousemove = function(e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([layer]);
  
      window.requestAnimationFrame(function(){
        transformElement(layer, position);
      });
    };
  });
  
  
  
  let constrain2 = 30;
  let containers2 = document.querySelectorAll('[data-transform2]');
  
  function transforms2(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = -(x - box.x - (box.width / 2)) / constrain;
    
    return "perspective(100000px) "
      + "rotateZ("+ calcX +"deg)"
      + "rotateY("+ calcY +"deg)";
  }
  
  function transformElement2(el, xyEl) {
    el.style.transform = transforms2.apply(null, xyEl);
  }
  
  containers2.forEach(container => {
    let layer2 = container.querySelector('.box');
    container.onmousemove = function(e) {
      let xy = [e.clientX, e.clientY];
      let position2 = xy.concat([layer2]);
  
      window.requestAnimationFrame(function(){
        transformElement2(layer2, position2);
      });
    };
  }); 
});