import {join} from 'https://deno.land/std/path/mod.ts'
import {BufReader} from 'https://deno.land/std/io/mod.ts'
import {parse} from 'https://deno.land/std/encoding/mod.ts'

async function loadPlanetsData(){
    const path=join(".","kepler_exoplanets_nasa.csv")
    const file=await Deno.open(path)
    const bufReader= new BufReader(file)
    console.log(data)
}

await readFile();