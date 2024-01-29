import "@styles/global.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI-Powered Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
      </body>

      <main className="app">{children}</main>
    </html>
  );
};

export default RootLayout;
