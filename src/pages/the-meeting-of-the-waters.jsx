import Head from 'next/head'
import { Container } from '@/components/Container'
import PdfReader from '@/components/PdfReader'
import React, { Fragment, useState } from 'react'
import { Listbox, Tab } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const tabs = [
    {
        id: 0,
        title: "1",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-1.pdf",
    },
    {
        id: 1,
        title: "2",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-2.pdf",
    },
    {
        id: 2,
        title: "3",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-3.pdf",
    },
    {
        id: 3,
        title: "4",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-4.pdf",
    },
    {
        id: 4,
        title: "5",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-5.pdf",
    },
    {
        id: 5,
        title: "6",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-6.pdf",
    },
    {
        id: 6,
        title: "7",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-7.pdf",
    },
    {
        id: 7,
        title: "8",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-8.pdf",
    },
    {
        id: 8,
        title: "9",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-9.pdf",
    },
    {
        id: 9,
        title: "10",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-10.pdf",
    },
    {
        id: 10,
        title: "11",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-11.pdf",
    },
    {
        id: 11,
        title: "12",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-12.pdf",
    },
    {
        id: 12,
        title: "13",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-13.pdf",
    },
    {
        id: 13,
        title: "14",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-14.pdf",
    },
    {
        id: 14,
        title: "15",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-15.pdf",
    },
    {
        id: 15,
        title: "16",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-16.pdf",
    },
    {
        id: 16,
        title: "17",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-17.pdf",
    },
    {
        id: 17,
        title: "18",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/chapter-18.pdf",
    },
    {
        id: 18,
        title: "References",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/references.pdf",
    },
    {
        id: 19,
        title: "Illustrations",
        url: "https://peter-conridge.s3.eu-west-2.amazonaws.com/illustrations.pdf",
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tmotw() {
    const [selected, setSelected] = useState(0)

    return (
        <>
            <Head>
                <title>The Meeting of the Waters</title>
                <meta
                    name="description"
                    content="The Meeting of the Waters"
                />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <h1 className="text-4xl font-bold tracking-tight text-sky-900 dark:text-zinc-100 sm:text-5xl">
                    The Meeting of the Waters
                </h1>
                <div className="mt-4 text-gray-500 dark:text-gray-400">
                    Select a chapter below to begin reading.
                </div>
                <div className="mt-4 sm:mt-8 antialiased font-sans bg-gray-200 overflow-hidden border border-gray-200 rounded-xl">
                    <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
                        <Tab.Group selectedIndex={selected} onChange={(index) => {
                            setSelected(index)
                        }}>
                            <div className="hidden sm:block">
                                <div className="border-b border-gray-200">
                                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                        <Tab.List>
                                            {tabs.map((tab) => (
                                                <Tab as={Fragment} key={tab.id}>
                                                    {({ selected }) => (
                                                        <a href="#"
                                                            className={classNames(
                                                                selected ? 'border-teal-500 text-teal-500'
                                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm inline-flex items-center'
                                                            )}
                                                            aria-current={selected ? 'page' : undefined}
                                                        >
                                                            {tab.title}
                                                        </a>)}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </nav>
                                </div>
                            </div>
                            <div className="sm:hidden">
                                <Listbox value={tabs.find(tab => tab.id === selected)} onChange={(index) => {
                                    setSelected(index.id)
                                }} className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-3 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                    <div className="relative mt-1">
                                        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                            <span className="block truncate">{tabs.find(tab => tab.id === selected).title}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Listbox.Button>
                                        <Listbox.Options>
                                            {tabs.map((tab) => (
                                                <Listbox.Option
                                                    key={tab.id}
                                                    value={tab}
                                                    className={({ active }) =>
                                                        `relative rounded-md cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-200' : 'text-gray-900'
                                                        }`
                                                    }
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span
                                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                    }`}
                                                            >
                                                                {tab.title}
                                                            </span>
                                                            {selected ? (
                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-200">
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </div>
                                </Listbox>
                            </div>
                            <Tab.Panels className="mt-8 sm:mt-8 rounded-xl bg-white-p-3">
                                {tabs.map((tab) => (
                                    <Tab.Panel key={tab.id}>
                                        <p className="text-gray-500 text-sm">
                                            Trouble loading? <a target="_blank" href={tab.url} className="bold text-teal-500 underline">Click here</a> to download chapter: {tab.title}.
                                        </p>
                                        <PdfReader key={tab.id} url={tab.url} height="1000px" width="100%" />
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </div>
            </Container>
        </>
    )
}
