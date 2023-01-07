import { useState } from 'react'
import ListaArt from '../../../public/data.json'

import { Search } from '../Search/index'
export function Table() {
    const [busca, setBusca] = useState('');
    const lowerBusca = busca.toLowerCase()
    const ListaFiltrada = ListaArt.verbs.filter((Lista) => Lista.verb.toLowerCase().includes(lowerBusca))

    return (
        <div className='flex flex-col items-center justify-center' >
            <div className='relative flex ' >
                <Search />
            </div>
            {/* <div >
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
            </div > */}
        </div >
    )
}
