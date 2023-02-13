import cls from "./MainPage.module.scss";
// import { classNames } from "shared/lib/classNames/classNames";

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  return (
    <div className={className}>
      <h1>Main Page</h1>
    </div>
  );
};
export default MainPage;
