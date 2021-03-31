import React from "react";

import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import SideBar from "./SideBar";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <MemoryRouter>
      <SideBar
        title=""
        performingAction={false}
        onAboutClick={() => {}}
        onSettingsClick={() => {}}
        onSignOutClick={() => {}}
      />
    </MemoryRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
