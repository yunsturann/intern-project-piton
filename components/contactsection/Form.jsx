"use client";

const Form = () => {
  return (
    <div className="2xl:flex-1 w-[750px] flex flex-col items-end space-y-6 lg:space-y-12">
      {/*Form Title*/}
      <div className="flex flex-col items-end w-1/2 font-bold text-2xl sm:text-3xl lg:text-[44px] text-nowrap text-right">
        <h2>We'd love to hear</h2>
        <span>from you</span>
      </div>

      {/*Form Items*/}
      <form className="h-full w-full flex flex-col justify-between space-y-8 text-base sm:text-lg lg:text-[28px] text-var-black">
        <input
          type="text"
          placeholder="Name"
          className="w-full border-2 border-opacity-60 bg-var-white border-black py-4 pl-8"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full border-2 border-opacity-60 bg-var-white border-black py-4 pl-8"
        />
        <input
          type="email"
          placeholder="Website URL"
          className="w-full border-2 border-opacity-60 bg-var-white border-black py-4 pl-8"
        />

        <textarea
          placeholder="Project Details"
          className="w-full h-[200px] border-2 border-opacity-60 bg-var-white border-black py-4 pl-8"
        ></textarea>

        <button
          type="submit"
          className="bg-var-black text-var-white py-8 text-center"
        >
          Send Proposal
        </button>
      </form>
    </div>
  );
};

export default Form;
