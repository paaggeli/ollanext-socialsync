 'use client'
import Sidebar from './_components/sidebar/sidebar'
import PromptArea from './_components/prompt/prompt-area'
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <PromptArea />
    </div>
  )
}
