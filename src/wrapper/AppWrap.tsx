import { NavigationDots, SocialMedia } from "../components";

interface AppWrapProps {
  Component: React.ComponentType;
  idName: string;
  classNames?: string;
}

const AppWrap = ({ Component, idName, classNames }: AppWrapProps) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2024 ABHINAV</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;