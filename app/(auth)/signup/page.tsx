import Quote from "@/components/Quote";
import SignUpForm from "@/components/Auth/SignUp";
export default function SignUp() {
  return (
    <div className="grid grid-cols-2">
      <SignUpForm />
      <Quote
        text={`Memories don’t just make themselves… Well, actually, they do. But storing them? That’s where we come in. Welcome to Memoria!`}
        size="md"
      />
    </div>
  );
}
