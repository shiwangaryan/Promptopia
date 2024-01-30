import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI-Powered Prompts",
};
const Layout = ({ children }) => {
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

export default Layout;
