import React, { lazy, useState, useEffect } from "react";
import "../../css/style.css";

const MentorCard = lazy(() => import("./MentorCard.component"));
const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component.jsx";
import { MainSection } from "./MainSection.component";

export default function HomePage() {
  const [mentorInfo, setMentorInfo] = useState([]);

  useEffect(() => {
    // loading mentorInfo form databse by call axios
    setMentorInfo([
      {
        name: "Pham Viet Hoa",
        major: "Infomation Technology",
        overview:
          "Pham Viet Hoa dep trai thanh lich vo dich khap vu tru oke nha may ban, lam on ha cai toi xuong.",
        avatarUrl:
          "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/118711124_342979126887840_2435622899709902230_o.jpg?_nc_cat=109&ccb=2&_nc_sid=dbb9e7&_nc_ohc=zKbXAEJF-50AX_zG_PJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=6d6063b7a2b4730881175c8e892dde95&oe=601D2C56",
      },
      {
        name: "Le Vo Thanh Thao",
        major: "Artist",
        overview: "Le Vo Thanh Thao, Cu te, em gai nuoi cua a Hoa.",
        avatarUrl:
          "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p100x100/133035022_2871980963022327_6176401707315165833_n.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=hwWsKK-hoNcAX_3ERWf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-sin6-2.xx&tp=6&oh=a0911b0e1b54f687ab12f08660c3f231&oe=601BB392",
      },
      {
        name: "Le Vo Thanh Thao",
        major: "Artist",
        overview: "Le Vo Thanh Thao, Cu te, em gai nuoi cua a Hoa.",
        avatarUrl:
          "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p100x100/133035022_2871980963022327_6176401707315165833_n.jpg?_nc_cat=105&ccb=2&_nc_sid=7206a8&_nc_ohc=hwWsKK-hoNcAX_3ERWf&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-sin6-2.xx&tp=6&oh=a0911b0e1b54f687ab12f08660c3f231&oe=601BB392",
      },
    ]);
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem
            url="/request-management"
            featureName="Requests management"
          />
          <FeatureItem
            url="/host-management"
            featureName="Hosting management"
          />
          <FeatureItem
            url="/join-management"
            featureName="Joining management"
          />
        </SideBar>
        <MainSection>
          {mentorInfo.map((info, index) => (
            <MentorCard key={index} info={info} />
          ))}
        </MainSection>
      </div>
    </>
  );
}
