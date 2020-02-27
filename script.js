let c=cnv.getContext('2d')
c.strokeStyle='red'
c.strokeRect(0,0,600,500)

btn.addEventListener('click',karucel);
document.addEventListener('keyup',function(e){
	if (e.keyCode==13) {
		karucel()
	}
})

function karucel(){
	let patker=sel.value
	let kord=inp.value
	let color=col.value
	let strk=rang.value
	if(patker==3){
		kord=kord.split(',')
		if(kord.length==6){
			c.strokeStyle=color
			c.lineWidth=strk
			c.beginPath()
			c.moveTo(kord[0],kord[1])
			c.lineTo(kord[2],kord[3])
			c.lineTo(kord[4],kord[5])
			c.lineTo(kord[0],kord[1])
			c.stroke()
		}
		else { 
			let text='Լրացրեք անհրաժեշտ քանակի կորդինատ'
			p.innerHTML=text
		}
	}
	if(patker==4){
		kord=kord.split(',')
		if(kord.length==4){
			c.beginPath()
			c.strokeStyle=color
			c.lineWidth=strk
			c.strokeRect(kord[0],kord[1],kord[2],kord[3])
			c.stroke()
		}
		else {
			let text='Լրացրեք անհրաժեշտ քանակի կորդինատ'
			p.innerHTML=text
		}
	}
	if(patker==0){
		kord=kord.split(',')
		if(kord.length==3){
			c.beginPath()
			c.strokeStyle=color
			c.lineWidth=strk
 			c.arc(kord[0],kord[1],kord[2],0,2*Math.PI)
			c.stroke()
		}
		else {
			let text='Լրացրեք անհրաժեշտ քանակի կորդինատ'
			p.innerHTML=text
		}
	}
}

let ok=false

cnv.addEventListener('mousedown',function(e){
	ok=true
	let color=col.value
	c.strokeStyle=color
	let x=e.pageX-10
	let y=e.pageY-55
	c.beginPath()
	c.moveTo(x,y)
})

cnv.addEventListener('mouseup',function(){
	ok=false
})

cnv.addEventListener('mousemove',paint)

function paint(e){
	if(ok!=true){
		return
	}
	let color=col.value
	let strk=rang.value
	let x=e.pageX-10
	let y=e.pageY-55
	c.strokeStyle=color
	c.lineWidth=strk
	c.lineTo(x,y)
	c.stroke()
}	