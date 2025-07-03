import React from 'react'
import CTA from '@/components/CTA'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id='1'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='Science'
          duration={45}
          color='#E5D0FF'
        />
        <CompanionCard
          id='2'
          name='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          subject='Maths'
          duration={45}
          color='#FFDA6E'
        />
        <CompanionCard
          id='3'
          name='Verba the Vocabulary Builder'
          topic='English Literature '
          subject='Language'
          duration={45}
          color='#BDE7FF'
        />
      </section>
      <section className='home-section mb-5'>
        <CompanionList
          title="Recently Completed Session"
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page