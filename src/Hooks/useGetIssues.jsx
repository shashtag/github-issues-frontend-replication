import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const useGetIssues = ({ page }) => {
  const { org, repo } = useParams();

  const [issues, setIssues] = useState([]);

  const getIssues = async () => {
    const data = await fetch(
      `https://api.github.com/repos/${org}/${repo}/issues?page=${page}&per_page=10`,
      {
        headers: {
          Authorization:
            "token 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",
        },
      },
    ).then((res) => res.json());
    setIssues(data);
  };

  const firstMount = useRef(true);

  useEffect(() => {
    if (firstMount.current) {
      getIssues();
      firstMount.current = false;
    }

    return () => {};
  }, []);

  useEffect(() => {
    getIssues();
    return () => {};
  }, [page]);

  return issues;
};

export default useGetIssues;
