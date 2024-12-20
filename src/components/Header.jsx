import { useContext } from "react";
import { Context } from "../utils/Context";
import logoIcon from "../assets/logo.svg";

import moment from "moment";

// UI Components
import Button from "./Button";
import { MdAdd } from "react-icons/md";

const Header = () => {
  const { setShowForm } = useContext(Context);

  return (
    <header className="p-4 flex flex-row items-center justify-between">
      <div className="space-y-1">
        <div className="flex items-center gap-x-2 drop-shadow-lg ">
          <img src={logoIcon} alt="Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold">To-Do</h1>
        </div>
        <p className="text-sm text-gray-500">
          {moment(Date()).format("dddd, D MMMM")}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-row items-center">
        <Button
          title="Add Task"
          className=""
          startIcon={<MdAdd size={24} />}
          onClick={() => setShowForm(true)}
        />
      </div>
    </header>
  );
};

export default Header;
