/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'


type DataProfileType = {
    name: string
    avatar_url: string
    bio: string
}


export default function Welcome() {
    const [profile, setProfile] = useState("")
    const [dataProfile, setDataProfile] = useState<DataProfileType>()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    async function getProfile() {
        setLoading(true)
        try {
            const data = await fetch(`https://api.github.com/users/${profile}`)
            if (data.status === 404) {
                setMessage("Ops, usuário não encontrado...")
                return;
            }
            const response = await data.json()
            setDataProfile(response)
            setLoading(false)
            setMessage("Nice!")

        } catch (error) {
            setMessage("Ops!, erro no servidor")
            setLoading(false)
        }
    }

    return (
        <>
            <h1 className="text-brand-cyan text-5xl mb-4">Bem-vindo!</h1>
            <h2 className="text-2xl font-bold">Qual seu nick no github?</h2>
            <div className="grid items-center gap-2 grid-cols-2">
                <input type="text" placeholder="Type here" className="input input-bordered input-success w-full " value={profile} onChange={(e) => setProfile(e.target.value)} />
                <button className="btn gap-2" onClick={() => getProfile()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    Buscar
                </button>
            </div>
            {message &&
                <p>{message}</p>
            }
            {loading &&
                <div className="card w-96 h-96 bg-base-100 shadow-xl  mt-4 p-4 bg-slate-600">
                    <div className="animate-pulse bg-slate-700 w-16 h-8 rounded-xl mt-4"></div>
                    <div className="animate-pulse bg-slate-700 w-full h-6 rounded-xl mt-2"></div>

                </div>

            }
            {!loading && dataProfile &&
                <div className="card w-96 bg-base-100 shadow-xl image-full mt-4">
                    <figure><img src={dataProfile.avatar_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{dataProfile.name}</h2>
                        <p>{dataProfile.bio}</p>
                    </div>
                </div>

            }





        </>
    )
}
