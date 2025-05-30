export default function NotFound() {
  return (
    <div className="flex h-dvh w-full flex-col items-center bg-white">
     <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre' }} className="text-[6px] sm:text-[10px] md:text-[14px] font-bold">{`
   _____  _______      _____   ___________
  /  |  | \\   _  \\    /  |  |  \\_   _____/_____________  ___________ 
 /   |  |_/  /_\\  \\  /   |  |_  |    __)_\\_  __ \\_  __ \\/  _ \\_  __ \\
/    ^   /\\  \\_/   \\/    ^   /  |        \\|  | \\/|  | \\(  <_> )  | \\/
\\____   |  \\_____  /\\____   |  /_______  /|__|   |__|   \\____/|__|   
     |__|        \\/      |__|          \\/
     `}</pre>
           <h1 className="text-2xl">Page not found</h1>
      <p>We couldn&apos;t find this page.</p>
      <br/>
    </div>
  );
}
