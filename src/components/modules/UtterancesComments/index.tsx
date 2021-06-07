import { useRef, useEffect } from 'react';

const REPO = 'hokyunrhee/kenrhee.com-comments';
const IssueTerm: 'pathname' | 'url' | 'title' | 'og:title' = 'title';

const UtterancesComments = () => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js');
    scriptEl.setAttribute('repo', REPO);
    scriptEl.setAttribute('issue-term', IssueTerm);
    scriptEl.setAttribute('theme', 'github-light');
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute('async', '');
    nodeRef.current.appendChild(scriptEl);
  }, []);

  return <div id="comments" ref={nodeRef} />;
};

export default UtterancesComments;
