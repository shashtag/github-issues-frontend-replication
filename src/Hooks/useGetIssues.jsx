import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const useGetIssues = ({ page, loadingRef }) => {
  const { org, repo } = useParams();

  const [issues, setIssues] = useState([]);

  const getIssues = async () => {
    loadingRef?.current?.continuousStart();
    const data = await fetch(
      `https://api.github.com/repos/${org}/${repo}/issues?page=${page}&per_page=10`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_github_pat}`,
        },
      },
    ).then((res) => {
      return res.json();
    });
    setIssues(data);
    loadingRef?.current?.complete();
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
