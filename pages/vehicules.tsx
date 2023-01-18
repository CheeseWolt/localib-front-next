import BaseLayout from '@/components/BaseLayout'
import React from 'react'
import Head from 'next/head'

const vehicules = () => {
  return (
    <>
    <Head>
        <title>Liste des véhicules</title>
    </Head>
    <div>
        <h1>Véhicules disponibles</h1>
    </div>
    </>
  )
}

export default vehicules