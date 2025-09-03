"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Zap, Rocket, Globe, Star, Cpu, Atom, Orbit } from "lucide-react"

const loadingMessages = [
  "Setting up temporal environment...",
  "Calling alien contacts...",
  "Scanning for optimal location...",
  "Avoiding temporal paradoxes...",
  "Finding the right dimensional paths...",
  "Selecting correct dimensions...",
  "Playing with time and space...",
  "Calibrating quantum flux capacitor...",
  "Synchronizing with cosmic frequencies...",
  "Initializing wormhole generators...",
  "Bypassing space-time barriers...",
]

export default function TimeTravelWebsite() {
  const [selectedDate, setSelectedDate] = useState("")
  const [isLaunching, setIsLaunching] = useState(false)
  const [currentMessage, setCurrentMessage] = useState("")
  const [messageIndex, setMessageIndex] = useState(0)
  const [showComplete, setShowComplete] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const createMatrixRain = () => {
      const container = document.querySelector(".matrix-container")
      if (!container) return

      for (let i = 0; i < 20; i++) {
        const drop = document.createElement("div")
        drop.className = "matrix-drop"
        drop.style.left = Math.random() * 100 + "%"
        drop.style.animationDelay = Math.random() * 3 + "s"
        drop.style.animationDuration = Math.random() * 3 + 2 + "s"
        drop.textContent = Math.random() > 0.5 ? "1" : "0"
        container.appendChild(drop)

        setTimeout(() => {
          if (container.contains(drop)) {
            container.removeChild(drop)
          }
        }, 5000)
      }
    }

    const interval = setInterval(createMatrixRain, 500)
    return () => clearInterval(interval)
  }, [])

  const handleLaunchTimeTravel = async () => {
    if (!selectedDate) {
      alert("Please select a date to travel to!")
      return
    }

    setIsLaunching(true)
    setMessageIndex(0)
    setShowComplete(false)

    // Cycle through loading messages
    for (let i = 0; i < loadingMessages.length; i++) {
      setCurrentMessage(loadingMessages[i])
      setMessageIndex(i)
      await new Promise((resolve) => setTimeout(resolve, 1200))
    }

    // Show completion and play audio
    setShowComplete(true)
    setCurrentMessage("Time travel sequence complete!")

    if (audioRef.current) {
      try {
        await audioRef.current.play()
      } catch (error) {
        console.log("Audio playback failed:", error)
      }
    }

    // Reset after 8 seconds
    setTimeout(() => {
      setIsLaunching(false)
      setShowComplete(false)
      setCurrentMessage("")
    }, 8000)
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden cyber-grid">
      <div className="absolute inset-0 overflow-hidden">
        {/* Matrix rain container */}
        <div className="matrix-container absolute inset-0 pointer-events-none">
          <style jsx>{`
            .matrix-drop {
              position: absolute;
              color: #00ffff;
              font-family: monospace;
              font-size: 14px;
              animation: matrix-rain linear infinite;
              opacity: 0.7;
            }
          `}</style>
        </div>

        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-primary rounded-full float opacity-80 neon-pulse"></div>
        <div
          className="absolute top-32 right-20 w-2 h-2 bg-accent rounded-full float opacity-60 neon-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-4 h-4 bg-secondary rounded-full float opacity-70 neon-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-3 h-3 bg-primary rounded-full float opacity-50 neon-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Enhanced spinning cosmic rings */}
        <div className="absolute top-1/4 left-1/3 w-40 h-40 border-2 border-primary/30 rounded-full spin-slow pulse-glow"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-32 h-32 border-2 border-accent/40 rounded-full spin-slow pulse-glow"
          style={{ animationDirection: "reverse", animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/6 w-24 h-24 border border-secondary/20 rounded-full spin-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Data streams */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent data-stream"></div>
        <div
          className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent data-stream"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-60 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent data-stream"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Atom className="w-10 h-10 text-primary float neon-pulse" />
            <h1
              className="text-5xl md:text-7xl font-bold text-primary hologram-flicker glitch-effect neon-pulse"
              data-text="ChronoVoyage"
            >
              ChronoVoyage
            </h1>
            <Orbit className="w-10 h-10 text-accent float neon-pulse" />
          </div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed hologram-flicker">
            Professional Time Travel Services - Journey through time with cutting-edge temporal technology
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/90 backdrop-blur-md border-2 border-primary/50 pulse-glow hologram-flicker">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-card-foreground flex items-center justify-center gap-3 neon-pulse">
                <Cpu className="w-8 h-8 text-primary float" />
                Time Travel Control Panel
                <Star className="w-8 h-8 text-accent float" />
              </CardTitle>
              <CardDescription className="text-muted-foreground text-lg hologram-flicker">
                Select your destination date and initiate temporal displacement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Enhanced date picker */}
              <div className="space-y-3">
                <Label htmlFor="travel-date" className="text-card-foreground font-medium text-lg neon-pulse">
                  Destination Date
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary neon-pulse" />
                  <Input
                    id="travel-date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-12 bg-input/80 border-2 border-primary/30 focus:border-primary focus:ring-primary/50 text-lg h-14 hologram-flicker"
                    min="2027-01-01"
                    max="2100-12-31"
                  />
                </div>
              </div>

              {/* Enhanced launch button */}
              <Button
                onClick={handleLaunchTimeTravel}
                disabled={isLaunching || !selectedDate}
                className="w-full bg-primary/90 hover:bg-primary text-primary-foreground font-bold py-4 text-xl transition-all duration-300 transform hover:scale-105 pulse-glow neon-pulse border-2 border-primary/50"
              >
                {isLaunching ? (
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6 animate-spin neon-pulse" />
                    Launching Time Travel...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Rocket className="w-6 h-6 float" />
                    Launch Time Travel
                  </div>
                )}
              </Button>

              {isLaunching && !showComplete && (
                <div className="text-center space-y-6 py-8">
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto border-4 border-primary/40 border-t-primary rounded-full animate-spin pulse-glow"></div>
                    <div
                      className="absolute inset-0 w-16 h-16 mx-auto mt-2 border-2 border-accent/40 border-b-accent rounded-full animate-spin pulse-glow"
                      style={{ animationDirection: "reverse" }}
                    ></div>
                    <div
                      className="absolute inset-0 w-12 h-12 mx-auto mt-4 border border-secondary/40 border-l-secondary rounded-full animate-spin"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-primary font-bold text-xl animate-pulse neon-pulse hologram-flicker">
                      {currentMessage}
                    </p>
                    <div className="w-full bg-muted/50 rounded-full h-3 border border-primary/30">
                      <div
                        className="bg-gradient-to-r from-primary via-accent to-secondary h-3 rounded-full transition-all duration-1200 pulse-glow"
                        style={{ width: `${((messageIndex + 1) / loadingMessages.length) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-center gap-2">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-8 bg-primary/60 animate-pulse neon-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {showComplete && (
                <div className="text-center py-8 space-y-6">
                  <div className="text-8xl animate-bounce neon-pulse">🚀</div>
                  <div className="space-y-4">
                    <p className="text-3xl font-bold text-accent animate-pulse neon-pulse hologram-flicker">
                      Time Travel Complete!
                    </p>
                    <div className="bg-muted/80 border-2 border-accent/50 rounded-lg p-6 pulse-glow">
                      <p className="text-2xl text-card-foreground font-mono neon-pulse hologram-flicker">
                        "Arry 26 me to dunya hi khtm hai"
                      </p>
                    </div>
                    <div className="flex justify-center gap-3">
                      <div className="w-4 h-4 bg-primary rounded-full animate-bounce neon-pulse"></div>
                      <div
                        className="w-4 h-4 bg-accent rounded-full animate-bounce neon-pulse"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-4 h-4 bg-secondary rounded-full animate-bounce neon-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-card/70 backdrop-blur-md border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 pulse-glow hologram-flicker">
            <CardHeader className="text-center">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4 float neon-pulse" />
              <CardTitle className="text-card-foreground text-xl neon-pulse">Precision Timing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-lg hologram-flicker">
                Accurate temporal displacement with quantum-level precision
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-md border-2 border-accent/30 hover:border-accent/60 transition-all duration-500 pulse-glow hologram-flicker">
            <CardHeader className="text-center">
              <Globe className="w-16 h-16 text-accent mx-auto mb-4 float neon-pulse" />
              <CardTitle className="text-card-foreground text-xl neon-pulse">Safe Travel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-lg hologram-flicker">
                Advanced paradox prevention and dimensional stability protocols
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-md border-2 border-secondary/30 hover:border-secondary/60 transition-all duration-500 pulse-glow hologram-flicker">
            <CardHeader className="text-center">
              <Star className="w-16 h-16 text-secondary mx-auto mb-4 float neon-pulse" />
              <CardTitle className="text-card-foreground text-xl neon-pulse">Expert Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center text-lg hologram-flicker">
                24/7 temporal assistance from certified chrononauts
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <audio ref={audioRef} preload="auto">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2026%20me%20duniya%20khatam%20%F0%9F%91%80%20%28online-video-cutter.com%29-BIw1WNRv0nCXV3LmrHxWa21OB0zwGK.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}
