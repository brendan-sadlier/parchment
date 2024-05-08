import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8">
    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href='https://github.com/brendan-sadlier'>
          <Github className='hover:text-primary'/>
        </a>
        
      </div>
      <p className="text-center mt-4 md:mt-0 text-sm">© 2024 Brendan Sadlier. All rights reserved.</p>
    </div>
  </footer>
  )
}