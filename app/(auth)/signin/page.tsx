import Quote from "@/components/Quote";

export default function SignIn() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center h-screen">
          Sign In Form
        </div>
        <div>
          <Quote
            text={`Back to relive the glory days? Or just here to cringe at old memories? Either way, welcome back to Memoria!`}
            size="md"
          />
        </div>
      </div>
    </>
  );
}
