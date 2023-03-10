import { useState, useEffect } from 'react'
import { BsBackspace } from "react-icons/bs";

export default function Search() {
    const [handle, setHandle] = useState('');

    const [auxP, setAuxP] = useState([{}]);
    const [auxPP, setAuxPP] = useState([{}]);
    const [auxF, setAuxF] = useState([{}]);

    const [flag, setFlag] = useState(false);
    const conjugationFR1 = require("conjugation-fr");
    const conjugationFR2 = require("conjugation-fr");
    const conjugationFR3 = require("conjugation-fr");

    function Submite() {
        setHandle(handle)
        if (handle === '' || handle === ' ') {
            console.log('tururu');
        } else {

            setAuxP(conjugationFR1.findTense(`${handle}`, "indicative perfect-tense"))
            setAuxPP(conjugationFR2.findTense(`${handle}`, "indicative present"))
            setAuxF(conjugationFR3.findTense(`${handle}`, "indicative future"))
            setFlag(true);
        }
    }

    function handleText() {
        setHandle('')
        setFlag(false);
    }

    useEffect(() => {
    }, [auxP, auxPP, auxF])

    return (
        <main>
            <input
                className='bg-[#4442] w-[700px] relative  text-zinc-50 h-10 p-6 text-xl font-semibold outline outline-1 outline-zinc-400 focus:outline-1 focus:outline-zinc-50 rounded-md transition-all focus:text-[#009CCCFF] placeholder:text-zinc-400 '
                value={handle}
                placeholder="Entre com o verbo"
                onChange={(ev) => (setHandle(ev.target.value.toLocaleLowerCase()))}
                type="text"
            />
            <button onClick={Submite} className='bg-[#009CCCFF] h-12 px-4 rounded-md absolute -right-36 top-0 text-zinc-50 text-lg hover:opacity-80 transition-all'>Pesquisar</button>
            {handle != '' && (
                <div className='absolute right-3 top-[10px] cursor-pointer '>
                    <BsBackspace onClick={handleText} size={30} className="text-[#009CCCFF] hover:text-[#49cbf2] active:text-sky-100 transition-all " />
                </div>
            )}
            {flag === true ? (<Teste past={auxP} present={auxPP} future={auxF} />) : (
                <></>
            )
            }
        </main >
    )
}
function Teste({ past, present, future }: any) {
    return (
        <div className='mt-8 w-full h-full'>
            <table className='w-full '>
                <thead className='flex items-center justify-around '>
                    <tr>
                        <th>
                            <p className='text-zinc-50 font-bold text-lg mb-4'>le pass??</p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p className='text-zinc-50 font-bold text-lg mb-4'>le pr??sent</p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p className='text-zinc-50 font-bold text-lg mb-4'>le futur</p>
                        </th>
                    </tr>
                </thead>
                <tbody className='flex items-center justify-around'>
                    <tr>
                        <th>
                            {past.map((e: any) => (
                                <p key={e.pronounIndex} className='text-zinc-50 font-thin flex justify-start gap-4'><span className='flex justify-start font-bold'>{e.pronoun}</span> {e.verb}</p>
                            ))}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            {present.map((e: any) => (
                                <p key={e.pronounIndex} className='text-zinc-50 font-thin flex justify-start gap-4'><span className='flex justify-start font-bold'>{e.pronoun}</span> {e.verb}</p>
                            ))}
                        </th>
                    </tr>
                    <tr>
                        <th>
                            {future.map((e: any) => (
                                <p key={e.pronounIndex} className='text-zinc-50 font-thin flex justify-start gap-4'><span className='flex justify-start font-bold'>{e.pronoun}</span> {e.verb}</p>
                            ))}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
