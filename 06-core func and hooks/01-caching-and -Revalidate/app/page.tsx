const page = async () => {
  // const response = await fetch("http://localhost:3000/api/timer", {
  //   cache: "force-cache",
  // });

  // cache the data for 10 seconds, then fetch fresh data from server
  // const response = await fetch("http://localhost:3000/api/timer", {
  //   next: { revalidate: 10 },
  // });

  // const data = await response.json();

  const [freash, cached, revalidated] = await Promise.all([
    //Always freash
    fetch("http://localhost:3000/api/timer/utc", {
      cache: "no-cache",
    }).then((res) => res.json()),

    // parmaent cached
    fetch("http://localhost:3000/api/timer/iso", {
      cache: "force-cache",
    }).then((res) => res.json()),

    // cached for 10 seconds
    fetch("http://localhost:3000/api/timer/locale", {
      next: { revalidate: 10 },
    }).then((res) => res.json()),
  ]);

  return (
    <div>
      {/* <h1>Basic Timer ( Default Behavior )</h1> */}
      {/*no-cache(default): every time refresh the page , get freash data from server */}

      {/* force-cache: means the data will be cached and the same data will be used for subsequent requests until the cache is invalidated. */}

      {/* <p>Timestamp: {data.timestamp}</p>
      <p>Readable Time: {data.readable}</p>
      <p>Unix Time: {data.unix}</p>
      <p>Message: {data.message}</p>
      <p>Request ID: {data.requestId}</p> */}

      <div className="text-neutral-400 flex flex-col gap-4">
        <h2 className="text-neutral-100">Fresh Data (no-cache):</h2>
        <pre>{JSON.stringify(freash, null, 2)}</pre>

        <h2 className="text-neutral-100">Cached Data (force-cache):</h2>
        <pre>{JSON.stringify(cached, null, 2)}</pre>

        <h2 className="text-neutral-100">Revalidated Data (10s):</h2>
        <pre>{JSON.stringify(revalidated, null, 2)}</pre>
      </div>
    </div>
  );
};

export default page;
