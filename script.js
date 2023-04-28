'use strict';

//  **************************************** BUG on line 167 to 191  **********************************************


// selecting sections
let kits = document.querySelectorAll('.kit');
let intro = document.querySelector('.section-intro');
let kitsSection = document.querySelector('.section-kits')

// selecting icons/buttons
let closeIntro = document.querySelector('.close');
let closeKits = document.querySelector('.close-kit');
let changeKit = document.querySelector('#change-kit')

// selecting drum pads
let drum1 = document.getElementById('drum_1')
let drum2 = document.getElementById('drum_2')
let drum3 = document.getElementById('drum_3')
let drum4 = document.getElementById('drum_4')
let drum5 = document.getElementById('drum_5')
let drum6 = document.getElementById('drum_6')


// lists of audio locations

let basic808 = ['assets/808/hihat1.wav',
                'assets/808/hihat2.wav',
                'assets/808/kick1.wav',
                'assets/808/kick2.wav',
                'assets/808/snare1.wav',
                'assets/808/snare2.wav']

let acoustic = ['assets/acoustic/crash.wav',
                'assets/acoustic/kick.wav',
                'assets/acoustic/ride.wav',
                'assets/acoustic/snare1.wav',
                'assets/acoustic/snare2.wav',
                'assets/acoustic/tom.wav']

let hipHop = ['assets/hip-hop/bass.wav',
              'assets/hip-hop/hat.wav',
              'assets/hip-hop/kick.wav',
              'assets/hip-hop/scratch.wav',
              'assets/hip-hop/snare.wav',
              'assets/hip-hop/snare2.wav']



// ************** functions *******************
// function to change active class on kits
function removeActive(){
    kits.forEach(kit => {
        kit.classList.remove('active-kit')
    })
}

// funciton to add hidden class
function addHidden(ele) {
    ele.classList.add('hidden')
}

document.addEventListener('keydown',function(e){
    console.log(e.key)
})

// function to play audio
function playBeats(audioLists){
    // for drum 1 
    drum1.addEventListener('click', () => {
        let beat1 = new Audio(audioLists[0])
        beat1.play()
    })

    document.addEventListener('keydown', function(e){
        if(e.key === 'a'){
            let beat1 = new Audio(audioLists[0])
            beat1.play()
        }
    })
    // for drum 2 
    drum2.addEventListener('click', () => {
        let beat2 = new Audio(audioLists[1])
        beat2.play()
    })

    document.addEventListener('keydown', function(e) {
        if(e.key === 's'){
            let beat2 = new Audio(audioLists[1])
            beat2.play()
        }
    })
    // for drum 3 
    drum3.addEventListener('click', () => {
        let beat3 = new Audio(audioLists[2])
        beat3.play()
    })

    document.addEventListener('keydown', function(e) {
        if(e.key === 'd'){
            let beat3 = new Audio(audioLists[2])
            beat3.play()
        }
    })
    // for drum 4 
    drum4.addEventListener('click', () => {
        let beat4 = new Audio(audioLists[3])
        beat4.play()
    })

    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight'){
            let beat4 = new Audio(audioLists[3])
            beat4.play()
        }
    })
    // for drum 5 
    drum5.addEventListener('click', () => {
        let beat5 = new Audio(audioLists[4])
        beat5.play()
    })

    document.addEventListener('keydown', function(e) {
        if(e.key === 'ArrowDown'){
            let beat5 = new Audio(audioLists[4])
            beat5.play()
        }
    })
    // for drum 6 
    drum6.addEventListener('click', () => {
        let beat6 = new Audio(audioLists[5])
        beat6.play()
    })

    document.addEventListener('keydown', function(e) {
        if(e.key === 'ArrowLeft'){
            let beat6 = new Audio(audioLists[5])
            beat6.play()
        }
    })
}



//  *************** code logic ******************
// selecting kits
kits.forEach(kit => {
    kit.addEventListener('click', ()=>{
        removeActive()
        kit.classList.add('active-kit')
    })
})

// closing intro section 
closeIntro.addEventListener('click', ()=>{
    addHidden(intro)
})

// closing kits section 
closeKits.addEventListener('click', ()=>{
    addHidden(kitsSection)
})


// unhiding kits section (on button kit)
changeKit.addEventListener('click',()=>{
    // ***************************************************** BUG *********************************************************** 
    // after changing the kit when user hits the drum somehow the app plays the two sounds one of selected kit and another of 
    // previous kit.
    // if you can help me this then please guide me or send me the solution on my my profiles below.
    // 
    //  linkedin : https://www.linkedin.com/in/gitanshu-sankhla/
    // instagram: https://www.instagram.com/lazydeveloper18/

    kitsSection.classList.remove('hidden')

    alert('sorry for the inconvenience, changing kit button is not working properly it is causing sound overlapping. if you want to change kit please reload the page and choose another kit.')
})



setInterval(()=>{
    if (kits[0].classList.contains('active-kit')){
        playBeats(basic808)
    }else if (kits[1].classList.contains('active-kit')){
        playBeats(acoustic)
    }else if (kits[2].classList.contains('active-kit')){
        playBeats(hipHop)
    }
},5000)




