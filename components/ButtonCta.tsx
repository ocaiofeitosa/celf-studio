import { ArrowUpRight } from 'lucide-react';

export default function ButtonCta() {
  return (
    <button className="group bg-white py-2 px-6 rounded-full font-medium text-black cursor-pointer flex gap-3 items-center hover:bg-primary hover:text-white transition-all">
      Entre em contato
      <ArrowUpRight
        className="bg-primary text-white rounded-full p-2 group-hover:bg-white group-hover:text-primary transition-colors"
        size={40}
      />
    </button>
  );
}
