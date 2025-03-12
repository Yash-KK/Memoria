import Quote from "@/components/Quote";
import SignUpForm from "@/components/Auth/SignUp";
export default function SignUp() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <SignUpForm />
      <div className="hidden md:block">
        <Quote
          text={`Memories don’t just make themselves… Well, actually, they do. But storing them? That’s where we come in. Welcome to Memoria!`}
          size="md"
        />
      </div>
    </div>
  );
}
