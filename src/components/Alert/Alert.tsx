import React from 'react';

interface Props extends React.PropsWithChildren{
  alert:boolean,
  type: 'alert-primary' | 'alert-success' | 'alert-danger' | 'alert-warning',
}

const Alert: React.FC<Props> = ({alert, type, children}) => {

  const backgrondColor = (type: string) => {
    switch (type){
      case'alert-primary':
        return 'var(--bs-primary-bg-subtle)';
      case'alert-success':
        return 'var(--bs-success-bg-subtle)';
      case'alert-warning':
        return 'var(--bs-warning-bg-subtle)';
      case'alert-danger':
        return 'var(--bs-danger-bg-subtle)';
      default:
        return 'var(--bs-secondary-bg-subtle)';
    }
  };

  const bgColor = backgrondColor(type);

  return (
     <div className="alert mt-3 w-50 d-flex align-items-center justify-content-between"
          style={{ visibility: alert ? 'visible' : 'hidden', backgroundColor: bgColor}} role="alert">
      <span className="d-block">{children}</span>
      <button type="button" className="btn-close d-block"  aria-label="Close"></button>
    </div>

  );
};

export default Alert;