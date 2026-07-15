import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '../hooks/useTheme'
import { CommandPaletteProvider } from '../hooks/useCommandPalette'
import { useLenis } from '../hooks/useLenis'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import CommandPalette from '../components/CommandPalette'

export default function MainLayout() {
  useLenis()

  return (
    <ThemeProvider>
      <CommandPaletteProvider>
        <ScrollProgress />
        <CommandPalette />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CommandPaletteProvider>
    </ThemeProvider>
  )
}
