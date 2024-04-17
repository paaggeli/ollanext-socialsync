'use client'
import Sidebar from '@/components/Sidebar'
import PromptArea from '@/components/Prompt'
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <PromptArea />
    </div>
  )
}
