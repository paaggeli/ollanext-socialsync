import TopBar from "@/components/Prompt/TopBar";
import Response from "@/components/Prompt/Response";
import PromptInput from "@/components/Prompt/PromptInput";

export default function PromptArea() {
    return(
    <div className="flex flex-col flex-1 h-screen bg-stone-900 px-5">
      <TopBar />
        <div className="h-full w-4/5 mx-auto py-4 overflow-y-auto scrollbar">
        <Response />
        <Response />
        <Response />
        </div>
      <PromptInput />
    </div>
  )
}
