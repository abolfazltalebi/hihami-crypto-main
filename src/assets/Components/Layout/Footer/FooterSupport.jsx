import { NavLink } from "react-router-dom";

export default function FooterSupport() {
  const aboutUs = [
    { id: 1, name: "Help Center", src: "/" },
    { id: 2, name: "Terms & Conditions", src: "/" },
    { id: 3, name: "Submit Ticket", src: "/" },
    { id: 4, name: "Contact Us", src: "/" },
  ];
  return (
    <div className="item2 space-y-5">
      <h2 className="text-xl font-bold">Support</h2>
      <div>
        <ul className="flex flex-col gap-4 text-white/50">
        {
          aboutUs.map((aItem)=>{
            return(
              <li key={aItem.id}>
                <NavLink to={aItem.src}>{aItem.name}</NavLink>
              </li>
            )
          })
        }
          
        </ul>
      </div>
    </div>
  );
}
