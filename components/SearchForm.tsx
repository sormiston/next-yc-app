import React from "react";
import Form from "next/form";
import FormResetButton from "@/components/FormResetButton";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="flex flex-1 max-w-3xl h-12 md:h-20 items-center gap-2 border-2 md:border-4 border-secondary bg-background rounded-full pl-7 md:pl-10 pr-7"
    >
      {/* On submission, the input value will be appended to 
        the URL, e.g. /search?query=abc */}
      <input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="peer bg-inherit outline-none text-lg md:text-2xl uppercase font-bold w-full flex-1"
        required
      />
      <div className="peer-placeholder-shown:hidden flex">
        <FormResetButton formInputs={["query"]} formURL="/" />
      </div>

      <button
        type="submit"
        className="circle-button bg-secondary hover:bg-secondary/85 text-secondary-foreground"
      >
        <Search />
      </button>
    </Form>
  );
};

export default SearchForm;
