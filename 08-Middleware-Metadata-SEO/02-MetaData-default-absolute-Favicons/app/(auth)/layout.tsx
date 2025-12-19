export const metadata = {
  title: {
    default: "AUth | Auth Layout",
    template: "%s | Auth layout",
    // absolute: "",
  },
  description: "Layout for authentication pages",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold">{children}</div>;
};

export default AuthLayout;
