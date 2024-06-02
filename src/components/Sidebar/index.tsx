

export default function Sidebar({children}) {
  return (
    <div>
      <div className="h-[50%] w-[screen] bg-orange-500"> howdy</div>
      <div className="min-h-screen w-screen overflow-x-auto flex bg-red-200">

        <aside className="flex flex-col w-[40%] bg-green-300">
         <h2>Sidebar</h2>
         <ul>
           <li>Item 1</li>
           <li>Item 2</li>
           <li>Item 3</li>
         </ul>
         </aside>
        <div className="w-[60%] z-10 overflow-auto flex flex-col">{children}</div>

      </div>
      </div>
  );
}
