import React from 'react'
import Image from 'next/image'

const techs = [
    {
        id: 1,
        src: '/html.png',
        title: 'HTML',
        style: 'shadow-orange-500',
    },
    {
        id: 2,
        src: '/css.png',
        title: 'CSS',
        style: 'shadow-blue-500',
    },
    {
        id: 3,
        src: '/javascript.png',
        title: 'JavaScript',
        style: 'shadow-yellow-500',
    },
    {
        id: 4,
        src: '/typescript.png',
        title: 'TypeScript',
        style: 'shadow-blue-900',
    },
    {
        id: 5,
        src: '/react.png',
        title: 'React',
        style: 'shadow-blue-600',
    },
    {
        id: 6,
        src: '/tailwind.png',
        title: 'Tailwind',
        style: 'shadow-sky-400',
    },
    {
        id: 7,
        src: '/nextjs.png',
        title: 'Next JS',
        style: 'shadow-black',
    },
    {
        id: 8,
        src: '/github.png',
        title: 'GitHub',
        style: 'shadow-gray-400',
    },
    {
        id: 9,
        src: '/node.png',
        title: 'Node JS',
        style: 'shadow-green-600',
    },
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
                    <div className="md:w-1/2">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is José and I am a{' '}
                            <span className="font-bold">
                                {'highly ambitious'}
                            </span>
                            ,
                            <span className="font-bold">
                                {' self-motivated'}
                            </span>
                            , and
                            <span className="font-bold">{' driven'}</span>{' '}
                            software engineer based in Pucón, Chile.
                        </p>
                        <br />
                        <p>
                            I graduated from @DUOC UC San Carlos in 2022 with a
                            Software Engineer degree and have been working in
                            the field ever since.
                        </p>
                        <br />
                        <p>
                            I have a wide range of hobbies and passions that
                            keep me busy. From gaming, playing sports,
                            traveling, to making YouTube videos, I am always
                            seeking new experiences and love to keep myself
                            engaged and learning new things.
                        </p>
                        <br />
                        <p>
                            I believe that you should{' '}
                            <span className="font-bold text-teal-500">
                                never stop growing
                            </span>{' '}
                            and that&#39;s what I strive to do, I have a passion
                            for technology and a desire to always push the
                            limits of what is possible. I am excited to see
                            where my career takes me and am always open to new
                            opportunities. 🙂
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                            {techs.map(({ id, src, title, style }) => (
                                <div
                                    key={id}
                                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                                >
                                    <Image
                                        src={src}
                                        alt="tech__image"
                                        className="w-20 mx-auto"
                                        width={50}
                                        height={50}
                                    />
                                    <p className="mt-4">{title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
