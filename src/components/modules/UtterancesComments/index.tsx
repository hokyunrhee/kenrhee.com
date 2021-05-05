import { useRef, useEffect } from 'react';

const UtterancesComments = () => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    console.log({ nodeRef });
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('repo', 'hokyunrhee/kenrhee.com-comments');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', '');
    nodeRef.current.appendChild(scriptEl);
  }, []);

  return <div id="comments" ref={nodeRef} />;
};

export default UtterancesComments;
