'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import '@/lib/env';

import { TotalNumber } from '@/components/TotalNumber';
import { WaitlistForm } from '@/components/WaitlistForm';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <>
      <div className='flex gap-3 justify-center items-center mb-6 w-full'>
        <h1 className='flex flex-col gap-6 text-5xl md:text-8xl w-full items-center'>
          <motion.span
            className='flex gap-3 md:gap-36 items-center'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src='/logo.webp'
              alt='Logo'
              sizes='100vw'
              className='w-auto h-16 md:h-56'
              width={100}
              height={100}
            />
            <Image
              src='/demo.png'
              alt='Demo'
              sizes='100vw'
              className='w-auto h-64 md:h-96'
              width={100}
              height={100}
            />
          </motion.span>
        </h1>
      </div>
      <div className='gap-8 py-4 md:py-8 flex flex-col text-gray-800 items-center'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='md:text-lg text-md  max-w-3xl'
        >
          Erleben Sie eine neue Art des Lernens mit MiLeMed! Unsere App bietet
          kompakte Vorlesungen und Materialien zu verschiedenen medizinischen
          Themen, die Sie unterwegs oder in kurzen Lernsitzungen nutzen können.
          Ideal für angehende Ärzte, die ihre Kenntnisse schnell und effizient
          vertiefen möchten.
        </motion.span>
        {/* <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className='text-md max-w-3xl'
        >
          Elections are happening on various schedules around the world, and
          we're committed to making sure you succeed in participating in yours,
          no matter where you're from. Even if you haven't been involved in
          elections in the past or don't know when the next one is, we'll work
          with you to figure it out!
        </motion.span> */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className='text-md'
        >
          Treten Sie den Studenten bei, die sich bereits auf unsere Warteliste
          gesetzt haben.
          {/* Join the students who've already signed up for our waitlist */}
        </motion.span>
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className='text-md'
          >
            <TotalNumber targetNumber={46} initialValue={1} />
            <p className='text-sm text-gray-800'>seit September</p>
          </motion.span>
        </div>
      </div>
      <WaitlistForm />
    </>
  );
}
