import formatTimeAgo from "../../Util/relativeTimeFormatter";

const IssuesItem = ({ issue }) => {
  return (
    <div className='py-2 px-4 border-[#796e5f] border-[1px] border-collapse'>
      <div className='flex items-center'>
        <div>
          <i className='fa-solid fa-circle-dot text-[#4FD461] mr-3'></i>
        </div>
        <div>{issue.title}</div>
      </div>
      <div className='ml-7 text-[#ada394] text-xs mt-1'>
        #{issue.number} opened {formatTimeAgo(new Date(issue.created_at))} by{" "}
        {issue.user.login}
      </div>
    </div>
  );
};

export default IssuesItem;
