import { useSearchParams } from "react-router-dom";
import IssuesItem from "../Components/Issues/IssuesItem";
import useGetIssues from "../Hooks/useGetIssues";

const Issues = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = searchParams.get("page");
  const issues = useGetIssues({ page });

  return (
    <div className='bg-black min-h-[100vh] pt-20 text-white'>
      <div className='container mx-auto '>
        {}
        {issues.message ? (
          <div className='border-[#796e5f] border-[1px] p-44 grid place-items-center rounded-md'>
            No Issues found please create an issue
          </div>
        ) : (
          issues.map((issue) => <IssuesItem key={issue.id} issue={issue} />)
        )}

        {page != 1 && !issues.length && (
          <div className='border-[#796e5f] border-[1px] p-44 grid place-items-center rounded-md'>
            No Issues found please create more issues
          </div>
        )}
        <div className='mt-8 text-[#46A7E2]'>
          <button
            className=' border-[1px] border-black rounded-md hover:border-[#796e5f] p-6 py-1 '
            onClick={() => setSearchParams({ page: Number(page) - 1 })}
            disabled={(issues.message && page == 1) || page == 1}>
            Previous
          </button>
          <input
            type='text'
            className='w-11 mx-2 rounded-md text-center'
            value={page}
            onChange={(e) => setSearchParams({ page: e.target.value })}
          />
          <button
            className=' border-[1px] border-black rounded-md hover:border-[#796e5f] p-6 py-1 '
            onClick={() => setSearchParams({ page: Number(page) + 1 })}
            disabled={issues.message || (page != 1 && !issues.length)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Issues;
