"use client";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <div className="2xl:flex-1 w-[750px] flex flex-col items-end space-y-6 lg:space-y-12">
      {/*Form Title*/}
      <div className="flex flex-col items-end w-1/2 font-bold text-2xl sm:text-3xl lg:text-[44px] text-nowrap text-right">
        <h2>We'd love to hear</h2>
        <span>from you</span>
      </div>

      {/*Form Items*/}
      <form
        className="h-full w-full flex flex-col justify-between space-y-8 text-base sm:text-lg lg:text-[28px] text-var-black"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Email"
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Website URL"
          className="input-field"
          required
        />

        <textarea
          placeholder="Project Details"
          className="h-[200px] input-field"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-var-black text-var-white py-8 text-center hover:bg-neutral-800 transition duration-300"
        >
          Send Proposal
        </button>
      </form>
    </div>
  );
};

export default Form;
