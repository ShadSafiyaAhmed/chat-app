import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover: bg-emerald-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-300">Clinto George</p>
            <span>😍😍</span>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Conversation;
