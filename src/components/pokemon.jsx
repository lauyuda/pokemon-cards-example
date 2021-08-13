import * as React from "react";

export function Pokemon({
    thumbnail,
    englishName,
    description,
}) {
    return (
        <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div class="flex-1 flex flex-col p-8">
                <img class="w-32 h-32 flex-shrink-0 mx-auto bg-gray-200 rounded-full" src={thumbnail} alt="" />
                <h3 class="mt-6 text-gray-900 text-sm font-medium">
                    {englishName}
                </h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                    <dd class="text-gray-500 text-sm line-clamp-3">{description}</dd>
                </dl>
            </div>
        </li>
    );
}