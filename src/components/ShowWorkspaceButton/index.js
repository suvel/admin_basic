import './style.css'
import { useEffect, useRef } from 'react';
import Button from '../Button';

const ShowWorkspaceButton = ({ showWorkspace }) => {
  const showWrkContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(showWrkContainerRef.current);
  }, [])

  return <div ref={showWrkContainerRef} className='showWorkspace-container'>
    <Button type='outline' variant='mr_white' onClick={showWorkspace}>Show Workspace</Button>
  </div>
}

export default ShowWorkspaceButton
