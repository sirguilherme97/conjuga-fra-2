import { useState } from "react";
// import ListaArt from '../public/data.json'
import ListaArt from '../public/data.json'

export default function Home() {

  return (
    <div
      style={{ width: '100vw', height: '100vh', backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://i.pinimg.com/originals/b8/4f/41/b84f4195a6d33c93d01111287c0c7b7e.jpg)`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '80px', gap: '20px' }}>
      <div
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '100px' }}>
        <p style={{ fontSize: '70pt', fontWeight: '800', color: '#f1f1f1' }}>Conjuga <span style={{ color: '#009CCCFF' }}>F</span><span style={{ color: 'white' }}>R</span><span style={{ color: 'red' }}>A</span></p>
        <p style={{ color: '#f1f1f1', fontSize: '13pt' }}>Use a entrada abaixo para inserir o verbo que você deseja conjugar nos tempos verbais da 1ª pessoa</p>
      </div>
      <div style={{ marginTop: '16px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'space-evenly' }}>
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
          style={{ borderRadius: '6px', color: 'white', background: '#4442', boxShadow: '0px 0px 5px 2px #1111', border: '2px solid #7772', outline: '1px', fontSize: '14pt', fontWeight: '600', paddingLeft: '32px', position: 'relative', width: '850px', height: '50px', padding: '10px' }}
          value={busca}
          placeholder="manger, écrire, penser,  etc... "
          onChange={(ev) => setBusca(ev.target.value)}
          type="text" />
        {busca != '' ?
          (
            <p onClick={() => { setBusca('') }} style={{ cursor: 'pointer', color: "#00CFFFDD", fontWeight: 'bold', right: '2%', top: '15%', fontSize: '20pt', position: 'absolute' }}>X</p>
          ) : (<></>)}
      </div>
      <div >
        {busca == '' ? (
          <div style={{ display: 'flex', gap: '8px', marginTop: '40px', fontSize: '14pt' }}>
            {ListaFiltrada.map((e: any) => (
              <div onClick={() => { setBusca(e.verb) }} key={e.verb} style={{ display: 'flex', background: "#7775", color: '#f1f1f1', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
                <p>{e.verb}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ width: '100%', display: 'flex', background: '#4442', borderRadius: '16px', flexDirection: 'row', gap: '80px', marginTop: '80px', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '0px 0px 15px 3px #1113', width: '100%', padding: '20px', borderRadius: '16px' }}>
              {ListaFiltrada.map((e: any) => (
                <div key={e.verb} style={{ display: 'flex', gap: '50px', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
                  {e.verb != busca ? (<></>) : (
                    e.tenses.map((e: any) => (
                      <div key={e.conjugations} style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontSize: '14pt', color: 'white', marginBottom: '16px' }}><b>{e.tense}</b></p>
                        {e.conjugations.map((e: any) => (
                          <div key={e.term} style={{ display: 'flex', flexDirection: 'column', color: '#f1f1f1', minWidth: '350px', padding: '4px' }}>
                            <p style={{ background: '#7775', padding: '6px' }}><b>{e.term}</b></p>
                            <p style={{ marginTop: '8px', color: '#00CFFFDD', padding: '4px' }}>{e.definition}</p>
                          </div>
                        ))}
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>//=)
        )
        }
      </div >
    </div >
  )
}
