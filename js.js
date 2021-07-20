let personas = [
    {
    nombre:"Ana",
    edad:15,
    grado:"5to",
    nivel:"Secundaria",
    },
    {
    nombre:"Carlos",
    edad:16,
    grado:"5to",
    nivel:"Secundaria",
    },
    {
    nombre:"Juan",
    edad:12,
    grado:"2do",
    nivel:"Primaria",
    },
    {
    nombre:"Sofia",
    edad:10,
    grado:"1ro",
    nivel:"Primaria",
    },
    {
    nombre:"Pedro",
    edad:11,
    grado:"1ro",
    nivel:"Primaria",
    },
    ]
// a
for(let e of personas)
{
    console.log("nombre: " + e.nombre+" - edad: "+e.edad+" - grado: "+e.grado+" - nivel: "+e.nivel)
}
//b
let r;
for(let i=0; i<personas.length; i++)
{
    if(personas[i].nivel=="Secundaria")
    {
        console.log(personas[i])
        r=r+1;
    }
}
//c
let s;
for(let j=0; j<personas.length; j++)
{
    if(personas[j].nivel=="Primaria")
    {
        console.log(personas[j])
        s=s+1;
    }
}
//d
for(let k=0; k<personas.length; k++)
{
    if(personas[k].nivel>=15)
    {
        console.log(personas[k])
    }
}
//e
console.log(personas.sort((a,b)=>a.edad-b.edad))
//f
//g
//h
let m=0;
for(let l=0; l<personas.length; l++)
{
    m=m+personas[l].edad;
}
promedio=m/personas.length;
console.log(promedio)