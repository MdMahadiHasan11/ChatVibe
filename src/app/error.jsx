"use client";

function CommonError({ error, reset }) {
  return (
    <div>
      <div className="text-center mt-16">
        <h2>Something went worng!</h2>
        {/* error show  */}
        <button
          onClick={() => reset()}
          className="bg-red-400 rounded-md px-2 text-white mt-2 active:scale-95"
        >
          try agian
        </button>
      </div>
    </div>
  );
}

export default CommonError;
