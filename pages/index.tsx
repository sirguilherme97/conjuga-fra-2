import { useState } from "react";
import ListaArt from '../public/data.json'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Theme } from '@mui/material/styles';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);


export default function Home() {

  return (
    <div
      style={{ width: '100vw', height: '100vh', background: '#DDD', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '80px', gap: '20px' }}>

      <div
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <p style={{ fontSize: '35pt', fontWeight: 'bold', color: 'Menu' }}>Conjuga FRA</p>
        <p style={{ color: 'Menu' }}>Digite qualquer verbo para obter as conjugações nos tempos verbais</p>
      </div>
      <div style={{ marginTop: '80px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Table />
      </div>
    </div>
  )
}
function Table() {
  const [busca, setBusca] = useState('');
  const lowerBusca = busca.toLowerCase()
  const ListaFiltrada = ListaArt.verbs.filter((Lista) => Lista.verb.toLowerCase().includes(lowerBusca))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', display: 'flex' }}>
        <input
          style={{ borderRadius: '6px', background: 'white', fontSize: '13pt', fontWeight: '600', color: 'steelblue', paddingLeft: '20px', position: 'relative', width: '850px', height: '50px', padding: '10px' }}
          value={busca}
          placeholder="manger, écrire, penser,  etc... "
          onChange={(ev) => setBusca(ev.target.value)}
          type="text" />
        {busca != '' ?
          (
            <p onClick={() => { setBusca('') }} style={{ cursor: 'pointer', color: "steelblue", fontWeight: 'bold', right: '2%', top: '15%', fontSize: '20pt', position: 'absolute' }}>X</p>
          ) : (<></>)}
      </div>
      <div >
        {busca == '' ? (
          <div style={{ display: 'flex', gap: '8px', marginTop: '40px', fontSize: '14pt', color: 'gray', }}>
            {ListaFiltrada.map((e: any) => (
              <div onClick={() => { setBusca(e.verb) }} key={e.verb} style={{ display: 'flex', background: "#ccc", color: 'steelblue', padding: '8px', borderRadius: '6px', cursor: 'pointer' }}>
                <p>{e.verb}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '80px', marginTop: '80px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', border: '3px solid #BBB', padding: '20px', borderRadius: '16px', boxShadow: '2px 2px 5px 5px #ccc9' }}>
              {ListaFiltrada.map((e: any) => (
                <div key={e.verb} style={{ display: 'flex', gap: '50px', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                  {e.verb != busca ? (<></>) : (
                    e.tenses.map((e: any) => (
                      <div key={e.conjugations} style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: '14pt', color: 'firebrick', marginBottom: '16px' }}><b>{e.tense}</b></p>
                        {e.conjugations.map((e: any) => (
                          <div key={e.term} style={{ display: 'flex', flexDirection: 'column', color: 'steelblue', minWidth: '350px', padding: '4px' }}>
                            <p style={{ background: '#ccc', padding: '6px' }}><b>{e.term}</b></p>
                            <p style={{ paddingTop: '10px', color: '#111', padding: '4px' }}>{e.definition}</p>
                          </div>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        )
        }
      </div >
    </div >
  )
}
