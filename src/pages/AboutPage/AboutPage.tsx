import cls from "./AboutPage.module.scss";

interface AboutPageProps {
  className?: string;
}

const AboutPage = ({ className }: AboutPageProps) => {
  return (
    <div className={className}>
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
