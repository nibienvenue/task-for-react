import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <main className="page-shell">
      <div className="page-intro">
        <div><span className="eyebrow">YOUR ABC ACCOUNT</span><h1>A place that’s <em>yours.</em></h1><p>Manage your details and keep track of the good things.</p></div>
      </div>
      <section className="profile-card">
        <div className="avatar">AM</div>
        <div className="profile-details"><span className="eyebrow">WELCOME BACK</span><h2>Alex M.</h2><p>alex.m@example.com</p><p>Kayonza, Eastern Province, Rwanda</p></div>
        <button className="button button-outline" type="button" onClick={(event) => { event.currentTarget.textContent = "Details saved ✓"; }}>Edit profile <span aria-hidden="true">↗</span></button>
      </section>
      <section className="profile-bottom">
        <div><span className="eyebrow">RECENT ACTIVITY</span><h2>Your orders</h2><p>No recent orders yet. Your next favorite find is waiting.</p><Link className="text-link" to="/products">Explore products ↗</Link></div>
        <div className="profile-card-note"><span aria-hidden="true">✳</span><p>Good things are even better when they’re made just for you.</p></div>
      </section>
    </main>
  );
}
