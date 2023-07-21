/* import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex grid text-center bg-red-500">
      <h1 className="text-black-500"> It works </h1>
    </div>
  );
};
export default Home;
 */

///////////////////

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen gap-10 px-20 py-20 bg-slate-400">
      {/*       <div className="justify-between pt-2 mt-2 bg-white bgflex">
        <span>Total</span>
        <span className="font-semibold">$10</span>
        <button className="w-3/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 ">
          Checkout
        </button>
      </div>

      <div className="p-6 bg-white shadow-xl rounded-3xl">
        <span className="text-2xl font-semibold">Select Item</span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="w-3/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500">
          Checkout
          <div className="relative p-6 bg-white rounded-3xl -top-5">
            <div className="relative flex items-end justify-between -top-16">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Orders</span>
                <span className="font-medium">340</span>
              </div>
              <div className="w-24 h-24 rounded-full bg-zinc-300" />
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">Spent</span>
                <span className="font-medium">$340</span>
              </div>
            </div>
            <div className="relative flex flex-col items-center -mb-5 -mt-14">
              <span className="text-lg font-medium">Tony Molloy</span>
              <span className="text-sm text-gray-500">미국</span>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white shadow-xl rounded-3xl">
          <div className="flex items-center justify-between mb-5">
            <span>⬅️</span>
            <div className="space-x-3">
              <span>⭐️ 4.9</span>
              <span className="p-2 rounded-md shadow-xl">💖</span>
            </div>
          </div>
          <div className="mb-5 bg-zinc-400 h-72" />
          <div className="flex flex-col">
            <span className="text-xl font-medium">Swoon Lounge</span>
            <span className="text-xs text-gray-500">Chair</span>
            <div className="flex items-center justify-between mt-3 mb-5">
              <div>
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
              </div>
              <div className="flex items-center space-x-5">
                <button className="flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square">
                  -
                </button>
                <span>1</span>
                <button className="flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square">
                  +
                </button>
              </div>
            </div>
            <button className="block w-3/4 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 ">
              Checkout
            </button>

            <span className="text-xs text-gray-500">Chair</span>
            <div className="flex items-center justify-between mt-3 mb-5">
              <div className="space-x-2">
                <button className="w-5 h-5 transition bg-yellow-500 rounded-full focus:ring-2 ring-offset-2 ring-yellow-500" />
                <button className="w-5 h-5 transition bg-indigo-500 rounded-full focus:ring-2 ring-offset-2 ring-indigo-500" />
                <button className="w-5 h-5 transition bg-teal-500 rounded-full focus:ring-2 ring-offset-2 ring-teal-500" />
              </div>

              <div className="flex items-center space-x-5">
                <button className="flex items-center justify-center w-8 text-xl text-gray-500 bg-blue-200 rounded-lg aspect-square"></button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-medium">$450</span>
                <button className="px-8 py-2 text-xs text-center text-white bg-blue-500 rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="flex flex-col p-5 space-y-2 ">
        <input
          type="text"
          required
          placeholder="Username"
          className="p-1 border border-gray-400 rounded-md peer "
        />

        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>

        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>

        <span className="text-black-500 peer-hover:text-amber-500">Hello</span>

        <input type="submit" value="Login" className="bg-white" />
      </form> */}

{/* <div className="p-6 bg-gray-300 group">
  <button className="w-24 h-24 bg-red-300 group-hover:bg-blue-300" />
</div> */}

  <details className="select-none open:text-white open:bg-indigo-400">
    <summary className="cursor-pointer select-none"> What is my favorite food </summary>
    <span className="selection:bg-indigo-600 "> Kimchi </span>
  </details>
</div>
  );
};
export default Home;
