"use client";

import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {VrLineLong, VrLineShort, HrLine} from "@/src/components/common/HrLine";
import {
    ArrowLeftCircleIcon,
    ArrowLeftIcon,
    ArrowUturnRightIcon,
    ArrowRightCircleIcon,
    ArrowRightIcon, EllipsisVerticalIcon,
    HeartIcon
} from "@heroicons/react/20/solid";
import {HeadTitle} from "@/src/components/common/Title";
import {SolidCircle} from "@/src/components/common/Circle";
import { SelectedPage } from "@/src/interface/index";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};
const testImage = "https://i.imgur.com/ynIkmrO.jpg";
const testImage2 = "https://v1.tailwindcss.com/img/card-top.jpg";

const WebCateHomeSection = () => {

    const cardCss = "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-purple-dark";

    const tagCss = "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-dark mr-2 mb-2";
    const categoryBtn = "py-1.5 px-3 text-purple-dark ";
    const dropdownRef = useRef(null);

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    // useEffect(() => {
    //     document.addEventListener("click", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("click", handleClickOutside);
    //     };
    // }, []);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    // const handleClickOutside = (event) => {
    //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //         setDropdownOpen(false);
    //     }
    // };

    const scrollContainerRef = useRef<HTMLDivElement>(null);



    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -100, // Adjust the scroll amount as needed
                behavior: 'smooth', // Enable smooth scrolling
            });
        }
    };



    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 100, // Adjust the scroll amount as needed
                behavior: 'smooth', // Enable smooth scrolling
            });
        }
    };


    return (
        <>
            <section id="category" className="mt-20 bg-white">
                <motion.div
                >
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
                            <div className="w-full flex justify-between items-center">
                                <div className="flex hidden md:flex md:1/6 ">
                                    <div className="text-center">
                                        <h2 className="text-xl text-purple-dark font-semibold">星期三</h2>
                                        <div id="todaysDate">2023-03-21</div>
                                    </div>
                                    <VrLineLong/>
                                </div>

                                <div className="flex gap-2.5  overflow-x-auto items-center md:3/6"
                                     ref={scrollContainerRef}>
                                    <button className={`${categoryBtn}`}>News</button>
                                    <VrLineShort/>

                                    <button className={`${categoryBtn}`}>Sports</button>
                                    <VrLineShort/>

                                    <button className={`${categoryBtn}`}>Technology</button>
                                    <VrLineShort/>

                                    <button className={`${categoryBtn}`}>Travel</button>

                                </div>
                                <div className=" md:2/6  md:flex hidden">
                                    <ArrowLeftCircleIcon className="cursor-pointer w-8 mr-2 text-purple-base"
                                                         onClick={scrollLeft}/>
                                    <ArrowRightCircleIcon className="cursor-pointer w-8 ml-2 text-purple-base"
                                                          onClick={scrollRight}/>
                                </div>

                            </div>

                            <hr className="w-full m-2 h-0.5 border-t-0 bg-grey-white opacity-100 dark:opacity-50"/>
                            <div className="flex  flex-wrap">
                                <article className=" md:w-1/2">
                                    <div
                                        className="shadow  md:m-4 m-2 transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <a href="###" className="hover:opacity-75">
                                                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                                                     alt="Your Image"/>
                                            </a>
                                            <div
                                                className="absolute top-2 left-2 bg-purple-dark  cursor-pointer bg-opacity-75 text-white px-2 py-1 rounded">
                                                Technology
                                            </div>
                                            <div
                                                className="absolute top-2 right-2 bg-grey-white bg-opacity-50  cursor-pointer  px-2 py-1 rounded">
                                                <HeartIcon className="h-6 w-6 text-red-500"/>

                                            </div>
                                            <div
                                                className="absolute top-11 right-2 bg-grey-white bg-opacity-50  cursor-pointer  px-2 py-1 rounded">
                                                <ArrowUturnRightIcon className="h-6 w-6 text-purple-dark"/>
                                            </div>
                                        </div>
                                        <div className="bg-white flex flex-col justify-start p-2">
                                            <div
                                                className="text-xl text-purple-darker cursor-pointer  font-bold hover:text-purple-darkest pb-4">Lorem
                                                Ipsum Dolor Sit Amet Dolor
                                                Sit Amet
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
                                                porta dui. Ut</p>
                                            <div className="px-1 pt-4 pb-2">
                                                <span className={`${tagCss}`}>#photography</span>
                                                <span className={`${tagCss}`}>#travel</span>
                                                <span className={`${tagCss}`}>#winter</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center " >
                                                    <span className="ml-1 text-[12px] text-purple-lighter ">2023-09-21</span>
                                                    <SolidCircle/>
                                                    <span className="ml-1 text-[12px] text-purple-lighter">3 Mins read</span>
                                                </div>


                                                <EllipsisVerticalIcon  data-dropdown-toggle="dropdown"  className="w-5 h-5 cursor-pointer text-purple-lighter right-0  hover:text-purple-darkest" />

                                            </div>
                                        </div>
                                    </div>
                                </article>


                                <article className=" md:w-1/2">
                                    <div
                                        className="shadow  md:m-4 m-2 transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <a href="###" className="hover:opacity-75">
                                                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                                                     alt="Your Image"/>
                                            </a>
                                            <div
                                                className="absolute top-2 left-2 bg-purple-dark  cursor-pointer bg-opacity-75 text-white px-2 py-1 rounded">
                                                Technology
                                            </div>
                                            <div
                                                className="absolute top-2 right-2 bg-grey-white bg-opacity-50  cursor-pointer  px-2 py-1 rounded">
                                                <HeartIcon className="h-6 w-6 text-red-500"/>

                                            </div>
                                            <div
                                                className="absolute top-11 right-2 bg-grey-white bg-opacity-50  cursor-pointer  px-2 py-1 rounded">
                                                <ArrowUturnRightIcon className="h-6 w-6 text-purple-dark"/>
                                            </div>
                                        </div>
                                        <div className="bg-white flex flex-col justify-start p-2">
                                            <div
                                                className="text-xl text-purple-darker cursor-pointer  font-bold hover:text-purple-darkest pb-4">Lorem
                                                Ipsum Dolor Sit Amet Dolor
                                                Sit Amet
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
                                                porta dui. Ut</p>
                                            <div className="px-1 pt-4 pb-2">
                                                <span className={`${tagCss}`}>#photography</span>
                                                <span className={`${tagCss}`}>#travel</span>
                                                <span className={`${tagCss}`}>#winter</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center " >
                                                    <span className="ml-1 text-[12px] text-purple-lighter ">2023-09-21</span>
                                                    <SolidCircle/>
                                                    <span className="ml-1 text-[12px] text-purple-lighter">3 Mins read</span>
                                                </div>


                                                <EllipsisVerticalIcon  data-dropdown-toggle="dropdown"  className="w-5 h-5 cursor-pointer text-purple-lighter right-0  hover:text-purple-darkest" />

                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className=" md:w-1/2">
                                    <div
                                        className="shadow  md:m-4 m-2 transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <a href="###" className="hover:opacity-75">
                                                <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                                                     alt="Your Image"/>
                                            </a>
                                            <div
                                                className="absolute top-2 left-2 bg-purple-dark  cursor-pointer bg-opacity-75 text-white px-2 py-1 rounded">
                                                Technology
                                            </div>
                                            <div
                                                className="absolute top-2 right-2 bg-grey-white bg-opacity-50  cursor-pointer  px-2 py-1 rounded">
                                                <HeartIcon className="h-6 w-6 text-red-500"/>

                                            </div>
                                            <div
                                                className="absolute top-11 right-2 bg-grey-white bg-opacity-50  cursor-pointer  px-2 py-1 rounded">
                                                <ArrowUturnRightIcon className="h-6 w-6 text-purple-dark"/>
                                            </div>
                                        </div>
                                        <div className="bg-white flex flex-col justify-start p-2">
                                            <div
                                                className="text-xl text-purple-darker cursor-pointer  font-bold hover:text-purple-darkest pb-4">Lorem
                                                Ipsum Dolor Sit Amet Dolor
                                                Sit Amet
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
                                                porta dui. Ut</p>
                                            <div className="px-1 pt-4 pb-2">
                                                <span className={`${tagCss}`}>#photography</span>
                                                <span className={`${tagCss}`}>#travel</span>
                                                <span className={`${tagCss}`}>#winter</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center " >
                                                    <span className="ml-1 text-[12px] text-purple-lighter ">2023-09-21</span>
                                                    <SolidCircle/>
                                                    <span className="ml-1 text-[12px] text-purple-lighter">3 Mins read</span>
                                                </div>


                                                <EllipsisVerticalIcon  data-dropdown-toggle="dropdown"  className="w-5 h-5 cursor-pointer text-purple-lighter right-0  hover:text-purple-darkest" />

                                            </div>
                                        </div>
                                    </div>
                                </article>

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
                                        <img className="object-cover h-10 md:h-full  w-full rounded   md:w-20 md:rounded-none "
                                             src="https://v1.tailwindcss.com/img/card-top.jpg" alt=""/>
                                        <div className="flex flex-col justify-between p-2 leading-normal">
                                            <div
                                                className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy
                                                technology acquisitions 2021
                                            </div>
                                            <div className="font-normal text-gray-700 dark:text-gray-400">Here are
                                                the biggest ent</div>
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
                                                the biggest ent</div>
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
                                                the biggest ent</div>
                                        </div>
                                    </a>






                                </div>
                            </div>
                            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                                <HeadTitle titleName="热门标签"/>
                                <HrLine/>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 flex flex-wrap	">
                                    <span
                                        className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                    <span
                                        className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>
                                    <span
                                        className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>

                                </p>
                            </div>


                            <div className="w-full bg-white shadow flex flex-col my-4 p-6">
                                <HeadTitle titleName="主要贡献者"/>
                                <HrLine/>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 flex flex-wrap	">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/57694784?s=96&v=4"
                                        className="w-10 rounded-full m-2"
                                        alt="Avatar"/>
                                    <img
                                        src="https://avatars.githubusercontent.com/u/57694784?s=96&v=4"
                                        className="w-10 rounded-full  m-2"
                                        alt="Avatar"/>
                                    <img
                                        src="https://avatars.githubusercontent.com/u/57694784?s=96&v=4"
                                        className="w-10 rounded-full  m-2"
                                        alt="Avatar"/>
                                </p>
                            </div>

                        </aside>


                    </motion.div>
                </motion.div>

            </section>
        </>

    );
};

export default WebCateHomeSection;


