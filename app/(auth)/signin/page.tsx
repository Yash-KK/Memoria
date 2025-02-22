import Quote from "@/components/Quote";
import SignInForm from "@/components/Auth/SignIn";
export default function SignIn() {
  return (
    <div className="grid grid-cols-2">
      <SignInForm />
      <div>
        <Quote
          text={`Back to relive the glory days? Or just here to cringe at old memories? Either way, welcome back to Memoria!`}
          size="md"
        />
      </div>
    </div>
  );
}
