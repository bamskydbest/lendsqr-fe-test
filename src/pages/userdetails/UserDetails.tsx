import { useParams } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import "./UserDetails.scss";
import { useEffect, useState } from "react";
import avatar from "../../assets/avatar(1).svg";
import nstar from "../../assets/np_star_1171151_000000 1.svg";
import pstar from "../../assets/np_star_1208084_000000 1.svg";

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("User ID from URL:", id);
  }, [id]);

  return (
    <div className="user-details-container">
      <Sidebar />
      <div className="main-content">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <a href="/users/:id" className="back-link">
          ← Back to Users
        </a>
        <div className="user-details-header">
          <h2>User Details</h2>
          <div className="actions">
            <button className="blacklist">Blacklist User</button>
            <button className="activate">Activate User</button>
          </div>
        </div>

        <div className="user-card">
          <div className="card-header">
            <div className="profile-section">
              <div className="avatar-placeholder">
                <img src={avatar} alt="avatar-icon" />
              </div>
              <div className="profile-name">
                <h3>Grace Effiom</h3>
                <p>LSQF587g90</p>
              </div>
            </div>
            <div className="check">
              <div className="tier-section">
                <p>User's Tier</p>
                <span>
                  <img src={pstar} alt="star-icon" />

                  <img src={nstar} alt="star-icon" />

                  <img src={nstar} alt="star-icon" />
                </span>
              </div>
              <div className="bank-section">
                <h3>₦200,000.00</h3>
                <p>9912345678/Providus Bank</p>
              </div>
            </div>
          </div>

          <div className="tabs">
            <button className="active-tab">General Details</button>
            <button>Documents</button>
            <button>Bank Details</button>
            <button>Loans</button>
            <button>Savings</button>
            <button>App and System</button>
          </div>
        </div>

        <div className="details-grid">
          <section>
            <h4>Personal Information</h4>
            <div className="row">
              <div>
                <p>Full Name</p>
                <h5>Grace Effiom</h5>
              </div>
              <div>
                <p>Phone</p>
                <h5>07068070922</h5>
              </div>
              <div>
                <p>Email</p>
                <h5>grace@gmail.com</h5>
              </div>
              <div>
                <p>BVN</p>
                <h5>07068070922</h5>
              </div>
              <div>
                <p>Gender</p>
                <h5>Female</h5>
              </div>
              <div>
                <p>Marital Status</p>
                <h5>Single</h5>
              </div>
              <div>
                <p>Children</p>
                <h5>None</h5>
              </div>
              <div>
                <p>Residence</p>
                <h5>Parent's Apartment</h5>
              </div>
            </div>
          </section>

          <section>
            <h4>Education and Employment</h4>
            <div className="row">
              <div>
                <p>Level of Education</p>
                <h5>B.Sc</h5>
              </div>
              <div>
                <p>Employment Status</p>
                <h5>Employed</h5>
              </div>
              <div>
                <p>Monthly Income</p>
                <h5>₦200,000.00 - ₦400,000.00</h5>
              </div>
              <div>
                <p>Sector</p>
                <h5>FinTech</h5>
              </div>
              <div>
                <p>Office Email</p>
                <h5>grace@lendsqr.com</h5>
              </div>
              <div>
                <p>Loan Repayment</p>
                <h5>40,000</h5>
              </div>
            </div>
          </section>

          <section>
            <h4>Socials</h4>
            <div className="row">
              <div>
                <p>Twitter</p>
                <h5>@grace_effiom</h5>
              </div>
              <div>
                <p>Facebook</p>
                <h5>Grace Effiom</h5>
              </div>
              <div>
                <p>Instagram</p>
                <h5>@grace_effiom</h5>
              </div>
            </div>
          </section>

          <section>
            <h4>Guarantor</h4>
            <div className="row">
              <div>
                <p>Full Name</p>
                <h5>Debby Ogana</h5>
              </div>
              <div>
                <p>Phone</p>
                <h5>07068070922</h5>
              </div>
              <div>
                <p>Email</p>
                <h5>debby@gmail.com</h5>
              </div>
              <div>
                <p>Relationship</p>
                <h5>Sister</h5>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
