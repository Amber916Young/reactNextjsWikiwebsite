import React from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function BasicPagination() {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index) =>
        ({
            color: active === index ? "blue" : "blue-gray",
            onClick: () => setActive(index),
        } as any);

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <button
                className={`text-blue-gray ${
                    active === 1 ? "cursor-not-allowed" : "cursor-pointer"
                } bg-blue-200 text-white py-2 px-4 rounded-lg shadow-lg`}
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </button>

            <div className="flex items-center gap-2">
                <button
                    className={`text-${getItemProps(1).color} ${
                        active === 1 ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={() => getItemProps(1).onClick()}
                >
                    1
                </button>
                <button
                    className={`text-${getItemProps(2).color} cursor-pointer`}
                    onClick={() => getItemProps(2).onClick()}
                >
                    2
                </button>
                <button
                    className={`text-${getItemProps(3).color} cursor-pointer`}
                    onClick={() => getItemProps(3).onClick()}
                >
                    3
                </button>
                <button
                    className={`text-${getItemProps(4).color} cursor-pointer`}
                    onClick={() => getItemProps(4).onClick()}
                >
                    4
                </button>
                <button
                    className={`text-${getItemProps(5).color} ${
                        active === 5 ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={() => getItemProps(5).onClick()}
                >
                    5
                </button>
            </div>
            <button
                className={`text-blue-gray ${
                    active === 5 ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={next}
                disabled={active === 5}
            >
                Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </button>
        </div>
    );
}
