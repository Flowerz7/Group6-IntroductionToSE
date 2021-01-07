import React, { lazy, useEffect, useState } from "react";
import "../../css/style.css";

const ProfileSection = lazy(() => import("./ProfileSection.component"));
const MainNavbar = lazy(() => import("./Navbar.component"));
import { SideBar, FeatureItem } from "./SideBar.component";

export default function ProfilePage(props) {
  const [profile, setProfile] = useState();

  useEffect(() => {
    // Call axios get the profile with the given userID:
    const userID = props.match.params.userID;
    setProfile({
      userID: "1",
      name: "Pham Viet Hoa",
      major: "Infomation Technology",
      overview:
        "Pham Viet Hoa dep trai thanh lich vo dich khap vu tru oke nha may ban, lam on ha cai toi xuong.",
      avatarUrl:
        "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/118711124_342979126887840_2435622899709902230_o.jpg?_nc_cat=109&ccb=2&_nc_sid=dbb9e7&_nc_ohc=zKbXAEJF-50AX_zG_PJ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=6d6063b7a2b4730881175c8e892dde95&oe=601D2C56",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio expedita eveniet harum fugiat temporibus rerum alias nesciunt aliquam aliquid, sint reiciendis omnis accusamus placeat dolorum eos quasi commodi nisi doloribus, cum atque doloremque magnam. Excepturi ratione natus quas tempora at? ",
    });
  }, []);

  return (
    <>
      <MainNavbar />
      <div className="container">
        <SideBar>
          <FeatureItem url="#" featureName="Update my profile" />
        </SideBar>
        <ProfileSection info={profile} />
      </div>
    </>
  );
}
