import {BufReader} from 'https://deno.land/std/io/mod.ts'
import {parse} from 'https://deno.land/std/encoding/csv.ts'

async function loadPlanetsData(){
    const file=await Deno.open("./kepler_exoplanets_nasa.csv")
    const bufReader= new BufReader(file)
    const result=await parse(bufReader,{
        header:true,
        comment:'#',
    })
    Deno.close(file.rid)

    console.log(result)
}

await loadPlanetsData();