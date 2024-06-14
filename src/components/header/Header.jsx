import "./header.css";

export default function Header() {
  return (
    <div className="header">

        <div className="headerTitles">
          <span className="headerTitleSm">Love travelling?</span>
          <span className="headerTitleLg">TRAVEL BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="flowers"
        />
      </div>
  );
}