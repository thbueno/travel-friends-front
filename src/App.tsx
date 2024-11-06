import { ArrowRight, Calendar, MapPin, Settings2, UserRoundPlus } from "lucide-react"
import { useState } from "react"
export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }




  return (
    
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
    <div className="max-w-3xl w-full px-6 text-center space-y-10">

      <div className="flex flex-col items-center gap-3">
        <img src="/logo.svg" alt="TravelFriends" className="mx-auto" />
      <p className="text-zinc-300 text-lg">Convide seus Amigos e planeje sua proxima viagem!</p>
      </div>

      <div className="space-y-4">
      <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

        <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
        </div>

        
        <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        {isGuestsInputOpen ? (
          <button className="flex items-center bg-zinc-800 text-zinc-200 gap-2 bg-l rounded-lg px-5 py-2 font-medium hover:bg-zinc-700">
            Alterar Local/data
            <Settings2 className="size-5" />
          </button>

        ) : (
          <button onClick={openGuestsInput} className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400">
          Continuar
          <ArrowRight className="size-5" />
        </button>
        )}
      </div>


      {/* Logic if guests input is open */}


      {isGuestsInputOpen && (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">

        <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />
        <input type="text" placeholder="Quem estará na viagem?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
        </div>

        
        <div className="w-px h-6 bg-zinc-800" />

        <button className="flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400">
          Confirmar viagem
          <ArrowRight className="size-5" />
        </button>


      </div>
      )}
      </div>

      <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela Travel with Friends você automaticamente concorda < br />  com os nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">politicas de privacidade</a>.</p>    
    </div>
    </div>
  )
}
