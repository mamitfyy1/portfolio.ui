import React, { useState } from 'react'

interface IMamininDedigi {
  index: number;
  soyleyen: 'Miktat Mert' | 'Mami';
  soyledigi: string;
}

export default function Test() {
  const [mamiKacKereMal, setmamiKacKereMal] = useState<number>(0);
  const [mamininDedileri, setMamininDedileri] = useState<IMamininDedigi[]>([]);

  function mamiBenMalimDiyor(): void {
    const mamininYeniDedigi: IMamininDedigi = {
      index: mamininDedileri.length,
      soyleyen: 'Miktat Mert',
      soyledigi: 'BEN SENİN OLMAK İSTEDİĞİN KİŞİYİM'
    };

    const mertinYeniDedigi: IMamininDedigi = {
      index: mamininDedileri.length,
      soyleyen: 'Mami',
      soyledigi: 'SEN BENİM OLMAK İSTEDİĞİM KİŞİSİN'
    }

    setMamininDedileri(prevList => {
      const lastMessage = prevList[prevList.length - 1];
      const newMessage = (lastMessage?.soyleyen ?? 'Mami') === 'Mami' ? mamininYeniDedigi : mertinYeniDedigi;
      setmamiKacKereMal(mamiKacKereMal + 1);

      return [...prevList, newMessage];
    })
  }

  return (
    <div>
      <button onClick={mamiBenMalimDiyor}>
        {mamiKacKereMal} x tıklandı
      </button>

      <ul>
        {
          mamininDedileri.map(md => (
            <li key={`${md.soyleyen}-${md.soyledigi}-${md.index}`}>
              {md.soyleyen}: {md.soyledigi}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
