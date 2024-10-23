import RegisterForm from "@/components/RegsiterForm";
export const metadata = {
  title: "User Signup",
};
export default function Register() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <RegisterForm isUpdate={false} />
    </section>
  );
}
