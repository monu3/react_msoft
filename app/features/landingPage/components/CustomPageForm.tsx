import React from "react";
const CustomPageForm: React.FC= () => {
  // return (
  //   <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
  //     <div className="p-6 bg-green-400 rounded-md shadow-lg w-full max-w-md">
  //       <h3 className="text-xl font-bold mb-4">CustomPage</h3>
  //       <form>
  //         <div className="mb-4">
  //           <label htmlFor="name" className="block text-sm font-medium">
  //             Monu siddiki
  //           </label>
  //           <input
  //             type="text"
  //             id="name"
  //             name="name"
  //             className="w-full p-2 border rounded-md"
  //             placeholder="Enter your name"
  //           />
  //         </div>
  //         <div className="mb-4">
  //           <label htmlFor="email" className="block text-sm font-medium">
  //             Email
  //           </label>
  //           <input
  //             type="email"
  //             id="email"
  //             name="email"
  //             className="w-full p-2 border rounded-md"
  //             placeholder="Enter your email"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
  //         >
  //           Submit
  //         </button>
  //       </form>
  //       <button
  //         onClick={onClose}
  //         className="mt-4 w-full text-gray-700 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
  //       >
  //         Close
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <div className="p-6 bg-green-400 shadow rounded">
      <h3 className="text-lg font-semibold mb-4">Custom page Settings</h3>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            custom setting
          </label>
          <input
            type="text"
            id="title"
            className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the title"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );

};

export default CustomPageForm;
