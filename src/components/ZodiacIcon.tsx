interface ZodiacIconProps {
  sign: string;
  size?: number;
  className?: string;
}

const zodiacIcons = {
  'Овен': (
    <path d="M12 2C12 2 8 6 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 6 12 2 12 2Z M8 10C6 10 4 12 4 14 M16 10C18 10 20 12 20 14" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Телец': (
    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z M8 6C8 4 9 2 12 2C15 2 16 4 16 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Близнецы': (
    <path d="M6 2V22 M18 2V22 M6 7H18 M6 17H18" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Рак': (
    <path d="M12 2C16 2 20 6 20 12C20 16 18 18 16 18C14 18 12 16 12 14C12 16 10 18 8 18C6 18 4 16 4 12C4 6 8 2 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Лев': (
    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z M12 6C12 4 10 2 8 2C6 2 4 4 4 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Дева': (
    <path d="M3 2V20C3 21 4 22 5 22H6 M8 2V14C8 16 10 18 12 18S16 16 16 14V2 M20 2V22 M12 18C14 18 16 20 16 22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Весы': (
    <path d="M12 2V22 M7 6C5 6 3 8 3 10S5 14 7 14S11 12 11 10S9 6 7 6Z M17 6C15 6 13 8 13 10S15 14 17 14S21 12 21 10S19 6 17 6Z M3 18H21" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Скорпион': (
    <path d="M3 2V14C3 16 5 18 7 18C9 18 11 16 11 14V2 M11 14C11 16 13 18 15 18C17 18 19 16 19 14V2 M15 18L19 14L22 17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Стрелец': (
    <path d="M2 22L22 2 M17 2H22V7 M8 8L16 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Козерог': (
    <path d="M12 2V14C12 18 8 22 4 22C2.89543 22 2 21.1046 2 20V16C2 14.8954 2.89543 14 4 14C5.10457 14 6 14.8954 6 16V18 M12 14C14 14 16 16 16 18S18 22 20 22S22 20 22 18S20 16 18 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Водолей': (
    <path d="M2 8C4 6 6 8 8 6C10 8 12 6 14 8C16 6 18 8 20 6C20 8 22 6 22 8 M2 16C4 14 6 16 8 14C10 16 12 14 14 16C16 14 18 16 20 14C20 16 22 14 22 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  ),
  'Рыбы': (
    <path d="M2 12C6 8 10 16 12 12C14 16 18 8 22 12 M2 12C6 16 10 8 12 12C14 8 18 16 22 12 M12 2V22" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  )
}

export default function ZodiacIcon({ sign, size = 64, className = "" }: ZodiacIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      {zodiacIcons[sign as keyof typeof zodiacIcons] || zodiacIcons['Овен']}
    </svg>
  )
}