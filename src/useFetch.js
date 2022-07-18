import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortError = new AbortController();

    fetch(url, { signal: abortError.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Your Request Is Failed");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if ( err.name === "AbortError" ) {
          console.log("Abort Error");
        } else {
          setIsPending(false);
          setError(err.message);
          setData(null);
        }
      });
    return () => abortError.abort();
  }, [url]);

  return { data, isPending, error };
};

export const AddBlog = (url, Item) => {
  return(
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Item)
    })
  )
}
