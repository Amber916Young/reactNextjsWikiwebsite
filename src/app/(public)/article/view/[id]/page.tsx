"use client";
import {motion} from "framer-motion";
import {VrLineLong, VrLineShort, HrLine} from "@/src/components/common/HrLine";

import {HeadTitle} from "@/src/components/common/Title";
import {PageContent} from "@/src/components/common/PageContent";
import {articleContent} from "@/src/mock/articleContent";
import './customQuillStyles.less';

type Props = {};

const WebArticleView = (props: Props) => {

    // @ts-ignore
    return (
        <>
            <section id="articleView" className="mt-20 bg-white">

                <motion.div
                    className="container mx-auto flex flex-wrap py-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >

                    <section className="w-full md:w-2/3 flex flex-col items-center px-3 ">


                        <hr className="w-full m-2 h-0.5 border-t-0 bg-grey-white opacity-100 dark:opacity-50"/>
                        <div className="flex  flex-wrap">
                            <div
                                className="shadow  md:m-4 m-2 ">

                                <PageContent content={articleContent}/>

                            </div>


                        </div>

                    </section>
                    <aside className="w-full md:w-1/3 flex flex-col items-center px-3">

                        <div className="w-full bg-white shadow flex flex-col my-4 p-4">
                            <HeadTitle titleName="推荐阅读"/>
                            <HrLine/>
                            <div
                                className="mb-4 text-base text-neutral-600 dark:text-neutral-200 flex flex-wrap	">

                                <a href="#"
                                   className="w-full mb-2 flex flex-col items-center bg-white  rounded  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img
                                        className="object-cover h-10 md:h-full  w-full rounded   md:w-20 md:rounded-none "
                                        src="https://v1.tailwindcss.com/img/card-top.jpg" alt=""/>
                                    <div className="flex flex-col justify-between p-2 leading-normal">
                                        <div
                                            className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                                            technology acquisitions 2021
                                        </div>
                                        <div className="font-normal text-gray-700 dark:text-gray-400">Here are
                                            the biggest ent
                                        </div>
                                    </div>
                                </a>


                                <a href="#"
                                   className="w-full mb-2 flex flex-col items-center bg-white  rounded  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="flex flex-col justify-between p-2 leading-normal">
                                        <div
                                            className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                                            technology acquisitions 2021
                                        </div>
                                        <div className="font-normal text-gray-700 dark:text-gray-400">Here are
                                            the biggest ent
                                        </div>
                                    </div>
                                </a>

                                <a href="#"
                                   className="w-full mb-2 flex flex-col items-center bg-white  rounded  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="flex flex-col justify-between p-2 leading-normal">
                                        <div
                                            className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                                            technology acquisitions 2021
                                        </div>
                                        <div className="font-normal text-gray-700 dark:text-gray-400">Here are
                                            the biggest ent
                                        </div>
                                    </div>
                                </a>


                            </div>
                        </div>

                    </aside>


                </motion.div>

            </section>
        </>

    );
};

export default WebArticleView;


