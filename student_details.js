let i=0
let sd=[]
let sd1=[]
let SD={}
let id1=[]
function add()
{
let a=document.getElementById("d1")
let b=document.getElementById("d2")
let c=document.getElementById("m1")
let d=document.getElementById("m2")
let e=document.getElementById("m3")
let f=document.getElementById("m4")
let g=document.getElementById("m5")
let c1=Number(c.value)
let d1=Number(d.value)
let e1=Number(e.value)
let f1=Number(f.value)
let g1=Number(g.value)
let total=c1+d1+e1+f1+g1
let avg=total/5
if (c1<=100 && d1<=100 && e1<=100 && f1<=100 && g1<=100)
    {
        if (c1>=50 && d1>=50 && e1>=50 && f1>=50 && g1>=50)
        {
            if (avg>=50 && avg<=60){
                h1="PASS"
                h2="C"
           }
            else if(avg>=61 && avg<=70){
                h1="PASS"
                h2="B"
            }
            else if(avg>=71 && avg<=80){
                h1="PASS"
                h2="A"
            }
            else if(avg>=81 && avg<=90){
                h1="PASS"
                h2="A+"
            }
            else if(avg>=91 && avg<=100){
                h1="PASS"
                h2="O"
            }
    

        }
        else
        {
            h1="FAIL"
            h2="No Grade"
        }

    }
SD={"name":a.value,"email":b.value,"Tamil_mark":c.value,"English_mark":d.value,"Maths_mark":e.value,"Science_value":f.value,"Social_mark":g.value,"Total":total,"avg":avg,"pass/fail":h1,"Grade":h2}
sd1=[a.value,b.value,c.value,d.value,e.value,f.value,g.value,total,avg,h1,h2]
if (SD["name"]!=""){
sd.push(SD)
}
a.value=""
b.value=""
c.value=""
d.value=""
e.value=""
f.value=""
g.value=""
}
add()
x=0
function view()
{  
    x=x+1
    y="s"+x
    if (sd1[0]!=""){
        i=i+1
    sd1.unshift(i)
    console.log(sd1)
    let k=document.getElementById("T1")
    let h=document.createElement("tr")
    h.setAttribute("id",y)
    s=0
    for(j of sd1){
        s=s+1
        let y1="h"+s
        console.log(i)
        let h1=document.createElement("td")
        h1.setAttribute("id",y1)
        let i1=document.createTextNode(j)
        h1.appendChild(i1)
        h.append(h1)
    
    }
    let h2=document.createElement("button")
    h2.setAttribute("onclick","edi(event)")
    let h3=document.createElement("button")
    h3.setAttribute("onclick","upd(event)")
    let h4=document.createElement("button")
    h4.setAttribute("onclick","del(event)")
    h2.textContent="Edit"
    h3.textContent="Update"
    h4.textContent="Delete"
        h1=document.createElement("td")
        h1.setAttribute("id","h"+13)
        h1.appendChild(h2)
        h1.appendChild(h3)
        h1.appendChild(h4)
        h.append(h1)
        h2.style.backgroundColor="rgb(71, 76, 247)"
        h3.style.backgroundColor="rgb(71, 76, 247)"
        h4.style.backgroundColor="rgb(71, 76, 247)"
        h2.style.borderRadius="20%"
        h3.style.borderRadius="20%"
        h4.style.borderRadius="20%"
    let j1=document.body.appendChild(h)
        k.appendChild(j1)
    
    }


}
view()
function del(event){
    event.target.parentElement.parentElement.remove()
} 
 
sd2=[] 
function edi(event)
{   
    let h1=event.target.parentElement.parentElement.firstChild
    let z=h1.textContent
    let h2=h1.nextSibling
    let h3=h2.nextSibling
    let h4=h3.nextSibling
    let h5=h4.nextSibling
    let h6=h5.nextSibling
    let h7=h6.nextSibling
    let h8=h7.nextSibling
    let h9=h8.nextSibling
    let h10=h9.nextSibling
    let h11=h10.nextSibling
    let h12=h11.nextSibling
    h1.textContent=""
    h2.textContent=""
    h3.textContent=""
    h4.textContent=""
    h5.textContent=""
    h6.textContent=""
    h7.textContent=""
    h8.textContent=""
    h9.textContent=""
    h10.textContent=""
    h11.textContent=""
    h12.textContent=""
sd2=[z]
}
let sd3=[]
function upd(event){
let a=document.getElementById("d1")
let b=document.getElementById("d2")
let c=document.getElementById("m1")
let d=document.getElementById("m2")
let e=document.getElementById("m3")
let f=document.getElementById("m4")
let g=document.getElementById("m5")
let c1=Number(c.value)
let d1=Number(d.value)
let e1=Number(e.value)
let f1=Number(f.value)
let g1=Number(g.value)
let total=c1+d1+e1+f1+g1
let avg=total/5
if (c1<=100 && d1<=100 && e1<=100 && f1<=100 && g1<=100)
    {
        if (c1>=50 && d1>=50 && e1>=50 && f1>=50 && g1>=50)
        {
            if (avg>=50 && avg<=60){
                h1="PASS"
                h2="C"
           }
            else if(avg>=61 && avg<=70){
                h1="PASS"
                h2="B"
            }
            else if(avg>=71 && avg<=80){
                h1="PASS"
                h2="A"
            }
            else if(avg>=81 && avg<=90){
                h1="PASS"
                h2="A+"
            }
            else if(avg>=91 && avg<=100){
                h1="PASS"
                h2="O"
            }
    

        }
        else
        {
            h1="FAIL"
            h2="No Grade"
        }

    }
sd3=[a.value,b.value,c.value,d.value,e.value,f.value,g.value,total,avg,h1,h2]
sd3.unshift(sd2[0])
a.value=""
b.value=""
c.value=""
d.value=""
e.value=""
f.value=""
g.value=""
let z1=event.target.parentElement.parentElement.firstChild
let z2=z1.nextSibling
let z3=z2.nextSibling
let z4=z3.nextSibling
let z5=z4.nextSibling
let z6=z5.nextSibling
let z7=z6.nextSibling
let z8=z7.nextSibling
let z9=z8.nextSibling
let z10=z9.nextSibling
let z11=z10.nextSibling
let z12=z11.nextSibling
z1.textContent=sd3[0]
z2.textContent=sd3[1]
z3.textContent=sd3[2]
z4.textContent=sd3[3]
z5.textContent=sd3[4]
z6.textContent=sd3[5]
z7.textContent=sd3[6]
z8.textContent=sd3[7]
z9.textContent=sd3[8]
z10.textContent=sd3[9]
z11.textContent=sd3[10]
z12.textContent=sd3[11]
}

