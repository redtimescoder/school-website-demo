type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

const PageHeader = ({ title, subtitle }: PageHeaderProps) => (
  <div className="pt-32 pb-16 bg-school-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-school-primary rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-school-accent rounded-full blur-3xl animate-float-slower" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-school-dark mb-4 animate-fade-up">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-up [animation-delay:120ms]">
          {subtitle}
        </p>
      )}
      <div className="h-1.5 w-20 bg-school-primary mx-auto rounded-full mt-6 animate-fade-in [animation-delay:240ms]" />
    </div>
  </div>
);

export default PageHeader;
