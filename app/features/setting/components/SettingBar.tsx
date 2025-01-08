import React from "react";
("use SettingBar");
import { Sidebar } from "flowbite-react";
import { Link } from "react-router";
import { Outlet } from "react-router";


const SettingBar = () => {
  return (
    <>
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="" className="no-underline">
          Brand Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            Email Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            Pusher Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            Payment Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            ReCaptcha Setting
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            Storage Setting
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            Cache Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            SEO Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            Cookie Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" className="no-underline">
            ChatGpt Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

    </>
  );
};

export default SettingBar;
