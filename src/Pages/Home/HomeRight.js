import React from "react";

const HomeRight = () => {
    const posts = [
        {
            title: "React Tailwind Card with Grid 1",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 2",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 3",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "React Tailwind Card with Grid 4",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];
    return (
        <>
        <div className="grid gap-2 lg:grid-cols-4">
            {posts.map((items, key) => (
                <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                    <img
                        className="object-cover w-full h-48"
                        src={items.img}
                        alt="food"
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold text-blue-600">
                            
                            {items.title}
                        </h4>
                        <p className="mb-2 leading-normal">
                        {items.content}
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Read more
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </>
        /* <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-baseline">
            <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              New
            </span>
            <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
              2 baths &bull; 3 rooms
            </div>
          </div>

          <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
            A random Title
          </h4>

          <div class="mt-1">
            $1800
            <span class="text-gray-600 text-sm"> /wk</span>
          </div>
          <div class="mt-4">
            <span class="text-teal-600 text-md font-semibold">
              4/5 ratings{" "}
            </span>
            <span class="text-sm text-gray-600">(based on 234 ratings)</span>
          </div>
        </div> */
  );
};

export default HomeRight;
