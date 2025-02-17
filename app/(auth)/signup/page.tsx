import Quote from "@/components/Quote";

export default function SignUp() {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center h-screen">
        Sign Up Form
      </div>
      <div>
        <Quote
          text={`Memories don’t just make themselves… Well, actually, they do. But storing them? That’s where we come in. Welcome to Memoria!`}
          size="md"
        />
      </div>
    </div>
  );
}
